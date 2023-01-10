---
title: "archlinux安装及美化教程（1）"
date: 2022-07-24T18:51:34Z
draft: true
---

**善用通配符（可信环境下）和熟悉命令的缩写可以让你少打些字。**

# 安装前的准备

## 获取安装映像

访问 https://mirrorz.org/os/archlinux ，并根据需要的引导方式，获取 ISO 文件或 netboot 映像以及相应的 GnuPG 签名。

## 验证签名

建议使用前先验证所下载文件的签名，特别是从 HTTP 镜像源 下载的文件，因为 HTTP 连接一般来说容易遭到拦截而 提供恶意镜像。

在一台已经安装 GnuPG 的系统上，可通过下载 PGP 签名 (在 下载 页面的 Checksums 下方) 到 ISO 文件所在的路径，然后用以下方式 验证签名：

```sh
gpg --keyserver-options auto-key-retrieve --verify archlinux-version-x86_64.iso.sig
```

注意： archlinux 安装镜像不支持安全启动（Secure Boot）。要引导安装媒介，需要 禁用安全启动。如果需要，可在完成安装后重新配置 安全启动。
选择从带有 Arch 安装文件的媒介启动，通常是要在 计算机开机自检 时按下某个按键，一般在启动画面会有提示。具体情况请参考主板说明书。
当引导加载程序菜单出现时，选择 Arch Linux install medium 并按 Enter 进入安装环境。
提示： 安装映像在 UEFI 模式下使用 GRUB 引导，在 BIOS 模式下使用 syslinux 引导。请参阅 README.bootparams 获取 引导参数 列表。
您将会以 root 身份登录进一个虚拟控制台，默认的 Shell 是 Zsh。

# 控制台键盘布局

控制台键盘布局默认为 us（美式键盘映射）。列出所有可用的键盘布局，可以使用：

```sh
ls /u*/sh*/kbd/k*/**/*.map.gz
```

如果您想要更改键盘布局，可以将相应文件名添加进 loadkeys(1)，但请省略路径和扩展名。**比如**，要添加德语键盘布局：

```sh
sudo loadkeys de-latin1
```

控制台字体 位于 /usr/share/kbd/consolefonts/ 目录中，设置方式请参考 setfont(8)。

根据 #获取安装映像 中所述，下载并引导安装介质。启动完成后将会自动以 root 身份登录虚拟控制台并进入 Z-shell。

# 连接到互联网

要在 Live 环境中配置网络连接，请跟随以下步骤：
确保系统已经启用了网络接口，用 ip-link(8) 检查：

```sh
ip a s
```

对于无线局域网（Wi-Fi）和无线广域网（WWAN），请确保网卡未被 rfkill 禁用。
要连接到网络：
有线以太网 —— 连接网线。
WiFi —— 使用 iwctl 验证无线网络。
移动宽带调制解调器（移动网卡） - 使用 mmcli 实用程序连接到移动网络。

## 配置网络连接

### DHCP

对于有线以太网、无线局域网（WLAN）和无线广域网（WWAN）网络接口来说，动态 IP 地址和 DNS 服务器分配（由 systemd-networkd 和 systemd-resolved 提供机能）能够开箱即用。

### 静态 IP 地址

```sh
ip 
```

## 用 ping 检查网络连接

```sh
ping g.cn  # Google中国的一个比较短的域名
```

注意： 默认情况下，安装映像已预配置好并启用了 systemd-networkd、systemd-resolved、iwd 和 ModemManager。但已经安装好了的系统并非如此。

## 更新系统时间

使用 timedatectl(1) 确保系统时间是准确的：

```sh
sudo timedatectl set-ntp true
```

可以使用 `timedatectl status` 检查服务状态。

# 验证引导模式

要验证引导模式，请用下列命令列出 efivars 目录：

```sh
ls -d /sys/f*/e*/*s
```

若命令结果显示了`/sys/firmware/efi/efivars` 则系统以 UEFI 模式引导，否则系统可能以 BIOS 模式 (或 CSM 模式) 引导。如果系统未以您想要的模式引导启动，请参考您的主板说明书。

# 建立硬盘分区

系统如果识别到磁盘，就会将其分配为一个块设备，如 /dev/sda、/dev/nvme0n1 或 /dev/mmcblk0。可以使用 lsblk 或者 fdisk 查看`(熟练的话，可以直接看/dev目录判断设备）`：

```sh
sudo fdisk -l
```

结果中以 rom、loop 或者 airoot 结尾的设备可以被忽略。

对于一个选定的设备，以下分区是必须要有的：

一个根分区（挂载在 根目录）/；
要在 UEFI 模式中启动，还需要一个 EFI 系统分区。
如果需要创建多级存储例如 LVM、disk encryption 或 RAID，请在此时完成。

请使用 fdisk 或 parted 修改分区表。例如：

```sh
sudo fdisk /dev/the_disk_to_be_partitioned（要被分区的磁盘）
```

**注意：
如果想要的磁盘没有显示出来， 确保磁盘控制器未处于RAID模式.
如果要启动的磁盘已经有一个EFI系统分区，不要新建 EFI 分区，请使用现有的分区。
如果文件系统支持（btrfs是支持的）交换空间 可以通过 交换文件 实现。**

## 分区

UEFI 与 GPT

| 挂载点       | 分区                        | 分区类型     | 建议大小                   |
| --------- | ------------------------- | -------- | ---------------------- |
| /mnt/boot | /dev/efi_system_partition | EFI 系统分区 | 至少 300 MiB(因操作系统的数量而异) |

如果使用的引导加载程序能够从根磁盘卷中加载内核和 initramfs 映像，则可以使用其他挂载点（例如 /mnt/efi）。请参阅引导加载程序中的警告部分。
BIOS 与 MBR
| 挂载点 | 分区 | 分区类型 | 建议大小 |
| --- | --- | --- | --- |
| [SWAP] |/dev/swap_partition|    Linux swap (交换空间)| 物理内存的两倍<br>内存信息可见 free -h --si |
| /mnt    | /dev/root_partition|    Linux    |剩余空间|

## 格式化分区

创建分区后，必须使用合适的文件系统对每个新创建的分区进行格式化。详情请参阅文件系统#创建文件系统。

例如，要在根分区 /dev/root_partition 上创建一个 Btrfs 文件系统，请运行：

```sh
sudo mkfs.btrfs /dev/root_partition（根分区）
```

如果创建了交换分区，请使用 mkswap(8) 将其初始化：

```sh
sudo mkswap /dev/swap_partition（交换空间分区）
```

注意： 对于堆叠式块设备（stacked block devices）请使用恰当的块设备路径替换上文中的 /dev/*_partition 处。
如果你要创建一个 EFI 系统分区，使用 mkfs.fat(8) 将其格式化为 Fat32。
`警告： 只有在分区步骤中创建 EFI 系统分区时才需要格式化。如果这个磁盘上已经有一个 EFI 系统分区了，将它重新格式化会破坏其他已安装操作系统的引导加载程序。`

```sh
sudo mkfs.fat -F 32 /dev/efi_system_partition
```

挂载分区
将根磁盘卷挂载到 /mnt，例如：

```sh
mount /dev/root_partition（根分区） /mnt
```

然后使用 mkdir(1) 创建其他剩余的挂载点（比如 /mnt/efi）并挂载其相应的磁盘卷。

提示： 使用 --mkdir 选项运行 mount(8) 来创建指定的挂载点。或者，先使用 mkdir(1) 创建挂载点再挂载。
注意： 挂载分区一定要遵循顺序，先挂载根（root）分区（到 /mnt），再挂载引导（boot）分区（到 /mnt/boot 或 /mnt/efi，如果单独分出来了的话），最后再挂载其他分区。否则您可能遇到安装完成后无法启动系统的问题。参见 Talk:Installation_guide#Clarify_root_mount。
对于 UEFI 系统，挂载 EFI 系统分区：

```sh
sudo mount /dev/efi_system_partition /mnt/boot
```

如果创建了交换空间卷，请使用 swapon(8) 启用它：

```sh
sudo swapon /dev/swap_partition（交换空间分区）
```

稍后 genfstab(8) 将自动检测挂载的文件系统和交换空间。

# 安装

## 选择镜像

文件 `/etc/pacman.d/mirrorlist` 定义了软件包会从哪个镜像下载。在 LiveCD 启动的系统上，在连接到互联网后，reflector 会通过选择 20 个最新同步的 HTTPS 镜像并按下载速率对其进行排序来更新镜像列表。

也可以考虑自己的标准，比如：
选择在最近12小时内同步，并且位于中国内地、中国香港、印度、日本、俄罗斯、新加坡、中国台湾 的镜像，根据下载速度进行排序，最多取5个结果覆写到 `/etc/pacman.d/mirrorlist` 文件内。另外可根据自己的地理位置删掉距离太远的区域代码。

```sh
sudo reflector -c CN,HK,IN,JP,RU,SG,TW -a 12 -p https --sort rate -n 5 --save /etc/pacman.d/mirrorlist
```

这个文件接下来还会被 pacstrap 拷贝到新系统里，所以请确保设置正确。

## 额外的第三方源

### archlinuxcn

```sh
pacman -S rankmirrors
curl -s https://cdn.jsdelivr.net/gh/archlinuxcn/mirrorlist-repo@master/archlinuxcn-mirrorlist | tail -n +9 | sed 's/^# S/S/' | rankmirrors -n 6 - | tail -n 6 > /etc/pacman.d/archlinuxcn-mirrorlist
```

安装必需的软件包
使用 pacstrap(8) 脚本，安装 base 软件包和 Linux 内核以及常规硬件的固件：

```
pacstrap /mnt base base-devel linux-zen linux-zen-headers sudo vim networkmanager btrfs-progs sway kitty fcitx5-rime rime-data
```

# 配置系统

## Fstab

用以下命令生成 fstab 文件 (用 -U 或 -L 选项设置 UUID 或卷标)：

```sh
genfstab -U /mnt >> /mnt/etc/fstab
```

强烈建议在执行完以上命令后，检查一下生成的 /mnt/etc/fstab 文件是否正确。

## Chroot

chroot 到新安装的系统：

```sh
arch-chroot /mnt
```

## 时区

设置时区：

```sh
sudo ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

然后运行 hwclock(8) 以生成 /etc/adjtime：

```sh
sudo hwclock -w
```

这个命令假定已设置硬件时间为 UTC 时间。详细信息请查看 System time#Time standard。

## 本地化

程序和库如果需要本地化文本，都依赖区域设置，后者明确规定了地域、货币、时区日期的格式、字符排列方式和其他本地化标准。

需在这两个文件设置：locale.gen 与 locale.conf。

编辑 /etc/locale.gen，然后取消掉 en_US.UTF-8 UTF-8 和其他需要的 区域设置 前的注释（#）。
比较常见的需求

```
en_US.UTF-8 UTF-8 # 美式英语，基本是必须的，不可避免
ja_JP.UTF-8 UTF-8 # 生肉黄油啥的，嗑，刹车
ru_RU.UTF-8 UTF-8 # 如果想找俄罗斯的破解软件
zh_CN.GB18030 GB18030 # 老软件用
zh_CN.GBK GBK # 老软件用
zh_CN.UTF-8 UTF-8 # 内地简体
zh_HK.UTF-8 UTF-8 # 香港繁体
zh_TW.UTF-8 UTF-8 # 台湾正体 
zh_TW BIG5 # 老软件用
```

接着执行 locale-gen 以生成 locale 信息：

```
sudo locale-gen
```

然后创建 locale.conf(5) 文件，并 编辑设定 LANG 变量为英语，方便看日志：

```conf
LANG=en_US.UTF-8
```

这个时候可以顺便安装中文字体，后面重启后可通过 `LANG=zh_CN.UTF-8 sway` 直接进入中文环境

/etc/vconsole.conf
KEYMAP=de-latin1
网络配置
创建 hostname 文件:

/etc/hostname
myhostname（主机名）
请接着完成新安装的环境的网络配置，配置过程中可能需要安装合适的网络管理软件。

Initramfs
通常不需要自己创建新的 initramfs，因为在执行 pacstrap 时已经安装 linux，这时已经运行过 mkinitcpio 了。

对于 LVM、 system encryption 或 RAID 等分区配置，请修改 mkinitcpio.conf 并用以下命令重新创建一个 Initramfs：

```
sudo mkinitcpio -P
```

Root 密码
设置 Root 密码：

```sh
sudo passwd
```

安装引导程序
需要安装 Linux 引导加载程序，才能在安装后启动系统，可以使用的的引导程序已在 启动加载器 中列出，请选择一个安装并配置它，GRUB (简体中文) 是最常见的选择。

```sh
grub-install /dev/
```

如果有 Intel 或 AMD 的 CPU，请另外启用 微码 更新。

警告： 这是安装的最后一步也是至关重要的一步，请按上述指引正确安装好引导加载程序后再重新启动。否则重启后将无法正常进入系统。
重启
输入 exit 或按 Ctrl+d 退出 chroot 环境。

可选用 umount -R /mnt 手动卸载被挂载的分区：这有助于发现任何「繁忙」的分区，并通过 fuser(1) 查找原因。

最后，通过执行 reboot 重启系统，systemd 将自动卸载仍然挂载的任何分区。不要忘记移除安装介质，然后使用 root 帐户登录到新系统。