# Scope Issues
This repo is a test to find out why my program is having scope issues.

# Background

My actual program is not included in this code. Only the bare problem I'm
originally having is in this repo since my other program has to be private. The
program is supposed to parse out C++ files which I will then put into a
Javascript object. However, I can't get that far yet because I'm having an issue
just parsing the C++ file. The problem seems to be a scope issue when I try and
use Substack's mode(a 3rd party module) inside my own. This is probably a common
problem, but one that is new to me as I get more advanced in Javascript.

I'm trying to encapsulate a 3rd party module's function into another module of 
my own, with the 3rd party's function updating my own module's array variable. I
seem to be having a scope issue where the 3rd party module's function arguments
are not in the scope they need to be in or my function's array variable is not
in the proper scope, or some else entirely that I'm not seeing. I need help
solving this issue. Thank you!

# Run
1. clone this repo
2. make sure youre in node dev environment for node tap to work
3. `npm i` to install the modules
4. `npm test` should run the test
