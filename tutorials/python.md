---
title: Intro to Python
layout: tutorial
---
# Intro to Python



## Setting Up

### Installing Python

#### Linux

Most installations of linux have Python 2.7.x and Python 3.x preinstalled so you shouldn't have any trouble using python on it. To verify your python installation try the following commands in the shell. If your version of linux happens to not have python preinstalled (which is very rare), you can download and build python from source or use the inbuilt package manager (eg. apt) to install it. Since installation instructions vary between various flavors, its best to simply google the instructions for your version.

```
python -V
```
```
python3 -V
```

#### Mac

Much like linux, Mac also comes with python 2.7.x preinstalled on the system. You can verify the installation by running the following in the shell
```
python -V
```
If you would like to upgrade your version of python or install python3 then you can download the latest install from https://www.python.org/downloads/mac-osx/

#### Windows

Unlike the UNIX based operating systems, windows does not come with python preinstalled and because OS level differences, there are certain libraries that don't work on windows (and some that dont work on unix but those are rarer). To install python on your windows machine, download the latest release of the python installer from https://www.python.org/downloads/windows/

After the installation is finished, the python interpreter is stored in `C:\Python27` (might differ based on your version of python). You will also see the python shell in your installed programs. To use python from your normal command line or Powershell you need to add python to your PATH. You can do that by adding `C:\Python27\;C:\Python27\Scripts\` or by running the following in the Powershell.
```
[Environment]::SetEnvironmentVariable("Path", "$env:Path;C:\Python27\;C:\Python27\Scripts\", "User")
```

### Setuptools and Pip

Setuptools is a python library that facilitates packaging projects by enhancing the Python standard library distutils . Pip is the package manager used by Python. You will use this to install new libraries and to keep them up to date. They both go hand in hand are a key part of any python programmer's toolbelt.

#### Linux

To install Setuptools on a Linux machine, run the following command in the terminal
```
wget https://bootstrap.pypa.io/ez_setup.py -O - | sudo python
```

Once that is done, you can use the Setuptools to install Pip
```
sudo easy_install pip
```
#### Mac

The installation instructions for Mac are almost identical installing it on a Linux machine. You run
```
curl https://bootstrap.pypa.io/ez_setup.py -o - | sudo python
```
and then
```
sudo easy_install pip
```

#### Windows

The easiest way to install Setuptools on windows is to run the following in Powershell or downloading the file the command links to and running it in python.

```
(Invoke-WebRequest https://bootstrap.pypa.io/ez_setup.py).Content | python -
```

To install, you need to download the [get_pip.py](https://bootstrap.pypa.io/get-pip.py) file and running it in python.

### Difference between Python 2.x and 3.x

#### What are the differences

Short version: Python 2.x is legacy, Python 3.x is the present and future of the language

Python 3.0 was released in 2008. The final 2.x version 2.7 release came out in mid-2010, with a statement of extended support for this end-of-life release. The 2.x branch will see no new major releases after that. 3.x is under active development and has already seen over five years of stable releases, including version 3.3 in 2012, 3.4 in 2014, and 3.5 in 2015. This means that all recent standard library improvements, for example, are only available by default in Python 3.x.

Guido van Rossum (the original creator of the Python language) decided to clean up Python 2.x properly, with less regard for backwards compatibility than is the case for new releases in the 2.x range. The most drastic improvement is the better Unicode support (with all text strings being Unicode by default) as well as saner bytes/Unicode separation.

#### What version should I use?

If you can do exactly what you want with Python 3.x, great! There are a few minor downsides, such as very slightly worse library support and the fact that some current Linux distributions and Macs are still using 2.x as default (although Python 3 ships with many of them), but as a language Python 3.x is definitely ready. As long as Python 3.x is installed on your user's computers (which ought to be easy, since many people reading this may only be developing something for themselves or an environment they control) and you're writing things where you know none of the Python 2.x modules are needed, it is an excellent choice.

However, there are some key issues that may require you to use Python 2 rather than Python 3.

* Firstly, if you're deploying to an environment you don't control, that may impose a specific version, rather than allowing you a free selection from the available versions.
* Secondly, if you want to use a specific third party package or utility that doesn't yet have a released version that is compatible with Python 3, and porting that package is a non-trivial task, you may choose to use Python 2 in order to retain access to that package.

For the intents and purposes of this tutorial, it doesn't matter what version of python of python you use. I will be using version 2.7.10 mostly because I'm too lazy to install Python3 on this computer and also because typing python is easier than typing python3 (And I'm too lazy to setup an alias to go around that)

#### Learn More

* [Python2 or Python3](https://wiki.python.org/moin/Python2orPython3)
  + This is the website I quoted in the above section
* [The key differences between Python 2.7.x and Python 3.x with examples](http://sebastianraschka.com/Articles/2014_python_2_3_key_diff.html)

## Using the interactive shell

This section has a few examples that encourage you to type into the interactive shell, which lets you execute Python instructions one at a time and shows you the results instantly. Using the interactive shell is great for learning what basic Python instructions do, so give it a try as you follow along. You’ll remember the things you do much better than the things you only read.

You launch the interactive shell by typing `python` in your shell. This will launch your shell and give you information about your installation such as version and platform.

### Simple Math

Once you run the command, A window with the >>> prompt should appear; that’s the interactive shell. Enter 2 + 2 at the prompt to have Python do some simple math.

```shell
>>> 2 + 2
4
```

In Python, 2 + 2 is called an expression, which is the most basic kind of programming instruction in the language. Expressions consist of values (such as 2) and operators (such as +), and they can always evaluate (that is, reduce) down to a single value. That means you can use expressions anywhere in Python code that you could also use a value. In the previous example, 2 + 2 is evaluated down to a single value, 4. A single value with no operators is also considered an expression, though it evaluates only to itself, as shown here:

```shell
>>> 2
2
```

There are plenty of operators you can use in python and the following table lists a few of them ordered in order of precedence.

| Operator | Operation | Example | Evaluates to |
|:-------------:|:-------------:|:-------------:|:-------------:|:-------------:|
| ** | Exponent | 2 ** 3 | 8|
| % | Modulus/remainder | 22 % 8 | 6|
| // | Integer division/floored quotient | 22 // 8 | 2|
| / | Division | 22 / 8 | 2.75|
| * | Multiplication | 3 * 5 | 15|
| - | Subtraction | 5 - 2 | 3|
| + | Addition | 2 + 2 | 4|

The following are some examples of math in the python shell.

```shell
>>> 2 + 3 * 6
20
>>> (2 + 3) * 6
30
>>> 48565878 * 578453
28093077826734
>>> 2 ** 8
256
>>> 23 / 7
3.2857142857142856
>>> 23 // 7
3
>>> 23 % 7
2
>>> 2 + 2
4
>>> (5 - 1) * ((7 + 1) / (3 - 1))
16.0
```

### Data Types
Remember that expressions are just values combined with operators, and they always evaluate down to a single value. A data type is a category for values, and every value belongs to exactly one data type. The most Python Basics 17 common data types in Python are listed in Table 1-2. The values -2 and 30, for example, are said to be integer values. The integer (or int) data type indicates values that are whole numbers. Numbers with a decimal point, such as 3.14, are called floating-point numbers (or floats). Note that even though the value 42 is an integer, the value 42.0 would be a floating-point number.

| Data type | Examples |
|:-------------:|:-------------:|
|Integers | -2, -1, 0, 1, 2, 3, 4, 5 |
Floating-point numbers | -1.25, -1.0, --0.5, 0.0, 0.5, 1.0, 1.25 |
Strings | 'a', 'aa', 'aaa', 'Hello!', '11 cats' |

Note: Strings can be single quoted or double quoted and there is no difference between them.<sup>[source](https://docs.python.org/2.0/ref/strings.html)</sup>
