#if you come from bash you might have to change your $PATH.
export PATH=$PATH:/usr/local/bin
export ANDROID_HOME=${HOME}/Library/Android/sdk
export PATH=${PATH}:${ANDROID_HOME}/tools
export PYENV_ROOT="$HOME/.pyenv"
export PATH=${PATH}:${ANDROID_HOME}/platform-tools
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"
export PATH="$HOME/.goenv/bin:$PATH"
eval "$(goenv init -)"


export BOOST_ROOT=/usr/local/Cellar/boost/1.70.0
export BOOST_LIBRARYDIR=/usr/local/boost/lib
# Path to your oh-my-zsh installation.
export ZSH=/Users/matsumotoyuuta/.oh-my-zsh

# Set name of the theme to load. Optionally, if you set this to "random"
# it'll load a random theme each time that oh-my-zsh is loaded.
# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="candy"

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion. Case
# sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# The optional three formats: "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load? (plugins can be found in ~/.oh-my-zsh/plugins/*)
# Custom plugins may be added to ~/.oh-my-zsh/custom/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git ruby osx bundler brew rails emoji-clock)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# ssh
# export SSH_KEY_PATH="~/.ssh/rsa_id"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

# 文字コードの指定
export LANG=ja_JP.UTF-8
 
# 日本語ファイル名を表示可能にする
setopt print_eight_bit
 
# cdなしでディレクトリ移動
setopt auto_cd
 
# ビープ音の停止
setopt no_beep
 
# ビープ音の停止(補完時)
setopt nolistbeep
 
# cd -<tab>で以前移動したディレクトリを表示
setopt auto_pushd
 
# ヒストリ(履歴)を保存、数を増やす
HISTFILE=~/.zsh_history
HISTSIZE=100000
SAVEHIST=100000
 
# 同時に起動したzshの間でヒストリを共有する
setopt share_history
 
# 直前と同じコマンドの場合は履歴に追加しない
setopt hist_ignore_dups
 
# 同じコマンドをヒストリに残さない
setopt hist_ignore_all_dups
 
# スペースから始まるコマンド行はヒストリに残さない
setopt hist_ignore_space
 
# ヒストリに保存するときに余分なスペースを削除する
setopt hist_reduce_blanks
 
# キーバインディングをemacs風に(-vはvim)
bindkey -e
# bindkey -v
 
# zsh-completionsの設定
fpath=(/path/to/homebrew/share/zsh-completions $fpath)
 
autoload -U compinit
compinit -u

# git alias
alias pull='git pull'
alias push='git push'
alias gs='git status'
alias stt='git status -uno'

###-tns-completion-start-###
if [ -f /Users/matsumotoyuuta/.tnsrc ]; then 
    source /Users/matsumotoyuuta/.tnsrc 
fi
###-tns-completion-end-###

mongod -dbpath /usr/local/var/mongodb &
redis-server &


export JAVA_HOME=`/System/Library/Frameworks/JavaVM.framework/Versions/A/Commands/java_home -v "1.8"`
PATH=${JAVA_HOME}/bin:${PATH}

ssh-add ~/.ssh/airClosetKey.pem
ssh-add ~/.ssh/pickss.pem
ssh-add ~/.ssh/pickss-api.pem
ssh-add ~/.ssh/id_rsa
ssh-add ~/.ssh/ac-batch-prod.pem

java -Djava.library.path=./DynamoDBLocal_lib -jar DynamoDBLocal.jar -sharedDb &
[[ -s "$HOME/.avn/bin/avn.sh" ]] && source "$HOME/.avn/bin/avn.sh" # load avn

# The next line updates PATH for the Google Cloud SDK.
if [ -f '/Users/matsumotoyuuta/google-cloud-sdk/path.zsh.inc' ]; then . '/Users/matsumotoyuuta/google-cloud-sdk/path.zsh.inc'; fi

# The next line enables shell command completion for gcloud.
if [ -f '/Users/matsumotoyuuta/google-cloud-sdk/completion.zsh.inc' ]; then . '/Users/matsumotoyuuta/google-cloud-sdk/completion.zsh.inc'; fi
export PYENV_ROOT="$HOME/.pyenv"
export PATH="$PYENV_ROOT/bin:$PATH"
eval "$(pyenv init -)"

postgres -D /usr/local/var/postgres &
