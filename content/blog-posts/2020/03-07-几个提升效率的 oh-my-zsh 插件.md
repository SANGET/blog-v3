---
author: Alex
date: 2020-03-07
layout: post
title: 几个提升效率的 oh-my-zsh 插件
# description: 
keywords: 
  - oh-my-zsh 插件
tags:
  - 记录
  - 技术
---

先安装 `zsh` 和 `oh-my-zsh`(这里略过安装过程)

这里主要是介绍几个可以提高效率的 `zsh plugins`

- zsh-autosuggestions
  - 命令提示
  - `git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions`
- zsh-syntax-highlighting
  - 命令语法高亮，可以清晰知道输入是否正确
  - `git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting`
- z
  - 已进入过的 path 的提示，例如想进入 /etc/www，只需要输入 www 然后通过 tab 键补全为 /etc/www
  - oh-my-zsh 自带，无需额外安装

plugin 安装很简单，只需要将对应的插件 clone 到 `${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/` 目录下即可。下载完以后在 `~/.zshrc` 中激活

```shell
# 在 ~/.zshrc 激活插件
plugins=(git zsh-autosuggestions zsh-syntax-highlighting z)
```

## For Ubuntu

```sh
sudo apt get zsh # 获取 zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" # 获取 oh-my-zsh
sudo chsh -s /bin/zsh # 将 zsh 设置为默认 shell
```

设置 root 的临时密码

- 参考: https://amazonaws-china.com/cn/premiumsupport/knowledge-center/set-change-root-linux/

## TODO

为了可以更好更高效率地做虚拟服务器管理，后续写一个脚本，直接在全新机器上设置 zsh 对应的配套，提高效率。
