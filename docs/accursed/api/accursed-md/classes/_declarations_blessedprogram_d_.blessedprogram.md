[accursed](../README.md) > ["declarations/blessedProgram.d"](../modules/_declarations_blessedprogram_d_.md) > [BlessedProgram](../classes/_declarations_blessedprogram_d_.blessedprogram.md)

# Class: BlessedProgram

The Program instance manages the low level interaction the the terminal. It emit the basi native events to the screens. It has associated an [output](_declarations_blessedprogram_d_.blessedprogram.md#output) writable stream attribute which ussually is stdout but could could be conigured by the user using [IBlessedProgramOptions](../interfaces/_declarations_blessedprogram_d_.iblessedprogramoptions.md). The same for an [input](_declarations_blessedprogram_d_.blessedprogram.md#input) Readable stream from which the host terminal respond to the program requests.

The communication with the host system is mostly done writing `tput` sequences to the [output](_declarations_blessedprogram_d_.blessedprogram.md#output) stream. The program is responsible of portability and supporting the same API thgouth several terminal standards / vendors

Although the BlessedProgram instances are not Nodes (unlike Screens that are) they have a somwhat similar API, emiting events with similar names and has some simlar attributes, but it's important to known that most of these events and attributes refer to the host terminal window and not with the lines inside the screen. For example, focus or blur event refers to the terminal window focus, not the internal Blessed Element

In general users don't have to use the program for develop their applications, however, it can be accessed from the screen and its lower level api can be used along the application.

Example 1
---------

Starting a program alone, and register 'q' to exist

```
const program = blessed.program({
})
program.setMouse({
allMotion: true,
}, true);
program.alternateBuffer()
program.enableMouse()
program.key(['q', 'escape', 'C-c'], function () {
program.showCursor()
program.disableMouse()
program.normalBuffer()
process.exit(0)
})
```

Example 2:
----------

Registering for resize, blur, and focus terminal window native events:

```
program.setMouse({ sendFocus: true }, true)
program.on('resize', function (data) {
setTimeout(function () {
program.clear();
program.cup(0, 0);
}, 200);
});
process.on('SIGWINCH', function (data) {
setTimeout(function () {
program.cup(1, 0);
}, 200);
});
program.on('focus', function (data) {
program.clear();
program.cup(0, 0);
});
program.on('blur', function (data) {
program.clear();
program.cup(0, 0);
});
```

Example 3:
----------

Drawing on mouse move

```
program.setBackground('green', 'O')
program.setForeground('red', 'i')
program.on('mouse', function (data) {
program.cup(data.y, data.x);
program.write(' ', 'blue bg');
program.write('as', 'red fg');
program.cup(0, 0);
});
```

Example 4
---------

Setting the cursor style

```
program.showCursor();
program.setCursorStyle(1);
setTimeout(() => {
program.setCursorStyle(2);
}, 9000);
setTimeout(() => {
program.setCursorStyle(4);
}, 3000);
setTimeout(() => {
program.setCursorStyle(3);
}, 6000);
```

Example 5
---------

Minimize / Maximize the terminal window and requesting it size and position and cursor

```
program.write('MINIMIZING IN 2 seconds')
setTimeout(() => {
program.manipulateWindow(2, (err, data)=>{
program.log(data);
})
}, 2000)
setTimeout(() => {
program.manipulateWindow(1, (err, data)=>{
program.log(data);
})
}, 4000)
program.getCursor(function(err, data) {
program.write(util.inspect(data));
});
program.getWindowSize(function(err:any, data:any) {
program.log('getWindowSize', data);
});
```

## Hierarchy

 `EventEmitter`

**↳ BlessedProgram**

## Index

### Constructors

* [constructor](_declarations_blessedprogram_d_.blessedprogram.md#constructor)

### Properties

* [cols](_declarations_blessedprogram_d_.blessedprogram.md#cols)
* [gpm](_declarations_blessedprogram_d_.blessedprogram.md#gpm)
* [input](_declarations_blessedprogram_d_.blessedprogram.md#input)
* [isAlt](_declarations_blessedprogram_d_.blessedprogram.md#isalt)
* [isLXDE](_declarations_blessedprogram_d_.blessedprogram.md#islxde)
* [isOSXTerm](_declarations_blessedprogram_d_.blessedprogram.md#isosxterm)
* [isRxvt](_declarations_blessedprogram_d_.blessedprogram.md#isrxvt)
* [isTerminator](_declarations_blessedprogram_d_.blessedprogram.md#isterminator)
* [isVTE](_declarations_blessedprogram_d_.blessedprogram.md#isvte)
* [isXFCE](_declarations_blessedprogram_d_.blessedprogram.md#isxfce)
* [isXterm](_declarations_blessedprogram_d_.blessedprogram.md#isxterm)
* [isiTerm2](_declarations_blessedprogram_d_.blessedprogram.md#isiterm2)
* [mux](_declarations_blessedprogram_d_.blessedprogram.md#mux)
* [options](_declarations_blessedprogram_d_.blessedprogram.md#options)
* [output](_declarations_blessedprogram_d_.blessedprogram.md#output)
* [restoreReportedCursor](_declarations_blessedprogram_d_.blessedprogram.md#restorereportedcursor)
* [resume](_declarations_blessedprogram_d_.blessedprogram.md#resume)
* [rows](_declarations_blessedprogram_d_.blessedprogram.md#rows)
* [savedX](_declarations_blessedprogram_d_.blessedprogram.md#savedx)
* [savedY](_declarations_blessedprogram_d_.blessedprogram.md#savedy)
* [scrollBottom](_declarations_blessedprogram_d_.blessedprogram.md#scrollbottom)
* [scrollTop](_declarations_blessedprogram_d_.blessedprogram.md#scrolltop)
* [tmuxVersion](_declarations_blessedprogram_d_.blessedprogram.md#tmuxversion)
* [type](_declarations_blessedprogram_d_.blessedprogram.md#type)
* [useBuffer](_declarations_blessedprogram_d_.blessedprogram.md#usebuffer)
* [x](_declarations_blessedprogram_d_.blessedprogram.md#x)
* [y](_declarations_blessedprogram_d_.blessedprogram.md#y)
* [zero](_declarations_blessedprogram_d_.blessedprogram.md#zero)
* [defaultMaxListeners](_declarations_blessedprogram_d_.blessedprogram.md#defaultmaxlisteners)
* [instances](_declarations_blessedprogram_d_.blessedprogram.md#instances)

### Methods

* [HPositionRelative](_declarations_blessedprogram_d_.blessedprogram.md#hpositionrelative)
* [HVPosition](_declarations_blessedprogram_d_.blessedprogram.md#hvposition)
* [VPositionRelative](_declarations_blessedprogram_d_.blessedprogram.md#vpositionrelative)
* [_ncoords](_declarations_blessedprogram_d_.blessedprogram.md#_ncoords)
* [addListener](_declarations_blessedprogram_d_.blessedprogram.md#addlistener)
* [ae](_declarations_blessedprogram_d_.blessedprogram.md#ae)
* [alternate](_declarations_blessedprogram_d_.blessedprogram.md#alternate)
* [alternateBuffer](_declarations_blessedprogram_d_.blessedprogram.md#alternatebuffer)
* [as](_declarations_blessedprogram_d_.blessedprogram.md#as)
* [back](_declarations_blessedprogram_d_.blessedprogram.md#back)
* [backspace](_declarations_blessedprogram_d_.blessedprogram.md#backspace)
* [bel](_declarations_blessedprogram_d_.blessedprogram.md#bel)
* [bell](_declarations_blessedprogram_d_.blessedprogram.md#bell)
* [bg](_declarations_blessedprogram_d_.blessedprogram.md#bg)
* [bindMouse](_declarations_blessedprogram_d_.blessedprogram.md#bindmouse)
* [bindResponse](_declarations_blessedprogram_d_.blessedprogram.md#bindresponse)
* [cbt](_declarations_blessedprogram_d_.blessedprogram.md#cbt)
* [cha](_declarations_blessedprogram_d_.blessedprogram.md#cha)
* [charAttributes](_declarations_blessedprogram_d_.blessedprogram.md#charattributes)
* [charPosAbsolute](_declarations_blessedprogram_d_.blessedprogram.md#charposabsolute)
* [charset](_declarations_blessedprogram_d_.blessedprogram.md#charset)
* [cht](_declarations_blessedprogram_d_.blessedprogram.md#cht)
* [civis](_declarations_blessedprogram_d_.blessedprogram.md#civis)
* [clear](_declarations_blessedprogram_d_.blessedprogram.md#clear)
* [cnl](_declarations_blessedprogram_d_.blessedprogram.md#cnl)
* [copyRectangle](_declarations_blessedprogram_d_.blessedprogram.md#copyrectangle)
* [copyToClipboard](_declarations_blessedprogram_d_.blessedprogram.md#copytoclipboard)
* [cpl](_declarations_blessedprogram_d_.blessedprogram.md#cpl)
* [cr](_declarations_blessedprogram_d_.blessedprogram.md#cr)
* [csr](_declarations_blessedprogram_d_.blessedprogram.md#csr)
* [cub](_declarations_blessedprogram_d_.blessedprogram.md#cub)
* [cud](_declarations_blessedprogram_d_.blessedprogram.md#cud)
* [cuf](_declarations_blessedprogram_d_.blessedprogram.md#cuf)
* [cup](_declarations_blessedprogram_d_.blessedprogram.md#cup)
* [cursorBackward](_declarations_blessedprogram_d_.blessedprogram.md#cursorbackward)
* [cursorBackwardTab](_declarations_blessedprogram_d_.blessedprogram.md#cursorbackwardtab)
* [cursorCharAbsolute](_declarations_blessedprogram_d_.blessedprogram.md#cursorcharabsolute)
* [cursorColor](_declarations_blessedprogram_d_.blessedprogram.md#cursorcolor)
* [cursorDown](_declarations_blessedprogram_d_.blessedprogram.md#cursordown)
* [cursorForward](_declarations_blessedprogram_d_.blessedprogram.md#cursorforward)
* [cursorForwardTab](_declarations_blessedprogram_d_.blessedprogram.md#cursorforwardtab)
* [cursorNextLine](_declarations_blessedprogram_d_.blessedprogram.md#cursornextline)
* [cursorPos](_declarations_blessedprogram_d_.blessedprogram.md#cursorpos)
* [cursorPrecedingLine](_declarations_blessedprogram_d_.blessedprogram.md#cursorprecedingline)
* [cursorReset](_declarations_blessedprogram_d_.blessedprogram.md#cursorreset)
* [cursorShape](_declarations_blessedprogram_d_.blessedprogram.md#cursorshape)
* [cursorUp](_declarations_blessedprogram_d_.blessedprogram.md#cursorup)
* [cursor_invisible](_declarations_blessedprogram_d_.blessedprogram.md#cursor_invisible)
* [cuu](_declarations_blessedprogram_d_.blessedprogram.md#cuu)
* [da](_declarations_blessedprogram_d_.blessedprogram.md#da)
* [dch](_declarations_blessedprogram_d_.blessedprogram.md#dch)
* [debug](_declarations_blessedprogram_d_.blessedprogram.md#debug)
* [deccara](_declarations_blessedprogram_d_.blessedprogram.md#deccara)
* [deccra](_declarations_blessedprogram_d_.blessedprogram.md#deccra)
* [decdc](_declarations_blessedprogram_d_.blessedprogram.md#decdc)
* [decefr](_declarations_blessedprogram_d_.blessedprogram.md#decefr)
* [decelr](_declarations_blessedprogram_d_.blessedprogram.md#decelr)
* [decera](_declarations_blessedprogram_d_.blessedprogram.md#decera)
* [decfra](_declarations_blessedprogram_d_.blessedprogram.md#decfra)
* [decic](_declarations_blessedprogram_d_.blessedprogram.md#decic)
* [decll](_declarations_blessedprogram_d_.blessedprogram.md#decll)
* [decrara](_declarations_blessedprogram_d_.blessedprogram.md#decrara)
* [decreqtparm](_declarations_blessedprogram_d_.blessedprogram.md#decreqtparm)
* [decrqlp](_declarations_blessedprogram_d_.blessedprogram.md#decrqlp)
* [decrqm](_declarations_blessedprogram_d_.blessedprogram.md#decrqm)
* [decrqmp](_declarations_blessedprogram_d_.blessedprogram.md#decrqmp)
* [decrst](_declarations_blessedprogram_d_.blessedprogram.md#decrst)
* [decsace](_declarations_blessedprogram_d_.blessedprogram.md#decsace)
* [decsca](_declarations_blessedprogram_d_.blessedprogram.md#decsca)
* [decscl](_declarations_blessedprogram_d_.blessedprogram.md#decscl)
* [decscursr](_declarations_blessedprogram_d_.blessedprogram.md#decscursr)
* [decsera](_declarations_blessedprogram_d_.blessedprogram.md#decsera)
* [decset](_declarations_blessedprogram_d_.blessedprogram.md#decset)
* [decsle](_declarations_blessedprogram_d_.blessedprogram.md#decsle)
* [decstbm](_declarations_blessedprogram_d_.blessedprogram.md#decstbm)
* [decstr](_declarations_blessedprogram_d_.blessedprogram.md#decstr)
* [decswbv](_declarations_blessedprogram_d_.blessedprogram.md#decswbv)
* [dectcemh](_declarations_blessedprogram_d_.blessedprogram.md#dectcemh)
* [deleteChars](_declarations_blessedprogram_d_.blessedprogram.md#deletechars)
* [deleteColumns](_declarations_blessedprogram_d_.blessedprogram.md#deletecolumns)
* [deleteLines](_declarations_blessedprogram_d_.blessedprogram.md#deletelines)
* [destroy](_declarations_blessedprogram_d_.blessedprogram.md#destroy)
* [deviceStatus](_declarations_blessedprogram_d_.blessedprogram.md#devicestatus)
* [disableGpm](_declarations_blessedprogram_d_.blessedprogram.md#disablegpm)
* [disableModifieres](_declarations_blessedprogram_d_.blessedprogram.md#disablemodifieres)
* [disableMouse](_declarations_blessedprogram_d_.blessedprogram.md#disablemouse)
* [dl](_declarations_blessedprogram_d_.blessedprogram.md#dl)
* [down](_declarations_blessedprogram_d_.blessedprogram.md#down)
* [dsr](_declarations_blessedprogram_d_.blessedprogram.md#dsr)
* [dynamicColors](_declarations_blessedprogram_d_.blessedprogram.md#dynamiccolors)
* [ech](_declarations_blessedprogram_d_.blessedprogram.md#ech)
* [echo](_declarations_blessedprogram_d_.blessedprogram.md#echo)
* [ed](_declarations_blessedprogram_d_.blessedprogram.md#ed)
* [el](_declarations_blessedprogram_d_.blessedprogram.md#el)
* [emit](_declarations_blessedprogram_d_.blessedprogram.md#emit)
* [enableFilterRectangle](_declarations_blessedprogram_d_.blessedprogram.md#enablefilterrectangle)
* [enableGpm](_declarations_blessedprogram_d_.blessedprogram.md#enablegpm)
* [enableLocatorReporting](_declarations_blessedprogram_d_.blessedprogram.md#enablelocatorreporting)
* [enableMouse](_declarations_blessedprogram_d_.blessedprogram.md#enablemouse)
* [enter_alt_charset_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_alt_charset_mode)
* [eraseChars](_declarations_blessedprogram_d_.blessedprogram.md#erasechars)
* [eraseInDisplay](_declarations_blessedprogram_d_.blessedprogram.md#eraseindisplay)
* [eraseInLine](_declarations_blessedprogram_d_.blessedprogram.md#eraseinline)
* [eraseRectangle](_declarations_blessedprogram_d_.blessedprogram.md#eraserectangle)
* [eventNames](_declarations_blessedprogram_d_.blessedprogram.md#eventnames)
* [exit_alt_charset_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_alt_charset_mode)
* [feed](_declarations_blessedprogram_d_.blessedprogram.md#feed)
* [ff](_declarations_blessedprogram_d_.blessedprogram.md#ff)
* [fg](_declarations_blessedprogram_d_.blessedprogram.md#fg)
* [fillRectangle](_declarations_blessedprogram_d_.blessedprogram.md#fillrectangle)
* [flush](_declarations_blessedprogram_d_.blessedprogram.md#flush)
* [form](_declarations_blessedprogram_d_.blessedprogram.md#form)
* [forward](_declarations_blessedprogram_d_.blessedprogram.md#forward)
* [getCursor](_declarations_blessedprogram_d_.blessedprogram.md#getcursor)
* [getCursorColor](_declarations_blessedprogram_d_.blessedprogram.md#getcursorcolor)
* [getMaxListeners](_declarations_blessedprogram_d_.blessedprogram.md#getmaxlisteners)
* [getTextParams](_declarations_blessedprogram_d_.blessedprogram.md#gettextparams)
* [getWindowSize](_declarations_blessedprogram_d_.blessedprogram.md#getwindowsize)
* [has](_declarations_blessedprogram_d_.blessedprogram.md#has)
* [hideCursor](_declarations_blessedprogram_d_.blessedprogram.md#hidecursor)
* [hpa](_declarations_blessedprogram_d_.blessedprogram.md#hpa)
* [ht](_declarations_blessedprogram_d_.blessedprogram.md#ht)
* [hvp](_declarations_blessedprogram_d_.blessedprogram.md#hvp)
* [ich](_declarations_blessedprogram_d_.blessedprogram.md#ich)
* [il](_declarations_blessedprogram_d_.blessedprogram.md#il)
* [ind](_declarations_blessedprogram_d_.blessedprogram.md#ind)
* [index](_declarations_blessedprogram_d_.blessedprogram.md#index)
* [initMouseTracking](_declarations_blessedprogram_d_.blessedprogram.md#initmousetracking)
* [insertChars](_declarations_blessedprogram_d_.blessedprogram.md#insertchars)
* [insertColumns](_declarations_blessedprogram_d_.blessedprogram.md#insertcolumns)
* [insertLines](_declarations_blessedprogram_d_.blessedprogram.md#insertlines)
* [kbs](_declarations_blessedprogram_d_.blessedprogram.md#kbs)
* [key](_declarations_blessedprogram_d_.blessedprogram.md#key)
* [left](_declarations_blessedprogram_d_.blessedprogram.md#left)
* [lineHeight](_declarations_blessedprogram_d_.blessedprogram.md#lineheight)
* [linePosAbsolute](_declarations_blessedprogram_d_.blessedprogram.md#lineposabsolute)
* [listen](_declarations_blessedprogram_d_.blessedprogram.md#listen)
* [listenerCount](_declarations_blessedprogram_d_.blessedprogram.md#listenercount)
* [listeners](_declarations_blessedprogram_d_.blessedprogram.md#listeners)
* [loadLEDs](_declarations_blessedprogram_d_.blessedprogram.md#loadleds)
* [log](_declarations_blessedprogram_d_.blessedprogram.md#log)
* [lrestoreCursor](_declarations_blessedprogram_d_.blessedprogram.md#lrestorecursor)
* [lsaveCursor](_declarations_blessedprogram_d_.blessedprogram.md#lsavecursor)
* [manipulateWindow](_declarations_blessedprogram_d_.blessedprogram.md#manipulatewindow)
* [mc](_declarations_blessedprogram_d_.blessedprogram.md#mc)
* [mc0](_declarations_blessedprogram_d_.blessedprogram.md#mc0)
* [mc4](_declarations_blessedprogram_d_.blessedprogram.md#mc4)
* [mc5](_declarations_blessedprogram_d_.blessedprogram.md#mc5)
* [mc5p](_declarations_blessedprogram_d_.blessedprogram.md#mc5p)
* [mediaCopy](_declarations_blessedprogram_d_.blessedprogram.md#mediacopy)
* [move](_declarations_blessedprogram_d_.blessedprogram.md#move)
* [newline](_declarations_blessedprogram_d_.blessedprogram.md#newline)
* [nextLine](_declarations_blessedprogram_d_.blessedprogram.md#nextline)
* [nl](_declarations_blessedprogram_d_.blessedprogram.md#nl)
* [normalBuffer](_declarations_blessedprogram_d_.blessedprogram.md#normalbuffer)
* [nul](_declarations_blessedprogram_d_.blessedprogram.md#nul)
* [off](_declarations_blessedprogram_d_.blessedprogram.md#off)
* [omove](_declarations_blessedprogram_d_.blessedprogram.md#omove)
* [on](_declarations_blessedprogram_d_.blessedprogram.md#on)
* [once](_declarations_blessedprogram_d_.blessedprogram.md#once)
* [onceKey](_declarations_blessedprogram_d_.blessedprogram.md#oncekey)
* [out](_declarations_blessedprogram_d_.blessedprogram.md#out)
* [p0](_declarations_blessedprogram_d_.blessedprogram.md#p0)
* [pause](_declarations_blessedprogram_d_.blessedprogram.md#pause)
* [pf](_declarations_blessedprogram_d_.blessedprogram.md#pf)
* [po](_declarations_blessedprogram_d_.blessedprogram.md#po)
* [pos](_declarations_blessedprogram_d_.blessedprogram.md#pos)
* [prependListener](_declarations_blessedprogram_d_.blessedprogram.md#prependlistener)
* [prependOnceListener](_declarations_blessedprogram_d_.blessedprogram.md#prependoncelistener)
* [print](_declarations_blessedprogram_d_.blessedprogram.md#print)
* [print_screen](_declarations_blessedprogram_d_.blessedprogram.md#print_screen)
* [prtr_non](_declarations_blessedprogram_d_.blessedprogram.md#prtr_non)
* [prtr_off](_declarations_blessedprogram_d_.blessedprogram.md#prtr_off)
* [prtr_on](_declarations_blessedprogram_d_.blessedprogram.md#prtr_on)
* [ps](_declarations_blessedprogram_d_.blessedprogram.md#ps)
* [rawListeners](_declarations_blessedprogram_d_.blessedprogram.md#rawlisteners)
* [rc](_declarations_blessedprogram_d_.blessedprogram.md#rc)
* [rcA](_declarations_blessedprogram_d_.blessedprogram.md#rca)
* [removeAllListeners](_declarations_blessedprogram_d_.blessedprogram.md#removealllisteners)
* [removeKey](_declarations_blessedprogram_d_.blessedprogram.md#removekey)
* [removeListener](_declarations_blessedprogram_d_.blessedprogram.md#removelistener)
* [rep](_declarations_blessedprogram_d_.blessedprogram.md#rep)
* [repeat](_declarations_blessedprogram_d_.blessedprogram.md#repeat)
* [repeatPrecedingCharacter](_declarations_blessedprogram_d_.blessedprogram.md#repeatprecedingcharacter)
* [req_mouse_pos](_declarations_blessedprogram_d_.blessedprogram.md#req_mouse_pos)
* [reqmp](_declarations_blessedprogram_d_.blessedprogram.md#reqmp)
* [requestAnsiMode](_declarations_blessedprogram_d_.blessedprogram.md#requestansimode)
* [requestLocatorPosition](_declarations_blessedprogram_d_.blessedprogram.md#requestlocatorposition)
* [requestParameters](_declarations_blessedprogram_d_.blessedprogram.md#requestparameters)
* [requestPrivateMode](_declarations_blessedprogram_d_.blessedprogram.md#requestprivatemode)
* [reset](_declarations_blessedprogram_d_.blessedprogram.md#reset)
* [resetColors](_declarations_blessedprogram_d_.blessedprogram.md#resetcolors)
* [resetCursor](_declarations_blessedprogram_d_.blessedprogram.md#resetcursor)
* [resetMode](_declarations_blessedprogram_d_.blessedprogram.md#resetmode)
* [resetTitleModes](_declarations_blessedprogram_d_.blessedprogram.md#resettitlemodes)
* [response](_declarations_blessedprogram_d_.blessedprogram.md#response)
* [restoreCursor](_declarations_blessedprogram_d_.blessedprogram.md#restorecursor)
* [restoreCursorA](_declarations_blessedprogram_d_.blessedprogram.md#restorecursora)
* [restorePrivateValues](_declarations_blessedprogram_d_.blessedprogram.md#restoreprivatevalues)
* [return](_declarations_blessedprogram_d_.blessedprogram.md#return)
* [reverse](_declarations_blessedprogram_d_.blessedprogram.md#reverse)
* [reverseAttrInRectangle](_declarations_blessedprogram_d_.blessedprogram.md#reverseattrinrectangle)
* [reverseIndex](_declarations_blessedprogram_d_.blessedprogram.md#reverseindex)
* [ri](_declarations_blessedprogram_d_.blessedprogram.md#ri)
* [right](_declarations_blessedprogram_d_.blessedprogram.md#right)
* [rm](_declarations_blessedprogram_d_.blessedprogram.md#rm)
* [rmacs](_declarations_blessedprogram_d_.blessedprogram.md#rmacs)
* [rmcup](_declarations_blessedprogram_d_.blessedprogram.md#rmcup)
* [rmove](_declarations_blessedprogram_d_.blessedprogram.md#rmove)
* [rs2](_declarations_blessedprogram_d_.blessedprogram.md#rs2)
* [rsetx](_declarations_blessedprogram_d_.blessedprogram.md#rsetx)
* [rsety](_declarations_blessedprogram_d_.blessedprogram.md#rsety)
* [saveCursor](_declarations_blessedprogram_d_.blessedprogram.md#savecursor)
* [saveCursorA](_declarations_blessedprogram_d_.blessedprogram.md#savecursora)
* [savePrivateValues](_declarations_blessedprogram_d_.blessedprogram.md#saveprivatevalues)
* [saveReportedCursor](_declarations_blessedprogram_d_.blessedprogram.md#savereportedcursor)
* [sc](_declarations_blessedprogram_d_.blessedprogram.md#sc)
* [scA](_declarations_blessedprogram_d_.blessedprogram.md#sca)
* [scrollDown](_declarations_blessedprogram_d_.blessedprogram.md#scrolldown)
* [scrollUp](_declarations_blessedprogram_d_.blessedprogram.md#scrollup)
* [sd](_declarations_blessedprogram_d_.blessedprogram.md#sd)
* [selData](_declarations_blessedprogram_d_.blessedprogram.md#seldata)
* [selectChangeExtent](_declarations_blessedprogram_d_.blessedprogram.md#selectchangeextent)
* [selectiveEraseRectangle](_declarations_blessedprogram_d_.blessedprogram.md#selectiveeraserectangle)
* [sendDeviceAttributes](_declarations_blessedprogram_d_.blessedprogram.md#senddeviceattributes)
* [setAttrInRectangle](_declarations_blessedprogram_d_.blessedprogram.md#setattrinrectangle)
* [setBackground](_declarations_blessedprogram_d_.blessedprogram.md#setbackground)
* [setCharProtectionAttr](_declarations_blessedprogram_d_.blessedprogram.md#setcharprotectionattr)
* [setConformanceLevel](_declarations_blessedprogram_d_.blessedprogram.md#setconformancelevel)
* [setCursorStyle](_declarations_blessedprogram_d_.blessedprogram.md#setcursorstyle)
* [setForeground](_declarations_blessedprogram_d_.blessedprogram.md#setforeground)
* [setG](_declarations_blessedprogram_d_.blessedprogram.md#setg)
* [setLocatorEvents](_declarations_blessedprogram_d_.blessedprogram.md#setlocatorevents)
* [setMarginBellVolume](_declarations_blessedprogram_d_.blessedprogram.md#setmarginbellvolume)
* [setMaxListeners](_declarations_blessedprogram_d_.blessedprogram.md#setmaxlisteners)
* [setMode](_declarations_blessedprogram_d_.blessedprogram.md#setmode)
* [setMouse](_declarations_blessedprogram_d_.blessedprogram.md#setmouse)
* [setPointerMode](_declarations_blessedprogram_d_.blessedprogram.md#setpointermode)
* [setResources](_declarations_blessedprogram_d_.blessedprogram.md#setresources)
* [setScrollRegion](_declarations_blessedprogram_d_.blessedprogram.md#setscrollregion)
* [setTerminal](_declarations_blessedprogram_d_.blessedprogram.md#setterminal)
* [setTitle](_declarations_blessedprogram_d_.blessedprogram.md#settitle)
* [setTitleModeFeature](_declarations_blessedprogram_d_.blessedprogram.md#settitlemodefeature)
* [setWarningBellVolume](_declarations_blessedprogram_d_.blessedprogram.md#setwarningbellvolume)
* [setupDump](_declarations_blessedprogram_d_.blessedprogram.md#setupdump)
* [setupTput](_declarations_blessedprogram_d_.blessedprogram.md#setuptput)
* [setx](_declarations_blessedprogram_d_.blessedprogram.md#setx)
* [sety](_declarations_blessedprogram_d_.blessedprogram.md#sety)
* [shiftIn](_declarations_blessedprogram_d_.blessedprogram.md#shiftin)
* [shiftOut](_declarations_blessedprogram_d_.blessedprogram.md#shiftout)
* [showCursor](_declarations_blessedprogram_d_.blessedprogram.md#showcursor)
* [sigtstp](_declarations_blessedprogram_d_.blessedprogram.md#sigtstp)
* [simpleInsert](_declarations_blessedprogram_d_.blessedprogram.md#simpleinsert)
* [sm](_declarations_blessedprogram_d_.blessedprogram.md#sm)
* [smacs](_declarations_blessedprogram_d_.blessedprogram.md#smacs)
* [smcup](_declarations_blessedprogram_d_.blessedprogram.md#smcup)
* [softReset](_declarations_blessedprogram_d_.blessedprogram.md#softreset)
* [su](_declarations_blessedprogram_d_.blessedprogram.md#su)
* [tab](_declarations_blessedprogram_d_.blessedprogram.md#tab)
* [tabClear](_declarations_blessedprogram_d_.blessedprogram.md#tabclear)
* [tabSet](_declarations_blessedprogram_d_.blessedprogram.md#tabset)
* [tbc](_declarations_blessedprogram_d_.blessedprogram.md#tbc)
* [term](_declarations_blessedprogram_d_.blessedprogram.md#term)
* [unKey](_declarations_blessedprogram_d_.blessedprogram.md#unkey)
* [up](_declarations_blessedprogram_d_.blessedprogram.md#up)
* [vi](_declarations_blessedprogram_d_.blessedprogram.md#vi)
* [vpa](_declarations_blessedprogram_d_.blessedprogram.md#vpa)
* [vpr](_declarations_blessedprogram_d_.blessedprogram.md#vpr)
* [vtab](_declarations_blessedprogram_d_.blessedprogram.md#vtab)
* [write](_declarations_blessedprogram_d_.blessedprogram.md#write)
* [listenerCount](_declarations_blessedprogram_d_.blessedprogram.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BlessedProgram**(options?: *[IBlessedProgramOptions](../interfaces/_declarations_blessedprogram_d_.iblessedprogramoptions.md)*): [BlessedProgram](_declarations_blessedprogram_d_.blessedprogram.md)

*Defined in [declarations/blessedProgram.d.ts:264](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L264)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [IBlessedProgramOptions](../interfaces/_declarations_blessedprogram_d_.iblessedprogramoptions.md) |

**Returns:** [BlessedProgram](_declarations_blessedprogram_d_.blessedprogram.md)

___

## Properties

<a id="cols"></a>

###  cols

**● cols**: *`number`*

*Defined in [declarations/blessedProgram.d.ts:250](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L250)*

___
<a id="gpm"></a>

### `<Optional>` gpm

**● gpm**: *[GpmClient](../interfaces/_declarations_blessedprogram_d_.gpmclient.md)*

*Defined in [declarations/blessedProgram.d.ts:236](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L236)*

*__internal__*: 

___
<a id="input"></a>

###  input

**● input**: *`Readable`*

*Defined in [declarations/blessedProgram.d.ts:239](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L239)*

___
<a id="isalt"></a>

###  isAlt

**● isAlt**: *`boolean`*

*Defined in [declarations/blessedProgram.d.ts:264](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L264)*

___
<a id="islxde"></a>

###  isLXDE

**● isLXDE**: *`boolean`*

*Defined in [declarations/blessedProgram.d.ts:258](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L258)*

___
<a id="isosxterm"></a>

###  isOSXTerm

**● isOSXTerm**: *`boolean`*

*Defined in [declarations/blessedProgram.d.ts:254](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L254)*

___
<a id="isrxvt"></a>

###  isRxvt

**● isRxvt**: *`boolean`*

*Defined in [declarations/blessedProgram.d.ts:260](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L260)*

___
<a id="isterminator"></a>

###  isTerminator

**● isTerminator**: *`boolean`*

*Defined in [declarations/blessedProgram.d.ts:257](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L257)*

___
<a id="isvte"></a>

###  isVTE

**● isVTE**: *`boolean`*

*Defined in [declarations/blessedProgram.d.ts:259](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L259)*

___
<a id="isxfce"></a>

###  isXFCE

**● isXFCE**: *`boolean`*

*Defined in [declarations/blessedProgram.d.ts:256](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L256)*

___
<a id="isxterm"></a>

###  isXterm

**● isXterm**: *`boolean`*

*Defined in [declarations/blessedProgram.d.ts:261](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L261)*

___
<a id="isiterm2"></a>

###  isiTerm2

**● isiTerm2**: *`boolean`*

*Defined in [declarations/blessedProgram.d.ts:255](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L255)*

___
<a id="mux"></a>

###  mux

**● mux**: *`boolean`*

*Defined in [declarations/blessedProgram.d.ts:262](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L262)*

___
<a id="options"></a>

###  options

**● options**: *[IBlessedProgramOptions](../interfaces/_declarations_blessedprogram_d_.iblessedprogramoptions.md)*

*Defined in [declarations/blessedProgram.d.ts:238](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L238)*

___
<a id="output"></a>

###  output

**● output**: *`Writable`*

*Defined in [declarations/blessedProgram.d.ts:240](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L240)*

___
<a id="restorereportedcursor"></a>

###  restoreReportedCursor

**● restoreReportedCursor**: *`function`*

*Defined in [declarations/blessedProgram.d.ts:565](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L565)*

#### Type declaration
▸(): `boolean`

**Returns:** `boolean`

___
<a id="resume"></a>

###  resume

**● resume**: *`function`*

*Defined in [declarations/blessedProgram.d.ts:1273](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1273)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="rows"></a>

###  rows

**● rows**: *`number`*

*Defined in [declarations/blessedProgram.d.ts:251](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L251)*

___
<a id="savedx"></a>

###  savedX

**● savedX**: *`number`*

*Defined in [declarations/blessedProgram.d.ts:248](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L248)*

___
<a id="savedy"></a>

###  savedY

**● savedY**: *`number`*

*Defined in [declarations/blessedProgram.d.ts:249](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L249)*

___
<a id="scrollbottom"></a>

###  scrollBottom

**● scrollBottom**: *`number`*

*Defined in [declarations/blessedProgram.d.ts:253](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L253)*

___
<a id="scrolltop"></a>

###  scrollTop

**● scrollTop**: *`number`*

*Defined in [declarations/blessedProgram.d.ts:252](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L252)*

___
<a id="tmuxversion"></a>

###  tmuxVersion

**● tmuxVersion**: *`number`*

*Defined in [declarations/blessedProgram.d.ts:263](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L263)*

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Defined in [declarations/blessedProgram.d.ts:237](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L237)*

___
<a id="usebuffer"></a>

###  useBuffer

**● useBuffer**: *`boolean`*

*Defined in [declarations/blessedProgram.d.ts:245](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L245)*

___
<a id="x"></a>

###  x

**● x**: *`number`*

*Defined in [declarations/blessedProgram.d.ts:246](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L246)*

___
<a id="y"></a>

###  y

**● y**: *`number`*

*Defined in [declarations/blessedProgram.d.ts:247](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L247)*

___
<a id="zero"></a>

###  zero

**● zero**: *`boolean`*

*Defined in [declarations/blessedProgram.d.ts:244](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L244)*

Is zero-based indexes for col, row values.

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:9*

___
<a id="instances"></a>

### `<Static>` instances

**● instances**: *[BlessedProgram](_declarations_blessedprogram_d_.blessedprogram.md)[]*

*Defined in [declarations/blessedProgram.d.ts:234](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L234)*

*__internal__*: 

___

## Methods

<a id="hpositionrelative"></a>

###  HPositionRelative

▸ **HPositionRelative**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:595](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L595)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="hvposition"></a>

###  HVPosition

▸ **HVPosition**(row?: *`number`*, col?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:602](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L602)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` row | `number` |
| `Optional` col | `number` |

**Returns:** `boolean`

___
<a id="vpositionrelative"></a>

###  VPositionRelative

▸ **VPositionRelative**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:600](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L600)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="_ncoords"></a>

###  _ncoords

▸ **_ncoords**(): `void`

*Defined in [declarations/blessedProgram.d.ts:348](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L348)*

*__internal__*: 

**Returns:** `void`

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:11*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="ae"></a>

###  ae

▸ **ae**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:376](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L376)*

**Returns:** `boolean`

___
<a id="alternate"></a>

###  alternate

▸ **alternate**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:710](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L710)*

**Returns:** `boolean`

___
<a id="alternatebuffer"></a>

###  alternateBuffer

▸ **alternateBuffer**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:708](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L708)*

**Returns:** `boolean`

___
<a id="as"></a>

###  as

▸ **as**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:373](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L373)*

**Returns:** `boolean`

___
<a id="back"></a>

###  back

▸ **back**(n?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:406](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L406)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="backspace"></a>

###  backspace

▸ **backspace**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:343](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L343)*

**Returns:** `boolean`

___
<a id="bel"></a>

###  bel

▸ **bel**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:339](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L339)*

**Returns:** `boolean`

___
<a id="bell"></a>

###  bell

▸ **bell**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:338](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L338)*

**Returns:** `boolean`

___
<a id="bg"></a>

###  bg

▸ **bg**(color: *`string`*, val?: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:526](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L526)*

*__see__*: [setBackground](_declarations_blessedprogram_d_.blessedprogram.md#setbackground)

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |
| `Optional` val | `string` |

**Returns:** `boolean`

___
<a id="bindmouse"></a>

###  bindMouse

▸ **bindMouse**(): `void`

*Defined in [declarations/blessedProgram.d.ts:286](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L286)*

**Returns:** `void`

___
<a id="bindresponse"></a>

###  bindResponse

▸ **bindResponse**(): `void`

*Defined in [declarations/blessedProgram.d.ts:289](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L289)*

**Returns:** `void`

___
<a id="cbt"></a>

###  cbt

▸ **cbt**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:902](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L902)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="cha"></a>

###  cha

▸ **cha**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:584](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L584)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="charattributes"></a>

###  charAttributes

▸ **charAttributes**(param: *`string`*, val?: *`string`*): `boolean`

▸ **charAttributes**(param: *`string`[]*, val?: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:493](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L493)*

`` ` `` CSI Pm m Character Attributes (SGR). Ps = 0 -> Normal (default). Ps = 1 -> Bold. Ps = 4 -> Underlined. Ps = 5 -> Blink (appears as Bold). Ps = 7 -> Inverse. Ps = 8 -> Invisible, i.e., hidden (VT300). Ps = 2 2 -> Normal (neither bold nor faint). Ps = 2 4 -> Not underlined. Ps = 2 5 -> Steady (not blinking). Ps = 2 7 -> Positive (not inverse). Ps = 2 8 -> Visible, i.e., not hidden (VT300). Ps = 3 0 -> Set foreground color to Black. Ps = 3 1 -> Set foreground color to Red. Ps = 3 2 -> Set foreground color to Green. Ps = 3 3 -> Set foreground color to Yellow. Ps = 3 4 -> Set foreground color to Blue. Ps = 3 5 -> Set foreground color to Magenta. Ps = 3 6 -> Set foreground color to Cyan. Ps = 3 7 -> Set foreground color to White. Ps = 3 9 -> Set foreground color to default (original). Ps = 4 0 -> Set background color to Black. Ps = 4 1 -> Set background color to Red. Ps = 4 2 -> Set background color to Green. Ps = 4 3 -> Set background color to Yellow. Ps = 4 4 -> Set background color to Blue. Ps = 4 5 -> Set background color to Magenta. Ps = 4 6 -> Set background color to Cyan. Ps = 4 7 -> Set background color to White. Ps = 4 9 -> Set background color to default (original).

If 16-color support is compiled, the following apply. Assume that xterm's resources are set so that the ISO color codes are the first 8 of a set of 16. Then the aixterm colors are the bright versions of the ISO colors: Ps = 9 0 -> Set foreground color to Black. Ps = 9 1 -> Set foreground color to Red. Ps = 9 2 -> Set foreground color to Green. Ps = 9 3 -> Set foreground color to Yellow. Ps = 9 4 -> Set foreground color to Blue. Ps = 9 5 -> Set foreground color to Magenta. Ps = 9 6 -> Set foreground color to Cyan. Ps = 9 7 -> Set foreground color to White. Ps = 1 0 0 -> Set background color to Black. Ps = 1 0 1 -> Set background color to Red. Ps = 1 0 2 -> Set background color to Green. Ps = 1 0 3 -> Set background color to Yellow. Ps = 1 0 4 -> Set background color to Blue. Ps = 1 0 5 -> Set background color to Magenta. Ps = 1 0 6 -> Set background color to Cyan. Ps = 1 0 7 -> Set background color to White.

If xterm is compiled with the 16-color support disabled, it supports the following, from rxvt: Ps = 1 0 0 -> Set foreground and background color to default.

If 88- or 256-color support is compiled, the following apply. Ps = 3 8 ; 5 ; Ps -> Set foreground color to the second Ps. Ps = 4 8 ; 5 ; Ps -> Set background color to the second Ps. `` ` ``

**Parameters:**

| Name | Type |
| ------ | ------ |
| param | `string` |
| `Optional` val | `string` |

**Returns:** `boolean`

*Defined in [declarations/blessedProgram.d.ts:494](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L494)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| param | `string`[] |
| `Optional` val | `string` |

**Returns:** `boolean`

___
<a id="charposabsolute"></a>

###  charPosAbsolute

▸ **charPosAbsolute**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:593](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L593)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="charset"></a>

###  charset

▸ **charset**(val?: *`string`*, level?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:371](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L371)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` val | `string` |
| `Optional` level | `number` |

**Returns:** `boolean`

___
<a id="cht"></a>

###  cht

▸ **cht**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:866](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L866)*

*__see__*: [cursorForwardTab](_declarations_blessedprogram_d_.blessedprogram.md#cursorforwardtab)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="civis"></a>

###  civis

▸ **civis**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:800](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L800)*

**Returns:** `boolean`

___
<a id="clear"></a>

###  clear

▸ **clear**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:424](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L424)*

**Returns:** `boolean`

___
<a id="cnl"></a>

###  cnl

▸ **cnl**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:580](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L580)*

*__cursornextline__*: 

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="copyrectangle"></a>

###  copyRectangle

▸ **copyRectangle**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1107](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1107)*

`` ` CSI Pt; Pl; Pb; Pr; Pp; Pt; Pl; Pp$ v Copy Rectangular Area (DECCRA, VT400 and up). Pt; Pl; Pb; Pr denotes the rectangle. Pp denotes the source page. Pt; Pl denotes the target location. Pp denotes the target page. NOTE: xterm doesn't enable this code by default.``\`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="copytoclipboard"></a>

###  copyToClipboard

▸ **copyToClipboard**(text: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:320](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L320)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `boolean`

___
<a id="cpl"></a>

###  cpl

▸ **cpl**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:582](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L582)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="cr"></a>

###  cr

▸ **cr**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:352](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L352)*

**Returns:** `boolean`

___
<a id="csr"></a>

###  csr

▸ **csr**(top: *`number`*, bottom: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:837](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L837)*

*__see__*: [setScrollRegion](_declarations_blessedprogram_d_.blessedprogram.md#setscrollregion)

**Parameters:**

| Name | Type |
| ------ | ------ |
| top | `number` |
| bottom | `number` |

**Returns:** `boolean`

___
<a id="cub"></a>

###  cub

▸ **cub**(n?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:404](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L404)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="cud"></a>

###  cud

▸ **cud**(n?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:396](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L396)*

*__see__*: [cursorDown](_declarations_blessedprogram_d_.blessedprogram.md#cursordown)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="cuf"></a>

###  cuf

▸ **cuf**(n?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:400](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L400)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="cup"></a>

###  cup

▸ **cup**(row?: *`number`*, col?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:416](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L416)*

CSI Ps ; Ps H Cursor Position \[ row;column \] (default = \[ 1,1 \]) (CUP).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` row | `number` |
| `Optional` col | `number` |

**Returns:** `boolean`

___
<a id="cursorbackward"></a>

###  cursorBackward

▸ **cursorBackward**(n?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:403](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L403)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="cursorbackwardtab"></a>

###  cursorBackwardTab

▸ **cursorBackwardTab**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:901](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L901)*

CSI Ps Z Cursor Backward Tabulation Ps tab stops (default = 1) (CBT).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="cursorcharabsolute"></a>

###  cursorCharAbsolute

▸ **cursorCharAbsolute**(x: *`number`*): `number`

▸ **cursorCharAbsolute**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:317](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L317)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |

**Returns:** `number`

*Defined in [declarations/blessedProgram.d.ts:583](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L583)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="cursorcolor"></a>

###  cursorColor

▸ **cursorColor**(color: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:322](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L322)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |

**Returns:** `boolean`

___
<a id="cursordown"></a>

###  cursorDown

▸ **cursorDown**(n?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:394](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L394)*

Cursor Down `n` times, by default 1.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="cursorforward"></a>

###  cursorForward

▸ **cursorForward**(n?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:399](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L399)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="cursorforwardtab"></a>

###  cursorForwardTab

▸ **cursorForwardTab**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:864](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L864)*

Cursor Forward Tabulation Ps tab stops (default = 1) (CHT).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="cursornextline"></a>

###  cursorNextLine

▸ **cursorNextLine**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:578](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L578)*

```
CSI Ps E
Cursor Next Line Ps Times (default = 1) (CNL).
same as CSI Ps B ?
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="cursorpos"></a>

###  cursorPos

▸ **cursorPos**(row?: *`number`*, col?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:411](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L411)*

CSI Ps ; Ps H Cursor Position \[ row;column \] (default = \[ 1,1 \]) (CUP).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` row | `number` |
| `Optional` col | `number` |

**Returns:** `boolean`

___
<a id="cursorprecedingline"></a>

###  cursorPrecedingLine

▸ **cursorPrecedingLine**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:581](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L581)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="cursorreset"></a>

###  cursorReset

▸ **cursorReset**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:323](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L323)*

**Returns:** `boolean`

___
<a id="cursorshape"></a>

###  cursorShape

▸ **cursorShape**(shape: *"block" \| "underline" \| "line"*, blink?: *`boolean`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:321](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L321)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| shape | "block" \| "underline" \| "line" |
| `Optional` blink | `boolean` |

**Returns:** `boolean`

___
<a id="cursorup"></a>

###  cursorUp

▸ **cursorUp**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:388](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L388)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="cursor_invisible"></a>

###  cursor_invisible

▸ **cursor_invisible**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:802](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L802)*

**Returns:** `boolean`

___
<a id="cuu"></a>

###  cuu

▸ **cuu**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:389](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L389)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="da"></a>

###  da

▸ **da**(param?: *`number`*, callback?: *`Function`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:597](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L597)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |
| `Optional` callback | `Function` |

**Returns:** `boolean`

___
<a id="dch"></a>

###  dch

▸ **dch**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:590](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L590)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="debug"></a>

###  debug

▸ **debug**(s: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:270](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L270)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `boolean`

___
<a id="deccara"></a>

###  deccara

▸ **deccara**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1011](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1011)*

*__see__*: [setAttrInRectangle](_declarations_blessedprogram_d_.blessedprogram.md#setattrinrectangle)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="deccra"></a>

###  deccra

▸ **deccra**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1109](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1109)*

*__see__*: [copyRectangle](_declarations_blessedprogram_d_.blessedprogram.md#copyrectangle)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decdc"></a>

###  decdc

▸ **decdc**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1269](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1269)*

*__see__*: [deleteColumns](_declarations_blessedprogram_d_.blessedprogram.md#deletecolumns)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decefr"></a>

###  decefr

▸ **decefr**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1127](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1127)*

*__see__*: [enableFilterRectangle](_declarations_blessedprogram_d_.blessedprogram.md#enablefilterrectangle)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decelr"></a>

###  decelr

▸ **decelr**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1189](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1189)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decera"></a>

###  decera

▸ **decera**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1191](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1191)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decfra"></a>

###  decfra

▸ **decfra**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1169](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1169)*

*__see__*: [fillRectangle](_declarations_blessedprogram_d_.blessedprogram.md#fillrectangle)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decic"></a>

###  decic

▸ **decic**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1257](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1257)*

*__see__*: [insertColumns](_declarations_blessedprogram_d_.blessedprogram.md#insertcolumns)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decll"></a>

###  decll

▸ **decll**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:948](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L948)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="decrara"></a>

###  decrara

▸ **decrara**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1080](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1080)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decreqtparm"></a>

###  decreqtparm

▸ **decreqtparm**(param: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1145](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1145)*

*__see__*: [requestParameters](_declarations_blessedprogram_d_.blessedprogram.md#requestparameters)

**Parameters:**

| Name | Type |
| ------ | ------ |
| param | `number` |

**Returns:** `boolean`

___
<a id="decrqlp"></a>

###  decrqlp

▸ **decrqlp**(param?: *`string`*, callback?: *[ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1247](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1247)*

*__see__*: [requestLocatorPosition](_declarations_blessedprogram_d_.blessedprogram.md#requestlocatorposition)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |
| `Optional` callback | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="decrqm"></a>

###  decrqm

▸ **decrqm**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:942](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L942)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="decrqmp"></a>

###  decrqmp

▸ **decrqmp**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:944](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L944)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="decrst"></a>

###  decrst

▸ **decrst**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:798](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L798)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decsace"></a>

###  decsace

▸ **decsace**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1157](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1157)*

*__see__*: [selectChangeExtent](_declarations_blessedprogram_d_.blessedprogram.md#selectchangeextent)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="decsca"></a>

###  decsca

▸ **decsca**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:991](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L991)*

*__see__*: [setCharProtectionAttr](_declarations_blessedprogram_d_.blessedprogram.md#setcharprotectionattr)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="decscl"></a>

###  decscl

▸ **decscl**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:946](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L946)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decscursr"></a>

###  decscursr

▸ **decscursr**(cursor: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:978](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L978)*

see [setCursorStyle](_declarations_blessedprogram_d_.blessedprogram.md#setcursorstyle)

**Parameters:**

| Name | Type |
| ------ | ------ |
| cursor | `number` |

**Returns:** `boolean`

___
<a id="decsera"></a>

###  decsera

▸ **decsera**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1195](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1195)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decset"></a>

###  decset

▸ **decset**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:702](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L702)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decsle"></a>

###  decsle

▸ **decsle**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1193](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1193)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decstbm"></a>

###  decstbm

▸ **decstbm**(top: *`number`*, bottom: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:839](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L839)*

*__see__*: [setScrollRegion](_declarations_blessedprogram_d_.blessedprogram.md#setscrollregion)

**Parameters:**

| Name | Type |
| ------ | ------ |
| top | `number` |
| bottom | `number` |

**Returns:** `boolean`

___
<a id="decstr"></a>

###  decstr

▸ **decstr**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:940](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L940)*

**Returns:** `boolean`

___
<a id="decswbv"></a>

###  decswbv

▸ **decswbv**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1094](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1094)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="dectcemh"></a>

###  dectcemh

▸ **dectcemh**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:803](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L803)*

**Returns:** `boolean`

___
<a id="deletechars"></a>

###  deleteChars

▸ **deleteChars**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:589](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L589)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="deletecolumns"></a>

###  deleteColumns

▸ **deleteColumns**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1265](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1265)*

```
CSI P m SP ~
Delete P s Column(s) (default = 1) (DECDC), VT420 and up
NOTE: xterm doesn't enable this code by default.
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="deletelines"></a>

###  deleteLines

▸ **deleteLines**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:587](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L587)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(): `void`

*Defined in [declarations/blessedProgram.d.ts:281](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L281)*

**Returns:** `void`

___
<a id="devicestatus"></a>

###  deviceStatus

▸ **deviceStatus**(param?: *`string`*, callback?: *[ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)*, dec?: *`boolean`*, noBypass?: *`boolean`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:552](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L552)*

```
CSI Ps n  Device Status Report (DSR).
Ps = 5  -> Status Report.  Result (``OK'') is
CSI 0 n
Ps = 6  -> Report Cursor Position (CPR) [row;column].
Result is
CSI r ; c R
CSI ? Ps n
Device Status Report (DSR, DEC-specific).
Ps = 6  -> Report Cursor Position (CPR) [row;column] as CSI
? r ; c R (assumes page is zero).
Ps = 1 5  -> Report Printer status as CSI ? 1 0  n  (ready).
or CSI ? 1 1  n  (not ready).
Ps = 2 5  -> Report UDK status as CSI ? 2 0  n  (unlocked)
or CSI ? 2 1  n  (locked).
Ps = 2 6  -> Report Keyboard status as
CSI ? 2 7  ;  1  ;  0  ;  0  n  (North American).
The last two parameters apply to VT400 & up, and denote key-
board ready and LK01 respectively.
Ps = 5 3  -> Report Locator status as
CSI ? 5 3  n  Locator available, if compiled-in, or
CSI ? 5 0  n  No Locator, if not.
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |
| `Optional` callback | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |
| `Optional` dec | `boolean` |
| `Optional` noBypass | `boolean` |

**Returns:** `boolean`

___
<a id="disablegpm"></a>

###  disableGpm

▸ **disableGpm**(): `void`

*Defined in [declarations/blessedProgram.d.ts:288](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L288)*

**Returns:** `void`

___
<a id="disablemodifieres"></a>

###  disableModifieres

▸ **disableModifieres**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:922](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L922)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="disablemouse"></a>

###  disableMouse

▸ **disableMouse**(): `void`

*Defined in [declarations/blessedProgram.d.ts:807](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L807)*

**Returns:** `void`

___
<a id="dl"></a>

###  dl

▸ **dl**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:588](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L588)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="down"></a>

###  down

▸ **down**(n?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:398](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L398)*

*__see__*: [cursorDown](_declarations_blessedprogram_d_.blessedprogram.md#cursordown)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="dsr"></a>

###  dsr

▸ **dsr**(param?: *`string`*, callback?: *`Function`*, dec?: *`boolean`*, noBypass?: *`boolean`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:554](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L554)*

*__see__*: [deviceStatus](_declarations_blessedprogram_d_.blessedprogram.md#devicestatus)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |
| `Optional` callback | `Function` |
| `Optional` dec | `boolean` |
| `Optional` noBypass | `boolean` |

**Returns:** `boolean`

___
<a id="dynamiccolors"></a>

###  dynamicColors

▸ **dynamicColors**(param?: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:386](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L386)*

OSC Ps ; Pt ST OSC Ps ; Pt BEL Change dynamic colors

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |

**Returns:** `boolean`

___
<a id="ech"></a>

###  ech

▸ **ech**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:592](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L592)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="echo"></a>

###  echo

▸ **echo**(text: *`string`*, attr?: *`boolean`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:306](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L306)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| `Optional` attr | `boolean` |

**Returns:** `boolean`

___
<a id="ed"></a>

###  ed

▸ **ed**(param?: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:423](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L423)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |

**Returns:** `boolean`

___
<a id="el"></a>

###  el

▸ **el**(param?: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:426](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L426)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |

**Returns:** `boolean`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:23*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="enablefilterrectangle"></a>

###  enableFilterRectangle

▸ **enableFilterRectangle**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1125](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1125)*

``` CSI Pt ; Pl ; Pb ; Pr ' w Enable Filter Rectangle (DECEFR), VT420 and up. Parameters are [top;left;bottom;right]. Defines the coordinates of a filter rectangle and activates it. Anytime the locator is detected outside of the filter rectangle, an outside rectangle event is generated and the rectangle is disabled. Filter rectangles are always treated as "one-shot" events. Any parameters that are omitted default to the current locator position. If all parameters are omit- ted, any locator motion will be reported. DECELR always can- cels any prevous rectangle definition.``\`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="enablegpm"></a>

###  enableGpm

▸ **enableGpm**(): `void`

*Defined in [declarations/blessedProgram.d.ts:287](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L287)*

**Returns:** `void`

___
<a id="enablelocatorreporting"></a>

###  enableLocatorReporting

▸ **enableLocatorReporting**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1188](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1188)*

`` ` ``

CSI Ps ; Pu ' z Enable Locator Reporting (DECELR). Valid values for the first parameter: Ps = 0 -> Locator disabled (default). Ps = 1 -> Locator enabled. Ps = 2 -> Locator enabled for one report, then disabled. The second parameter specifies the coordinate unit for locator reports. Valid values for the second parameter: Pu = 0 <- or omitted -> default to character cells. Pu = 1 <- device physical pixels. Pu = 2 <- character cells. `` ` ``

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="enablemouse"></a>

###  enableMouse

▸ **enableMouse**(): `void`

*Defined in [declarations/blessedProgram.d.ts:806](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L806)*

**Returns:** `void`

___
<a id="enter_alt_charset_mode"></a>

###  enter_alt_charset_mode

▸ **enter_alt_charset_mode**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:372](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L372)*

**Returns:** `boolean`

___
<a id="erasechars"></a>

###  eraseChars

▸ **eraseChars**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:591](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L591)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="eraseindisplay"></a>

###  eraseInDisplay

▸ **eraseInDisplay**(param?: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:422](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L422)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |

**Returns:** `boolean`

___
<a id="eraseinline"></a>

###  eraseInLine

▸ **eraseInLine**(param?: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:425](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L425)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |

**Returns:** `boolean`

___
<a id="eraserectangle"></a>

###  eraseRectangle

▸ **eraseRectangle**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1190](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1190)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="eventnames"></a>

###  eventNames

▸ **eventNames**(): `Array`<`string` \| `symbol`>

*Inherited from EventEmitter.eventNames*

*Overrides EventEmitter.eventNames*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:24*

**Returns:** `Array`<`string` \| `symbol`>

___
<a id="exit_alt_charset_mode"></a>

###  exit_alt_charset_mode

▸ **exit_alt_charset_mode**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:375](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L375)*

**Returns:** `boolean`

___
<a id="feed"></a>

###  feed

▸ **feed**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:353](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L353)*

**Returns:** `boolean`

___
<a id="ff"></a>

###  ff

▸ **ff**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:342](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L342)*

**Returns:** `boolean`

___
<a id="fg"></a>

###  fg

▸ **fg**(color: *`string`*, val?: *`boolean`*): `string`

*Defined in [declarations/blessedProgram.d.ts:510](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L510)*

*__see__*: [setForeground](_declarations_blessedprogram_d_.blessedprogram.md#setforeground)

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |
| `Optional` val | `boolean` |

**Returns:** `string`

___
<a id="fillrectangle"></a>

###  fillRectangle

▸ **fillRectangle**(Pc: *`string`*, Pt: *`number`*, pl: *`number`*, pb: *`number`*, pr: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1167](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1167)*

```
CSI Pc; Pt; Pl; Pb; Pr$ x
Fill Rectangular Area (DECFRA), VT420 and up.
Pc is the character to use.
Pt; Pl; Pb; Pr denotes the rectangle.
NOTE: xterm doesn't enable this code by default.
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| Pc | `string` |
| Pt | `number` |
| pl | `number` |
| pb | `number` |
| pr | `number` |

**Returns:** `boolean`

___
<a id="flush"></a>

###  flush

▸ **flush**(): `void`

*Defined in [declarations/blessedProgram.d.ts:301](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L301)*

```
Flushes the buffer.
```

**Returns:** `void`

___
<a id="form"></a>

###  form

▸ **form**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:341](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L341)*

**Returns:** `boolean`

___
<a id="forward"></a>

###  forward

▸ **forward**(n?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:402](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L402)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="getcursor"></a>

###  getCursor

▸ **getCursor**(callback: *[ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:563](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L563)*

Example Call:

```
program.getCursor(function(err, data) {
program.log('getCursor', data);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="getcursorcolor"></a>

###  getCursorColor

▸ **getCursorColor**(callback: *`Function`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:336](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L336)*

Set's the cursor color. Example call:

```
program.getCursor(function(err, data) {
program.log('getCursor', data);
program.write(util.inspect(data));
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | `Function` |

**Returns:** `boolean`

___
<a id="getmaxlisteners"></a>

###  getMaxListeners

▸ **getMaxListeners**(): `number`

*Inherited from EventEmitter.getMaxListeners*

*Overrides EventEmitter.getMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:20*

**Returns:** `number`

___
<a id="gettextparams"></a>

###  getTextParams

▸ **getTextParams**(param: *`string`*, callback: *`Function`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:325](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L325)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| param | `string` |
| callback | `Function` |

**Returns:** `boolean`

___
<a id="getwindowsize"></a>

###  getWindowSize

▸ **getWindowSize**(callback?: *[ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1078](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1078)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` callback | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="has"></a>

###  has

▸ **has**(name: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:277](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L277)*

Queries whether the terminal has the capability `name`.

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |

**Returns:** `boolean`

___
<a id="hidecursor"></a>

###  hideCursor

▸ **hideCursor**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:799](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L799)*

**Returns:** `boolean`

___
<a id="hpa"></a>

###  hpa

▸ **hpa**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:594](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L594)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="ht"></a>

###  ht

▸ **ht**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:346](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L346)*

**Returns:** `boolean`

___
<a id="hvp"></a>

###  hvp

▸ **hvp**(row?: *`number`*, col?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:603](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L603)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` row | `number` |
| `Optional` col | `number` |

**Returns:** `boolean`

___
<a id="ich"></a>

###  ich

▸ **ich**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:570](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L570)*

*__see__*: [insertChars](_declarations_blessedprogram_d_.blessedprogram.md#insertchars)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="il"></a>

###  il

▸ **il**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:586](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L586)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="ind"></a>

###  ind

▸ **ind**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:357](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L357)*

**Returns:** `boolean`

___
<a id="index"></a>

###  index

▸ **index**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:356](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L356)*

**Returns:** `boolean`

___
<a id="initmousetracking"></a>

###  initMouseTracking

▸ **initMouseTracking**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:883](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L883)*

```
CSI Ps ; Ps ; Ps ; Ps ; Ps T
Initiate highlight mouse tracking.  Parameters are
[func;startx;starty;firstrow;lastrow].  See the section Mouse
Tracking.
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="insertchars"></a>

###  insertChars

▸ **insertChars**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:568](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L568)*

CSI Ps @ Insert Ps (Blank) Character(s) (default = 1) (ICH).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="insertcolumns"></a>

###  insertColumns

▸ **insertColumns**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1255](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1255)*

```
CSI P m SP }
Insert P s Column(s) (default = 1) (DECIC), VT420 and up.
NOTE: xterm doesn't enable this code by default.
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="insertlines"></a>

###  insertLines

▸ **insertLines**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:585](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L585)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="kbs"></a>

###  kbs

▸ **kbs**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:344](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L344)*

**Returns:** `boolean`

___
<a id="key"></a>

###  key

▸ **key**(key: *`string` \| `string`[]*, l: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `void`

*Defined in [declarations/blessedProgram.d.ts:282](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L282)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `string`[] |
| l | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="left"></a>

###  left

▸ **left**(n?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:405](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L405)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="lineheight"></a>

###  lineHeight

▸ **lineHeight**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:370](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L370)*

**Returns:** `boolean`

___
<a id="lineposabsolute"></a>

###  linePosAbsolute

▸ **linePosAbsolute**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:598](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L598)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="listen"></a>

###  listen

▸ **listen**(): `void`

*Defined in [declarations/blessedProgram.d.ts:280](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L280)*

**Returns:** `void`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:25*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type | `string` \| `symbol` |

**Returns:** `number`

___
<a id="listeners"></a>

###  listeners

▸ **listeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.listeners*

*Overrides EventEmitter.listeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="loadleds"></a>

###  loadLEDs

▸ **loadLEDs**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:947](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L947)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="log"></a>

###  log

▸ **log**(...args: *`any`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:269](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L269)*

Writes arguments to [log](_declarations_blessedprogram_d_.blessedprogram.md#log) file passed in options.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="lrestorecursor"></a>

###  lrestoreCursor

▸ **lrestoreCursor**(key?: *`string`*, hide?: *`boolean`*): `void`

*Defined in [declarations/blessedProgram.d.ts:369](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L369)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` key | `string` |
| `Optional` hide | `boolean` |

**Returns:** `void`

___
<a id="lsavecursor"></a>

###  lsaveCursor

▸ **lsaveCursor**(key?: *`string`*): `void`

*Defined in [declarations/blessedProgram.d.ts:368](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L368)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` key | `string` |

**Returns:** `void`

___
<a id="manipulatewindow"></a>

###  manipulateWindow

▸ **manipulateWindow**(data1: *`number`*, data2: *`number` \| `undefined`*, c: *[ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)*): `boolean`

▸ **manipulateWindow**(data1: *`number`*, c: *[ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1076](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1076)*

`` ` CSI Ps ; Ps ; Ps t Window manipulation (from dtterm, as well as extensions). These controls may be disabled using the allowWindowOps resource. Valid values for the first (and any additional parameters) are:````Ps = 1 -> De-iconify window. Ps = 2 -> Iconify window. Ps = 3 ; x ; y -> Move window to [x, y]. Ps = 4 ; height ; width -> Resize the xterm window to height and width in pixels. Ps = 5 -> Raise the xterm window to the front of the stack- ing order. Ps = 6 -> Lower the xterm window to the bottom of the stacking order. Ps = 7 -> Refresh the xterm window. Ps = 8 ; height ; width -> Resize the text area to [height;width] in characters. Ps = 9 ; 0 -> Restore maximized window. Ps = 9 ; 1 -> Maximize window (i.e., resize to screen size). Ps = 1 0 ; 0 -> Undo full-screen mode. Ps = 1 0 ; 1 -> Change to full-screen. Ps = 1 1 -> Report xterm window state. If the xterm window is open (non-iconified), it returns CSI 1 t . If the xterm window is iconified, it returns CSI 2 t . Ps = 1 3 -> Report xterm window position. Result is CSI 3 ; x ; y t Ps = 1 4 -> Report xterm window in pixels. Result is CSI 4 ; height ; width t Ps = 1 8 -> Report the size of the text area in characters. Result is CSI 8 ; height ; width t Ps = 1 9 -> Report the size of the screen in characters. Result is CSI 9 ; height ; width t Ps = 2 0 -> Report xterm window's icon label. Result is OSC L label ST Ps = 2 1 -> Report xterm window's title. Result is OSC l label ST Ps = 2 2 ; 0 -> Save xterm icon and window title on stack. Ps = 2 2 ; 1 -> Save xterm icon title on stack. Ps = 2 2 ; 2 -> Save xterm window title on stack. Ps = 2 3 ; 0 -> Restore xterm icon and window title from stack. Ps = 2 3 ; 1 -> Restore xterm icon title from stack. Ps = 2 3 ; 2 -> Restore xterm window title from stack. Ps >= 2 4 -> Resize to Ps lines (DECSLPP). Ps >= 2 4 -> Resize to Ps lines (DECSLPP). ` ```` ` ````Example call: ` ``\` program.manipulateWindow(18, function(err:any, data:any) { program.log('manipulateWindow', data); });

`` ` ``

**Parameters:**

| Name | Type |
| ------ | ------ |
| data1 | `number` |
| data2 | `number` \| `undefined` |
| c | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** `boolean`

*Defined in [declarations/blessedProgram.d.ts:1077](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1077)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data1 | `number` |
| c | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="mc"></a>

###  mc

▸ **mc**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:908](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L908)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="mc0"></a>

###  mc0

▸ **mc0**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:909](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L909)*

**Returns:** `boolean`

___
<a id="mc4"></a>

###  mc4

▸ **mc4**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:915](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L915)*

**Returns:** `boolean`

___
<a id="mc5"></a>

###  mc5

▸ **mc5**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:912](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L912)*

**Returns:** `boolean`

___
<a id="mc5p"></a>

###  mc5p

▸ **mc5p**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:918](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L918)*

**Returns:** `boolean`

___
<a id="mediacopy"></a>

###  mediaCopy

▸ **mediaCopy**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:907](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L907)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="move"></a>

###  move

▸ **move**(x: *`number`*, y: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:312](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L312)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `boolean`

___
<a id="newline"></a>

###  newline

▸ **newline**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:354](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L354)*

**Returns:** `boolean`

___
<a id="nextline"></a>

###  nextLine

▸ **nextLine**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:361](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L361)*

**Returns:** `boolean`

___
<a id="nl"></a>

###  nl

▸ **nl**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:355](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L355)*

**Returns:** `boolean`

___
<a id="normalbuffer"></a>

###  normalBuffer

▸ **normalBuffer**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:804](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L804)*

**Returns:** `boolean`

___
<a id="nul"></a>

###  nul

▸ **nul**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:337](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L337)*

**Returns:** `boolean`

___
<a id="off"></a>

###  off

▸ **off**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Overrides EventEmitter.off*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="omove"></a>

###  omove

▸ **omove**(x: *`number`*, y: *`number`*): `void`

*Defined in [declarations/blessedProgram.d.ts:313](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L313)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `void`

___
<a id="on"></a>

###  on

▸ **on**(e: *"mouse"*, c: *`function`*): `this`

▸ **on**(e: *"resize"*, c: *`function`*): `this`

▸ **on**(e: *"focus"*, c: *`function`*): `this`

▸ **on**(e: *"blur"*, c: *`function`*): `this`

▸ **on**(e: *"keypress"*, c: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `this`

▸ **on**(event: *"warning"*, callback: *`function`*): `this`

▸ **on**(e: *`string`*, c: *`function`*): `this`

*Overrides EventEmitter.on*

*Defined in [declarations/blessedProgram.d.ts:1277](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1277)*

Triggered when native events in the host terminal window .

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "mouse" |
| c | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [declarations/blessedProgram.d.ts:1282](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1282)*

Triggered when the terminal window is resized.

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "resize" |
| c | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [declarations/blessedProgram.d.ts:1288](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1288)*

Triggered when the terminal window gains focus n the host window manager. For exmmple when the user switchst form another application to the terminal with ctrl-tab. Notice that these are native events, ocurring outside the terminal application.

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "focus" |
| c | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [declarations/blessedProgram.d.ts:1294](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1294)*

Triggered when the terminal window loose focus host window manager. For exmmple when the user switchs from the shell to another form another application . Notice that these are native events, ocurring outside the terminal application.

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "blur" |
| c | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [declarations/blessedProgram.d.ts:1295](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1295)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "keypress" |
| c | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [declarations/blessedProgram.d.ts:1299](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1299)*

Received when blessed notices something untoward (output is not a tty, terminfo not found, etc).

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "warning" |
| callback | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [declarations/blessedProgram.d.ts:1300](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1300)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | `string` |
| c | `function` |

**Returns:** `this`

___
<a id="once"></a>

###  once

▸ **once**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.once*

*Overrides EventEmitter.once*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:13*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="oncekey"></a>

###  onceKey

▸ **onceKey**(key: *`string` \| `string`[]*, l: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `void`

*Defined in [declarations/blessedProgram.d.ts:283](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L283)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `string`[] |
| l | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="out"></a>

###  out

▸ **out**(param: *`string`*, ...args: *`any`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1270](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1270)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| param | `string` |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="p0"></a>

###  p0

▸ **p0**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:920](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L920)*

**Returns:** `boolean`

___
<a id="pause"></a>

###  pause

▸ **pause**(callback?: *[ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)*): `Function`

*Defined in [declarations/blessedProgram.d.ts:1272](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1272)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` callback | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** `Function`

___
<a id="pf"></a>

###  pf

▸ **pf**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:917](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L917)*

**Returns:** `boolean`

___
<a id="po"></a>

###  po

▸ **po**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:914](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L914)*

**Returns:** `boolean`

___
<a id="pos"></a>

###  pos

▸ **pos**(row?: *`number`*, col?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:421](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L421)*

CSI Ps ; Ps H Cursor Position \[ row;column \] (default = \[ 1,1 \]) (CUP).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` row | `number` |
| `Optional` col | `number` |

**Returns:** `boolean`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:14*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="prependoncelistener"></a>

###  prependOnceListener

▸ **prependOnceListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependOnceListener*

*Overrides EventEmitter.prependOnceListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="print"></a>

###  print

▸ **print**(text: *`string`*, attr?: *`boolean`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:305](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L305)*

Determines whether to include text attributes when writing.

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| `Optional` attr | `boolean` |

**Returns:** `boolean`

___
<a id="print_screen"></a>

###  print_screen

▸ **print_screen**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:910](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L910)*

**Returns:** `boolean`

___
<a id="prtr_non"></a>

###  prtr_non

▸ **prtr_non**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:919](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L919)*

**Returns:** `boolean`

___
<a id="prtr_off"></a>

###  prtr_off

▸ **prtr_off**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:916](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L916)*

**Returns:** `boolean`

___
<a id="prtr_on"></a>

###  prtr_on

▸ **prtr_on**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:913](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L913)*

**Returns:** `boolean`

___
<a id="ps"></a>

###  ps

▸ **ps**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:911](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L911)*

**Returns:** `boolean`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Overrides EventEmitter.rawListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:22*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="rc"></a>

###  rc

▸ **rc**(key?: *`string`*, hide?: *`boolean`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:367](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L367)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` key | `string` |
| `Optional` hide | `boolean` |

**Returns:** `boolean`

___
<a id="rca"></a>

###  rcA

▸ **rcA**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:860](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L860)*

*__see__*: [restoreCursorA](_declarations_blessedprogram_d_.blessedprogram.md#restorecursora)

**Returns:** `boolean`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:18*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

___
<a id="removekey"></a>

###  removeKey

▸ **removeKey**(key: *`string` \| `string`[]*, l: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `void`

*Defined in [declarations/blessedProgram.d.ts:285](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L285)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `string`[] |
| l | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="removelistener"></a>

###  removeListener

▸ **removeListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.removeListener*

*Overrides EventEmitter.removeListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:16*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="rep"></a>

###  rep

▸ **rep**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:904](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L904)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="repeat"></a>

###  repeat

▸ **repeat**(ch: *`string`*, i?: *`number`*): `string`

*Defined in [declarations/blessedProgram.d.ts:319](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L319)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ch | `string` |
| `Optional` i | `number` |

**Returns:** `string`

___
<a id="repeatprecedingcharacter"></a>

###  repeatPrecedingCharacter

▸ **repeatPrecedingCharacter**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:903](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L903)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="req_mouse_pos"></a>

###  req_mouse_pos

▸ **req_mouse_pos**(param?: *`string`*, callback?: *[ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1245](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1245)*

*__see__*: [requestLocatorPosition](_declarations_blessedprogram_d_.blessedprogram.md#requestlocatorposition)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |
| `Optional` callback | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="reqmp"></a>

###  reqmp

▸ **reqmp**(param?: *`string`*, callback?: *[ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1243](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1243)*

*__see__*: [requestLocatorPosition](_declarations_blessedprogram_d_.blessedprogram.md#requestlocatorposition)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |
| `Optional` callback | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="requestansimode"></a>

###  requestAnsiMode

▸ **requestAnsiMode**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:941](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L941)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="requestlocatorposition"></a>

###  requestLocatorPosition

▸ **requestLocatorPosition**(param?: *`string`*, callback?: *[ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1241](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1241)*

`` ` `` CSI Ps ' \| Request Locator Position (DECRQLP). Valid values for the parameter are: Ps = 0 , 1 or omitted -> transmit a single DECLRP locator report.

If Locator Reporting has been enabled by a DECELR, xterm will respond with a DECLRP Locator Report. This report is also generated on button up and down events if they have been enabled with a DECSLE, or when the locator is detected outside of a filter rectangle, if filter rectangles have been enabled with a DECEFR.

\-> CSI Pe ; Pb ; Pr ; Pc ; Pp & w

Parameters are \[event;button;row;column;page\]. Valid values for the event: Pe = 0 -> locator unavailable - no other parameters sent. Pe = 1 -> request - xterm received a DECRQLP. Pe = 2 -> left button down. Pe = 3 -> left button up. Pe = 4 -> middle button down. Pe = 5 -> middle button up. Pe = 6 -> right button down. Pe = 7 -> right button up. Pe = 8 -> M4 button down. Pe = 9 -> M4 button up. Pe = 1 0 -> locator outside filter rectangle. `button'' parameter is a bitmask indicating which buttons are pressed: Pb = 0 <- no buttons down. Pb & 1 <- right button down. Pb & 2 <- middle button down. Pb & 4 <- left button down. Pb & 8 <- M4 button down.`row'' and`column'' parameters are the coordinates of the locator position in the xterm window, encoded as ASCII deci- mal. The`page'' parameter is not used by xterm, and will be omit- ted. `` ` ``

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |
| `Optional` callback | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="requestparameters"></a>

###  requestParameters

▸ **requestParameters**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1143](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1143)*

```
CSI Ps x  Request Terminal Parameters (DECREQTPARM).
if Ps is a "0" (default) or "1", and xterm is emulating VT100,
the control sequence elicits a response of the same form whose
parameters describe the terminal:
Ps -> the given Ps incremented by 2.
Pn = 1  <- no parity.
Pn = 1  <- eight bits.
Pn = 1  <- 2  8  transmit 38.4k baud.
Pn = 1  <- 2  8  receive 38.4k baud.
Pn = 1  <- clock multiplier.
Pn = 0  <- STP flags.
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="requestprivatemode"></a>

###  requestPrivateMode

▸ **requestPrivateMode**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:943](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L943)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="reset"></a>

###  reset

▸ **reset**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:362](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L362)*

**Returns:** `boolean`

___
<a id="resetcolors"></a>

###  resetColors

▸ **resetColors**(param?: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:380](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L380)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |

**Returns:** `boolean`

___
<a id="resetcursor"></a>

###  resetCursor

▸ **resetCursor**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:324](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L324)*

**Returns:** `boolean`

___
<a id="resetmode"></a>

###  resetMode

▸ **resetMode**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:795](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L795)*

```
CSI Pm l  Reset Mode (RM).
Ps = 2  -> Keyboard Action Mode (AM).
Ps = 4  -> Replace Mode (IRM).
Ps = 1 2  -> Send/receive (SRM).
Ps = 2 0  -> Normal Linefeed (LNM).
CSI ? Pm l
DEC Private Mode Reset (DECRST).
Ps = 1  -> Normal Cursor Keys (DECCKM).
Ps = 2  -> Designate VT52 mode (DECANM).
Ps = 3  -> 80 Column Mode (DECCOLM).
Ps = 4  -> Jump (Fast) Scroll (DECSCLM).
Ps = 5  -> Normal Video (DECSCNM).
Ps = 6  -> Normal Cursor Mode (DECOM).
Ps = 7  -> No Wraparound Mode (DECAWM).
Ps = 8  -> No Auto-repeat Keys (DECARM).
Ps = 9  -> Don't send Mouse X & Y on button press.
Ps = 1 0  -> Hide toolbar (rxvt).
Ps = 1 2  -> Stop Blinking Cursor (att610).
Ps = 1 8  -> Don't print form feed (DECPFF).
Ps = 1 9  -> Limit print to scrolling region (DECPEX).
Ps = 2 5  -> Hide Cursor (DECTCEM).
Ps = 3 0  -> Don't show scrollbar (rxvt).
Ps = 3 5  -> Disable font-shifting functions (rxvt).
Ps = 4 0  -> Disallow 80 -> 132 Mode.
Ps = 4 1  -> No more(1) fix (see curses resource).
Ps = 4 2  -> Disable Nation Replacement Character sets (DEC-
NRCM).
Ps = 4 4  -> Turn Off Margin Bell.
Ps = 4 5  -> No Reverse-wraparound Mode.
Ps = 4 6  -> Stop Logging.  (This is normally disabled by a
compile-time option).
Ps = 4 7  -> Use Normal Screen Buffer.
Ps = 6 6  -> Numeric keypad (DECNKM).
Ps = 6 7  -> Backarrow key sends delete (DECBKM).
Ps = 1 0 0 0  -> Don't send Mouse X & Y on button press and
release.  See the section Mouse Tracking.
Ps = 1 0 0 1  -> Don't use Hilite Mouse Tracking.
Ps = 1 0 0 2  -> Don't use Cell Motion Mouse Tracking.
Ps = 1 0 0 3  -> Don't use All Motion Mouse Tracking.
Ps = 1 0 0 4  -> Don't send FocusIn/FocusOut events.
Ps = 1 0 0 5  -> Disable Extended Mouse Mode.
Ps = 1 0 1 0  -> Don't scroll to bottom on tty output
(rxvt).
Ps = 1 0 1 1  -> Don't scroll to bottom on key press (rxvt).
Ps = 1 0 3 4  -> Don't interpret "meta" key.  (This disables
the eightBitInput resource).
Ps = 1 0 3 5  -> Disable special modifiers for Alt and Num-
Lock keys.  (This disables the numLock resource).
Ps = 1 0 3 6  -> Don't send ESC  when Meta modifies a key.
(This disables the metaSendsEscape resource).
Ps = 1 0 3 7  -> Send VT220 Remove from the editing-keypad
Delete key.
Ps = 1 0 3 9  -> Don't send ESC  when Alt modifies a key.
(This disables the altSendsEscape resource).
Ps = 1 0 4 0  -> Do not keep selection when not highlighted.
(This disables the keepSelection resource).
Ps = 1 0 4 1  -> Use the PRIMARY selection.  (This disables
the selectToClipboard resource).
Ps = 1 0 4 2  -> Disable Urgency window manager hint when
Control-G is received.  (This disables the bellIsUrgent
resource).
Ps = 1 0 4 3  -> Disable raising of the window when Control-
G is received.  (This disables the popOnBell resource).
Ps = 1 0 4 7  -> Use Normal Screen Buffer, clearing screen
first if in the Alternate Screen.  (This may be disabled by
the titeInhibit resource).
Ps = 1 0 4 8  -> Restore cursor as in DECRC.  (This may be
disabled by the titeInhibit resource).
Ps = 1 0 4 9  -> Use Normal Screen Buffer and restore cursor
as in DECRC.  (This may be disabled by the titeInhibit
resource).  This combines the effects of the 1 0 4 7  and 1 0
4 8  modes.  Use this with terminfo-based applications rather
than the 4 7  mode.
Ps = 1 0 5 0  -> Reset terminfo/termcap function-key mode.
Ps = 1 0 5 1  -> Reset Sun function-key mode.
Ps = 1 0 5 2  -> Reset HP function-key mode.
Ps = 1 0 5 3  -> Reset SCO function-key mode.
Ps = 1 0 6 0  -> Reset legacy keyboard emulation (X11R6).
Ps = 1 0 6 1  -> Reset keyboard emulation to Sun/PC style.
Ps = 2 0 0 4  -> Reset bracketed paste mode.
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="resettitlemodes"></a>

###  resetTitleModes

▸ **resetTitleModes**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:899](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L899)*

```
CSI > Ps; Ps T
Reset one or more features of the title modes to the default
value.  Normally, "reset" disables the feature.  It is possi-
ble to disable the ability to reset features by compiling a
different default for the title modes into xterm.
Ps = 0  -> Do not set window/icon labels using hexadecimal.
Ps = 1  -> Do not query window/icon labels using hexadeci-
mal.
Ps = 2  -> Do not set window/icon labels using UTF-8.
Ps = 3  -> Do not query window/icon labels using UTF-8.
(See discussion of "Title Modes").
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="response"></a>

###  response

▸ **response**(name: *`string`*, text: *`string`*, callback: *`Function`*, noBypass?: *`boolean`*): `boolean`

▸ **response**(name: *`string`*, callback?: *`Function`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:290](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L290)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| text | `string` |
| callback | `Function` |
| `Optional` noBypass | `boolean` |

**Returns:** `boolean`

*Defined in [declarations/blessedProgram.d.ts:291](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L291)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| `Optional` callback | `Function` |

**Returns:** `boolean`

___
<a id="restorecursor"></a>

###  restoreCursor

▸ **restoreCursor**(key?: *`string`*, hide?: *`boolean`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:366](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L366)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` key | `string` |
| `Optional` hide | `boolean` |

**Returns:** `boolean`

___
<a id="restorecursora"></a>

###  restoreCursorA

▸ **restoreCursorA**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:856](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L856)*

```
CSI u
Restore cursor (ANSI.SYS).
```

**Returns:** `boolean`

___
<a id="restoreprivatevalues"></a>

###  restorePrivateValues

▸ **restorePrivateValues**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:999](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L999)*

```
CSI ? Pm r
Restore DEC Private Mode Values.  The value of Ps previously
saved is restored.  Ps values are the same as for DECSET.
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="return"></a>

###  return

▸ **return**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:351](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L351)*

**Returns:** `boolean`

___
<a id="reverse"></a>

###  reverse

▸ **reverse**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:359](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L359)*

**Returns:** `boolean`

___
<a id="reverseattrinrectangle"></a>

###  reverseAttrInRectangle

▸ **reverseAttrInRectangle**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1079](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1079)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="reverseindex"></a>

###  reverseIndex

▸ **reverseIndex**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:358](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L358)*

**Returns:** `boolean`

___
<a id="ri"></a>

###  ri

▸ **ri**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:360](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L360)*

**Returns:** `boolean`

___
<a id="right"></a>

###  right

▸ **right**(n?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:401](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L401)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="rm"></a>

###  rm

▸ **rm**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:797](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L797)*

*__see__*: [resetMode](_declarations_blessedprogram_d_.blessedprogram.md#resetmode)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="rmacs"></a>

###  rmacs

▸ **rmacs**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:377](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L377)*

**Returns:** `boolean`

___
<a id="rmcup"></a>

###  rmcup

▸ **rmcup**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:805](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L805)*

**Returns:** `boolean`

___
<a id="rmove"></a>

###  rmove

▸ **rmove**(x: *`number`*, y: *`number`*): `void`

*Defined in [declarations/blessedProgram.d.ts:316](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L316)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |
| y | `number` |

**Returns:** `void`

___
<a id="rs2"></a>

###  rs2

▸ **rs2**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:939](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L939)*

**Returns:** `boolean`

___
<a id="rsetx"></a>

###  rsetx

▸ **rsetx**(x: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:314](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L314)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |

**Returns:** `boolean`

___
<a id="rsety"></a>

###  rsety

▸ **rsety**(y: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:315](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L315)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| y | `number` |

**Returns:** `boolean`

___
<a id="savecursor"></a>

###  saveCursor

▸ **saveCursor**(key: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:364](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L364)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `boolean`

___
<a id="savecursora"></a>

###  saveCursorA

▸ **saveCursorA**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:846](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L846)*

```
CSI s
Save cursor (ANSI.SYS).
```

**Returns:** `boolean`

___
<a id="saveprivatevalues"></a>

###  savePrivateValues

▸ **savePrivateValues**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1013](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1013)*

Save DEC Private Mode Values. Ps values are the same as for

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="savereportedcursor"></a>

###  saveReportedCursor

▸ **saveReportedCursor**(callback: *[ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)*): `void`

*Defined in [declarations/blessedProgram.d.ts:564](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L564)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** `void`

___
<a id="sc"></a>

###  sc

▸ **sc**(key: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:365](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L365)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `boolean`

___
<a id="sca"></a>

###  scA

▸ **scA**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:848](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L848)*

*__see__*: [saveCursorA](_declarations_blessedprogram_d_.blessedprogram.md#savecursora)

**Returns:** `boolean`

___
<a id="scrolldown"></a>

###  scrollDown

▸ **scrollDown**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:872](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L872)*

CSI Ps T Scroll down Ps lines (default = 1) (SD).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="scrollup"></a>

###  scrollUp

▸ **scrollUp**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:868](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L868)*

CSI Ps S Scroll up Ps lines (default = 1) (SU).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="sd"></a>

###  sd

▸ **sd**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:874](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L874)*

*__see__*: [scrollDown](_declarations_blessedprogram_d_.blessedprogram.md#scrolldown)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="seldata"></a>

###  selData

▸ **selData**(a: *`string`*, b: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:387](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L387)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `string` |
| b | `string` |

**Returns:** `boolean`

___
<a id="selectchangeextent"></a>

###  selectChangeExtent

▸ **selectChangeExtent**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1155](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1155)*

`` ` ``

CSI Ps x Select Attribute Change Extent (DECSACE). Ps = 0 -> from start to end position, wrapped. Ps = 1 -> from start to end position, wrapped. Ps = 2 -> rectangle (exact). `` ` ``

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="selectiveeraserectangle"></a>

###  selectiveEraseRectangle

▸ **selectiveEraseRectangle**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1194](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1194)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="senddeviceattributes"></a>

###  sendDeviceAttributes

▸ **sendDeviceAttributes**(param?: *`number`*, callback?: *[ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:596](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L596)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |
| `Optional` callback | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="setattrinrectangle"></a>

###  setAttrInRectangle

▸ **setAttrInRectangle**(Pt: *`number`*, Pl: *`number`*, Pb: *`number`*, Pr: *`number`*, Ps$: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1009](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1009)*

```
CSI Pt; Pl; Pb; Pr; Ps$ r
Change Attributes in Rectangular Area (DECCARA), VT400 and up.
Pt; Pl; Pb; Pr denotes the rectangle.
Ps denotes the SGR attributes to change: 0, 1, 4, 5, 7.
NOTE: xterm doesn't enable this code by default.
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| Pt | `number` |
| Pl | `number` |
| Pb | `number` |
| Pr | `number` |
| Ps$ | `number` |

**Returns:** `boolean`

___
<a id="setbackground"></a>

###  setBackground

▸ **setBackground**(color: *`string`*, val?: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:524](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L524)*

set the background color and character for the following writings to the output buffer. Example:

```
program.setBackground('green', 'O')
program.setForeground('red', 'i')
program.on('mouse', function (data) {
program.cup(data.y, data.x);
program.write(' ', 'blue bg');
program.write('as', 'red fg');
program.cup(0, 0);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |
| `Optional` val | `string` |

**Returns:** `boolean`

___
<a id="setcharprotectionattr"></a>

###  setCharProtectionAttr

▸ **setCharProtectionAttr**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:989](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L989)*

```
CSI Ps " q
Select character protection attribute (DECSCA).  Valid values
for the parameter:
Ps = 0  -> DECSED and DECSEL can erase (default).
Ps = 1  -> DECSED and DECSEL cannot erase.
Ps = 2  -> DECSED and DECSEL can erase.
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="setconformancelevel"></a>

###  setConformanceLevel

▸ **setConformanceLevel**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:945](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L945)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="setcursorstyle"></a>

###  setCursorStyle

▸ **setCursorStyle**(cursor: *`0` \| `1` \| `2` \| `3` \| `4` \| "blinkingblock" \| "block" \| "steady block" \| "blinking underline" \| "underline" \| "steady underline" \| "blinking bar" \| "bar" \| "steady bar"*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:960](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L960)*

``` CSI Ps SP q Set cursor style (DECSCUSR, VT520). Ps = 0 -> blinking block. Ps = 1 -> blinking block (default). Ps = 2 -> steady block. Ps = 3 -> blinking underline. Ps = 4 -> steady underline. ` ``

**Parameters:**

| Name | Type |
| ------ | ------ |
| cursor | `0` \| `1` \| `2` \| `3` \| `4` \| "blinkingblock" \| "block" \| "steady block" \| "blinking underline" \| "underline" \| "steady underline" \| "blinking bar" \| "bar" \| "steady bar" |

**Returns:** `boolean`

___
<a id="setforeground"></a>

###  setForeground

▸ **setForeground**(color: *`string`*, val?: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:508](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L508)*

set the foreground color and character for the following writings to the output buffer. Example:

```
program.setBackground('green', 'O')
program.setForeground('red', 'i')
program.on('mouse', function (data) {
program.cup(data.y, data.x);
program.write(' ', 'blue bg');
program.write('as', 'red fg');
program.cup(0, 0);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |
| `Optional` val | `string` |

**Returns:** `boolean`

___
<a id="setg"></a>

###  setG

▸ **setG**(val: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:378](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L378)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `number` |

**Returns:** `boolean`

___
<a id="setlocatorevents"></a>

###  setLocatorEvents

▸ **setLocatorEvents**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1192](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1192)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="setmarginbellvolume"></a>

###  setMarginBellVolume

▸ **setMarginBellVolume**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1095](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1095)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:19*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="setmode"></a>

###  setMode

▸ **setMode**(args: *`string`*, callback: *[ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:699](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L699)*

`` ` CSI Pm h Set Mode (SM). Ps = 2 -> Keyboard Action Mode (AM). Ps = 4 -> Insert Mode (IRM). Ps = 1 2 -> Send/receive (SRM). Ps = 2 0 -> Automatic Newline (LNM). CSI ? Pm h DEC Private Mode Set (DECSET). Ps = 1 -> Application Cursor Keys (DECCKM). Ps = 2 -> Designate USASCII for character sets G0-G3 (DECANM), and set VT100 mode. Ps = 3 -> 132 Column Mode (DECCOLM). Ps = 4 -> Smooth (Slow) Scroll (DECSCLM). Ps = 5 -> Reverse Video (DECSCNM). Ps = 6 -> Origin Mode (DECOM). Ps = 7 -> Wraparound Mode (DECAWM). Ps = 8 -> Auto-repeat Keys (DECARM). Ps = 9 -> Send Mouse X & Y on button press. See the sec- tion Mouse Tracking. Ps = 1 0 -> Show toolbar (rxvt). Ps = 1 2 -> Start Blinking Cursor (att610). Ps = 1 8 -> Print form feed (DECPFF). Ps = 1 9 -> Set print extent to full screen (DECPEX). Ps = 2 5 -> Show Cursor (DECTCEM). Ps = 3 0 -> Show scrollbar (rxvt). Ps = 3 5 -> Enable font-shifting functions (rxvt). Ps = 3 8 -> Enter Tektronix Mode (DECTEK). Ps = 4 0 -> Allow 80 -> 132 Mode. Ps = 4 1 -> more(1) fix (see curses resource). Ps = 4 2 -> Enable Nation Replacement Character sets (DECN- RCM). Ps = 4 4 -> Turn On Margin Bell. Ps = 4 5 -> Reverse-wraparound Mode. Ps = 4 6 -> Start Logging. This is normally disabled by a compile-time option. Ps = 4 7 -> Use Alternate Screen Buffer. (This may be dis- abled by the titeInhibit resource). Ps = 6 6 -> Application keypad (DECNKM). Ps = 6 7 -> Backarrow key sends backspace (DECBKM). Ps = 1 0 0 0 -> Send Mouse X & Y on button press and release. See the section Mouse Tracking. Ps = 1 0 0 1 -> Use Hilite Mouse Tracking. Ps = 1 0 0 2 -> Use Cell Motion Mouse Tracking. Ps = 1 0 0 3 -> Use All Motion Mouse Tracking. Ps = 1 0 0 4 -> Send FocusIn/FocusOut events. Ps = 1 0 0 5 -> Enable Extended Mouse Mode. Ps = 1 0 1 0 -> Scroll to bottom on tty output (rxvt). Ps = 1 0 1 1 -> Scroll to bottom on key press (rxvt). Ps = 1 0 3 4 -> Interpret "meta" key, sets eighth bit. (enables the eightBitInput resource). Ps = 1 0 3 5 -> Enable special modifiers for Alt and Num- Lock keys. (This enables the numLock resource). Ps = 1 0 3 6 -> Send ESC when Meta modifies a key. (This enables the metaSendsEscape resource). Ps = 1 0 3 7 -> Send DEL from the editing-keypad Delete key. Ps = 1 0 3 9 -> Send ESC when Alt modifies a key. (This enables the altSendsEscape resource). Ps = 1 0 4 0 -> Keep selection even if not highlighted. (This enables the keepSelection resource). Ps = 1 0 4 1 -> Use the CLIPBOARD selection. (This enables the selectToClipboard resource). Ps = 1 0 4 2 -> Enable Urgency window manager hint when Control-G is received. (This enables the bellIsUrgent resource). Ps = 1 0 4 3 -> Enable raising of the window when Control-G is received. (enables the popOnBell resource). Ps = 1 0 4 7 -> Use Alternate Screen Buffer. (This may be disabled by the titeInhibit resource). Ps = 1 0 4 8 -> Save cursor as in DECSC. (This may be dis- abled by the titeInhibit resource). Ps = 1 0 4 9 -> Save cursor as in DECSC and use Alternate Screen Buffer, clearing it first. (This may be disabled by the titeInhibit resource). This combines the effects of the 1 0 4 7 and 1 0 4 8 modes. Use this with terminfo-based applications rather than the 4 7 mode. Ps = 1 0 5 0 -> Set terminfo/termcap function-key mode. Ps = 1 0 5 1 -> Set Sun function-key mode. Ps = 1 0 5 2 -> Set HP function-key mode. Ps = 1 0 5 3 -> Set SCO function-key mode. Ps = 1 0 6 0 -> Set legacy keyboard emulation (X11R6). Ps = 1 0 6 1 -> Set VT220 keyboard emulation. Ps = 2 0 0 4 -> Set bracketed paste mode. Modes: http://vt100.net/docs/vt220-rm/chapter4.html``\`

Example: Show cursor:

```
return this.setMode('?25', (error, data)=>{

});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| args | `string` |
| callback | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="setmouse"></a>

###  setMouse

▸ **setMouse**(opt?: *`object`*, enable?: *`boolean`*): `void`

*Defined in [declarations/blessedProgram.d.ts:808](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L808)*

**Parameters:**

**`Optional` opt: `object`**

| Name | Type |
| ------ | ------ |
| `Optional` allMotion | `boolean` |
| `Optional` decMouse | `boolean` |
| `Optional` gpmMouse | `boolean` |
| `Optional` hiliteTracking | `boolean` |
| `Optional` jsbtermMouse | `boolean` |
| `Optional` normalMouse | `boolean` |
| `Optional` ptermMouse | `boolean` |
| `Optional` sendFocus | `boolean` |
| `Optional` sgrMouse | `boolean` |
| `Optional` urxvtMouse | `boolean` |
| `Optional` utfMode | `boolean` |
| `Optional` vt200Mouse | `boolean` |
| `Optional` x10Mouse | `boolean` |

**`Optional` enable: `boolean`**

**Returns:** `void`

___
<a id="setpointermode"></a>

###  setPointerMode

▸ **setPointerMode**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:937](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L937)*

`` ` `` CSI > Ps p Set resource value pointerMode. This is used by xterm to decide whether to hide the pointer cursor as the user types. Valid values for the parameter: Ps = 0 -> never hide the pointer. Ps = 1 -> hide if the mouse tracking mode is not enabled. Ps = 2 -> always hide the pointer. If no parameter is given, xterm uses the default, which is 1 .

`` ` ``

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="setresources"></a>

###  setResources

▸ **setResources**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:921](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L921)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="setscrollregion"></a>

###  setScrollRegion

▸ **setScrollRegion**(top: *`number`*, bottom: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:835](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L835)*

```
CSI Ps ; Ps r
Set Scrolling Region [top;bottom] (default = full size of win-
dow) (DECSTBM).
CSI ? Pm r
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| top | `number` |
| bottom | `number` |

**Returns:** `boolean`

___
<a id="setterminal"></a>

###  setTerminal

▸ **setTerminal**(terminal: *`string`*): `void`

*Defined in [declarations/blessedProgram.d.ts:273](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L273)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| terminal | `string` |

**Returns:** `void`

___
<a id="settitle"></a>

###  setTitle

▸ **setTitle**(title: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:379](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L379)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| title | `string` |

**Returns:** `boolean`

___
<a id="settitlemodefeature"></a>

###  setTitleModeFeature

▸ **setTitleModeFeature**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1092](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1092)*

`CSI > Ps; Ps t Set one or more features of the title modes. Each parameter enables a single feature. Ps = 0 -> Set window/icon labels using hexadecimal. Ps = 1 -> Query window/icon labels using hexadecimal. Ps = 2 -> Set window/icon labels using UTF-8. Ps = 3 -> Query window/icon labels using UTF-8. (See dis- cussion of "Title Modes") XXX VTE bizarelly echos this:`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="setwarningbellvolume"></a>

###  setWarningBellVolume

▸ **setWarningBellVolume**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1093](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1093)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="setupdump"></a>

###  setupDump

▸ **setupDump**(): `void`

*Defined in [declarations/blessedProgram.d.ts:271](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L271)*

**Returns:** `void`

___
<a id="setuptput"></a>

###  setupTput

▸ **setupTput**(): `void`

*Defined in [declarations/blessedProgram.d.ts:272](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L272)*

**Returns:** `void`

___
<a id="setx"></a>

###  setx

▸ **setx**(x: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:310](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L310)*

sets cursor

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |

**Returns:** `boolean`

___
<a id="sety"></a>

###  sety

▸ **sety**(y: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:311](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L311)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| y | `number` |

**Returns:** `boolean`

___
<a id="shiftin"></a>

###  shiftIn

▸ **shiftIn**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:350](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L350)*

**Returns:** `boolean`

___
<a id="shiftout"></a>

###  shiftOut

▸ **shiftOut**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:349](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L349)*

**Returns:** `boolean`

___
<a id="showcursor"></a>

###  showCursor

▸ **showCursor**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:707](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L707)*

Uses [setMode](_declarations_blessedprogram_d_.blessedprogram.md#setmode) 2 5 to show the cursor: NOTE: In xterm terminfo: cnorm stops blinking cursor cvvis starts blinking cursor

**Returns:** `boolean`

___
<a id="sigtstp"></a>

###  sigtstp

▸ **sigtstp**(callback?: *[ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:1271](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L1271)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` callback | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="simpleinsert"></a>

###  simpleInsert

▸ **simpleInsert**(ch: *`string`*, i?: *`number`*, attr?: *`boolean`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:318](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L318)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ch | `string` |
| `Optional` i | `number` |
| `Optional` attr | `boolean` |

**Returns:** `boolean`

___
<a id="sm"></a>

###  sm

▸ **sm**(...args: *`string`[]*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:701](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L701)*

*__see__*: [setMode](_declarations_blessedprogram_d_.blessedprogram.md#setmode)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="smacs"></a>

###  smacs

▸ **smacs**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:374](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L374)*

**Returns:** `boolean`

___
<a id="smcup"></a>

###  smcup

▸ **smcup**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:709](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L709)*

**Returns:** `boolean`

___
<a id="softreset"></a>

###  softReset

▸ **softReset**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:938](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L938)*

**Returns:** `boolean`

___
<a id="su"></a>

###  su

▸ **su**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:870](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L870)*

*__see__*: [scrollUp](_declarations_blessedprogram_d_.blessedprogram.md#scrollup)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="tab"></a>

###  tab

▸ **tab**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:345](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L345)*

**Returns:** `boolean`

___
<a id="tabclear"></a>

###  tabClear

▸ **tabClear**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:905](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L905)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="tabset"></a>

###  tabSet

▸ **tabSet**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:363](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L363)*

**Returns:** `boolean`

___
<a id="tbc"></a>

###  tbc

▸ **tbc**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:906](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L906)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="term"></a>

###  term

▸ **term**(is: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:279](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L279)*

Queries whether the terminal of the type `is`.

**Parameters:**

| Name | Type |
| ------ | ------ |
| is | `string` |

**Returns:** `boolean`

___
<a id="unkey"></a>

###  unKey

▸ **unKey**(key: *`string` \| `string`[]*, l: *[KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)*): `void`

*Defined in [declarations/blessedProgram.d.ts:284](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L284)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `string`[] |
| l | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="up"></a>

###  up

▸ **up**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:390](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L390)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="vi"></a>

###  vi

▸ **vi**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:801](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L801)*

**Returns:** `boolean`

___
<a id="vpa"></a>

###  vpa

▸ **vpa**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:599](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L599)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="vpr"></a>

###  vpr

▸ **vpr**(param?: *`number`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:601](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L601)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="vtab"></a>

###  vtab

▸ **vtab**(): `boolean`

*Defined in [declarations/blessedProgram.d.ts:340](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L340)*

**Returns:** `boolean`

___
<a id="write"></a>

###  write

▸ **write**(text: *`string`*): `boolean`

▸ **write**(text: *`string`*, style: *`string`*): `boolean`

*Defined in [declarations/blessedProgram.d.ts:292](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L292)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `boolean`

*Defined in [declarations/blessedProgram.d.ts:297](https://github.com/cancerberoSgx/accursed/blob/978b980/src/declarations/blessedProgram.d.ts#L297)*

Writes to this.output Example: `program.write('Hello world', 'blue fg')`

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| style | `string` |

**Returns:** `boolean`

___
<a id="listenercount-1"></a>

### `<Static>` listenerCount

▸ **listenerCount**(emitter: *`EventEmitter`*, event: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:8*

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___

