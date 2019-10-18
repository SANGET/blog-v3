最近在重新配置 zsh，发现以前的用法效率很低，很多东西可以学习，温故而知新。以下是一些 zsh 插件，极大提高效率的：

- zsh-autosuggestions
- zsh-syntax-highlighting
- z

前两个需要手动安装写入配置，最后一个是 oh my zsh 自带的，但需要手动添加使用。安装过程也很简单，先安装 oh-my-zsh，然后把插件 clone 到 ~/.oh-my-zsh/plugins 目录下，在 ~/.zshrc 的 plugins 应用就可以了

~/.zshrc

```shell
plugins=(git zsh-autosuggestions zsh-syntax-highlighting z)
```

## TODO

为了可以更好更高效率地做虚拟服务器管理，后续写一个脚本，直接在全新机器上设置 zsh 对应的配套，提高效率。
