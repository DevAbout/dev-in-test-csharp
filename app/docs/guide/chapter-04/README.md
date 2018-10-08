# Introduction to C#

In this introduction we will write our first C# program. Once again the purpose here is to get an idea of what C# is and what role it plays.

Let's begin by defining a few terms:
* **A program** is a set of instructions which a computer executes
* **A programing language** is a formal language used by developers to produce programs

In this guide we will be focusing on a programming language called C#, pronounced C-sharp. We will avoid much of the jargon and jump straight into an example. As with most introductions to programming we will start with the classic [Hello, world!](https://stackoverflow.com/a/12785204/259477).

This example is often used to verify that the development environment is setup correctly. We will begin by looking at the code in .Net Fiddle. After this we will then get the code running from our own computers.

## Hello World in .NET Fiddle

[.NET Fiddle](https://dotnetfiddle.net) is a convenient online tool which enables us to test out code and share the examples. Below is the `Hello, World!` example embedded .NET Fiddle. The top section contains the C# code, while the output is in the lower rectangle.

<iframe width="100%" height="475" src="https://dotnetfiddle.net/Widget/aoUQho" frameborder="0"></iframe>

The first line of this code defines a `class`. A program may contain multiple classes. These classes are the key building blocks in a C# program. In this case the class is named `Program`, however a developer can give a different name if they choose. In this program the `class` is the outer code block and it contains a nested section. This inner section is known as a `method`.

This particular `method` is special. It is the `Main` method. It serves as the entry point of the program. When the computer executes this program it will start with the first line defined within the `Main` method. The name `Main` is important. A program must have this method in order to be run.

> The Main method is the entry point of an executable program; it is where the program control starts and ends. [Microsoft Programming-Guide](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/main-and-command-args/)

Within the body of the `Main` function there is a line of code which instruct the computer to display the text `Hello, World!`. In this case the output is shown in the area below the code.

Feel free to experiment with this code. Here are somethings you can try:
* Try replacing `Word` with your name to see the results
* Add multiple `WriteLine` statements on separate lines (e.g. copy paste line 5)
* Rename the `class`
* Rename the `Main` method, wait and see what errors appear
* Remove a bracket and see what errors are shown
* Do spaces matter?

::: tip
The changes you make to the code above will only be seen by you and will not affect this guide. Please play around with it, this is a safe *sandbox*. Refreshing the browser will restore the example to its original state.
:::

## Compiling Code

In the previous example it would appear that a computer can directly execute C# source code. In reality .Net Fiddle was shielding us from an intermediate step. A computer cannot execute C# source code. In order to make this code machine readable we need to convert the C# into a _low level_ language known as the **Common Intermediate Language** (CIL). The CIL can be read by machines, specifically by the **Microsoft .NET Framework**.

In order to convert _high level_ C# source code into _low level_ CIL we need to compile it. This can be achieved by using the **CSharp Compiler** (CSC.exe). This tool is part of the .Net Framework. Before can use it, we need to create a file containing C# source code.

::: tip
Developers don't typically compile code like this. This is shown to help explain the concept of compiling. Don't be dismayed if you don't get this working, simply continue.
:::

Firstly create a new folder called `hello` under `C:\dev`. Then use a simple text editor (like notepad) to create a file in the `hello` folder called `program.cs`. If done correctly you should have `C:\dev\hello\program.cs`

::: warning
As previously explained, Notepad may add a `.txt` extension when saving files. To avoid this [use quotes](https://lifehacker.com/5883860/change-the-file-extension-of-any-file-through-windows-save-as-menu).
:::

::: tip
To verify that the file has the correct extension, open `C:\dev\hello` within Windows Explorer and double check the file extension. The file should end with `.cs` and not __.cs.txt__.
:::

::: tip
If the file extension is not visible [follow this How-To Geek article](https://www.howtogeek.com/205086/beginner-how-to-make-windows-show-file-extensions/).
:::

Again, using a simple text editor type the following into `C:\dev\hello\program.cs` and save the file.

```
public class Program
{
	public static void Main()
	{
		System.Console.WriteLine("Hello, World!");
	}
}
```

Once this file has been saved open the command line and navigate to `C:\dev\hello\`

```
cd C:\dev\hello\
```

Next we run the compiler:

```
C:\dev\hello>C:\Windows\Microsoft.NET\Framework\v4.0.30319\csc.exe /t:exe /out:App.exe program.cs
```

::: tip
Your version of of the .Net Framework might be different, in which case you need to substitute `v4.0.30319` with your version number.

The `csc.exe` might be contained within a bin directory e.g.

```
c:\windows\Microsoft.NET\Framework\v3.5\bin\csc.exe /t:exe /out:App.exe program.cs
```
:::

We can now see that the `hello` folder contains `App.exe`. This is the executable, which contains the CIL. We can run it in the console window with:

```
C:\dev\hello>App.exe
Hello, World!
```

The output is shown in the snippet above.










