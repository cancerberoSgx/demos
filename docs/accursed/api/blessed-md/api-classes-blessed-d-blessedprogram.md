---
id: api-classes-blessed-d-blessedprogram
title: BlessedProgram
sidebar_label: BlessedProgram
---

[blessed](api-readme.md) > [[blessed.d Module]](api-modules-blessed-d-module.md) > [BlessedProgram](api-classes-blessed-d-blessedprogram.md)

## Class

The Program instance manages the low level interaction the the terminal. It emit the basi native events to the screens. It has associated an [output](api-classes-blessed-d-blessedprogram.md#output) writable stream attribute which ussually is stdout but could could be conigured by the user using [IBlessedProgramOptions](api-interfaces-blessed-d-iblessedprogramoptions.md). The same for an [input](api-classes-blessed-d-blessedprogram.md#input) Readable stream from which the host terminal respond to the program requests.

The communication with the host system is mostly done writing `tput` sequences to the [output](api-classes-blessed-d-blessedprogram.md#output) stream. The program is responsible of portability and supporting the same API thgouth several terminal standards / vendors

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

### Constructors

* [constructor](api-classes-blessed-d-blessedprogram.md#constructor)

### Properties

* [cols](api-classes-blessed-d-blessedprogram.md#cols)
* [gpm](api-classes-blessed-d-blessedprogram.md#gpm)
* [input](api-classes-blessed-d-blessedprogram.md#input)
* [isAlt](api-classes-blessed-d-blessedprogram.md#isalt)
* [isLXDE](api-classes-blessed-d-blessedprogram.md#islxde)
* [isOSXTerm](api-classes-blessed-d-blessedprogram.md#isosxterm)
* [isRxvt](api-classes-blessed-d-blessedprogram.md#isrxvt)
* [isTerminator](api-classes-blessed-d-blessedprogram.md#isterminator)
* [isVTE](api-classes-blessed-d-blessedprogram.md#isvte)
* [isXFCE](api-classes-blessed-d-blessedprogram.md#isxfce)
* [isXterm](api-classes-blessed-d-blessedprogram.md#isxterm)
* [isiTerm2](api-classes-blessed-d-blessedprogram.md#isiterm2)
* [options](api-classes-blessed-d-blessedprogram.md#options)
* [output](api-classes-blessed-d-blessedprogram.md#output)
* [restoreReportedCursor](api-classes-blessed-d-blessedprogram.md#restorereportedcursor)
* [resume](api-classes-blessed-d-blessedprogram.md#resume)
* [rows](api-classes-blessed-d-blessedprogram.md#rows)
* [savedX](api-classes-blessed-d-blessedprogram.md#savedx)
* [savedY](api-classes-blessed-d-blessedprogram.md#savedy)
* [scrollBottom](api-classes-blessed-d-blessedprogram.md#scrollbottom)
* [scrollTop](api-classes-blessed-d-blessedprogram.md#scrolltop)
* [tmux](api-classes-blessed-d-blessedprogram.md#tmux)
* [tmuxVersion](api-classes-blessed-d-blessedprogram.md#tmuxversion)
* [type](api-classes-blessed-d-blessedprogram.md#type)
* [useBuffer](api-classes-blessed-d-blessedprogram.md#usebuffer)
* [x](api-classes-blessed-d-blessedprogram.md#x)
* [y](api-classes-blessed-d-blessedprogram.md#y)
* [zero](api-classes-blessed-d-blessedprogram.md#zero)
* [defaultMaxListeners](api-classes-blessed-d-blessedprogram.md#defaultmaxlisteners)
* [instances](api-classes-blessed-d-blessedprogram.md#instances)

### Methods

* [HPositionRelative](api-classes-blessed-d-blessedprogram.md#hpositionrelative)
* [HVPosition](api-classes-blessed-d-blessedprogram.md#hvposition)
* [VPositionRelative](api-classes-blessed-d-blessedprogram.md#vpositionrelative)
* [_ncoords](api-classes-blessed-d-blessedprogram.md#_ncoords)
* [addListener](api-classes-blessed-d-blessedprogram.md#addlistener)
* [ae](api-classes-blessed-d-blessedprogram.md#ae)
* [alternate](api-classes-blessed-d-blessedprogram.md#alternate)
* [alternateBuffer](api-classes-blessed-d-blessedprogram.md#alternatebuffer)
* [as](api-classes-blessed-d-blessedprogram.md#as)
* [back](api-classes-blessed-d-blessedprogram.md#back)
* [backspace](api-classes-blessed-d-blessedprogram.md#backspace)
* [bel](api-classes-blessed-d-blessedprogram.md#bel)
* [bell](api-classes-blessed-d-blessedprogram.md#bell)
* [bg](api-classes-blessed-d-blessedprogram.md#bg)
* [bindMouse](api-classes-blessed-d-blessedprogram.md#bindmouse)
* [bindResponse](api-classes-blessed-d-blessedprogram.md#bindresponse)
* [cbt](api-classes-blessed-d-blessedprogram.md#cbt)
* [cha](api-classes-blessed-d-blessedprogram.md#cha)
* [charAttributes](api-classes-blessed-d-blessedprogram.md#charattributes)
* [charPosAbsolute](api-classes-blessed-d-blessedprogram.md#charposabsolute)
* [charset](api-classes-blessed-d-blessedprogram.md#charset)
* [cht](api-classes-blessed-d-blessedprogram.md#cht)
* [civis](api-classes-blessed-d-blessedprogram.md#civis)
* [clear](api-classes-blessed-d-blessedprogram.md#clear)
* [cnl](api-classes-blessed-d-blessedprogram.md#cnl)
* [copyRectangle](api-classes-blessed-d-blessedprogram.md#copyrectangle)
* [copyToClipboard](api-classes-blessed-d-blessedprogram.md#copytoclipboard)
* [cpl](api-classes-blessed-d-blessedprogram.md#cpl)
* [cr](api-classes-blessed-d-blessedprogram.md#cr)
* [csr](api-classes-blessed-d-blessedprogram.md#csr)
* [cub](api-classes-blessed-d-blessedprogram.md#cub)
* [cud](api-classes-blessed-d-blessedprogram.md#cud)
* [cuf](api-classes-blessed-d-blessedprogram.md#cuf)
* [cup](api-classes-blessed-d-blessedprogram.md#cup)
* [cursorBackward](api-classes-blessed-d-blessedprogram.md#cursorbackward)
* [cursorBackwardTab](api-classes-blessed-d-blessedprogram.md#cursorbackwardtab)
* [cursorCharAbsolute](api-classes-blessed-d-blessedprogram.md#cursorcharabsolute)
* [cursorColor](api-classes-blessed-d-blessedprogram.md#cursorcolor)
* [cursorDown](api-classes-blessed-d-blessedprogram.md#cursordown)
* [cursorForward](api-classes-blessed-d-blessedprogram.md#cursorforward)
* [cursorForwardTab](api-classes-blessed-d-blessedprogram.md#cursorforwardtab)
* [cursorNextLine](api-classes-blessed-d-blessedprogram.md#cursornextline)
* [cursorPos](api-classes-blessed-d-blessedprogram.md#cursorpos)
* [cursorPrecedingLine](api-classes-blessed-d-blessedprogram.md#cursorprecedingline)
* [cursorReset](api-classes-blessed-d-blessedprogram.md#cursorreset)
* [cursorShape](api-classes-blessed-d-blessedprogram.md#cursorshape)
* [cursorUp](api-classes-blessed-d-blessedprogram.md#cursorup)
* [cursor_invisible](api-classes-blessed-d-blessedprogram.md#cursor_invisible)
* [cuu](api-classes-blessed-d-blessedprogram.md#cuu)
* [da](api-classes-blessed-d-blessedprogram.md#da)
* [dch](api-classes-blessed-d-blessedprogram.md#dch)
* [debug](api-classes-blessed-d-blessedprogram.md#debug)
* [deccara](api-classes-blessed-d-blessedprogram.md#deccara)
* [deccra](api-classes-blessed-d-blessedprogram.md#deccra)
* [decdc](api-classes-blessed-d-blessedprogram.md#decdc)
* [decefr](api-classes-blessed-d-blessedprogram.md#decefr)
* [decelr](api-classes-blessed-d-blessedprogram.md#decelr)
* [decera](api-classes-blessed-d-blessedprogram.md#decera)
* [decfra](api-classes-blessed-d-blessedprogram.md#decfra)
* [decic](api-classes-blessed-d-blessedprogram.md#decic)
* [decll](api-classes-blessed-d-blessedprogram.md#decll)
* [decrara](api-classes-blessed-d-blessedprogram.md#decrara)
* [decreqtparm](api-classes-blessed-d-blessedprogram.md#decreqtparm)
* [decrqlp](api-classes-blessed-d-blessedprogram.md#decrqlp)
* [decrqm](api-classes-blessed-d-blessedprogram.md#decrqm)
* [decrqmp](api-classes-blessed-d-blessedprogram.md#decrqmp)
* [decrst](api-classes-blessed-d-blessedprogram.md#decrst)
* [decsace](api-classes-blessed-d-blessedprogram.md#decsace)
* [decsca](api-classes-blessed-d-blessedprogram.md#decsca)
* [decscl](api-classes-blessed-d-blessedprogram.md#decscl)
* [decscursr](api-classes-blessed-d-blessedprogram.md#decscursr)
* [decsera](api-classes-blessed-d-blessedprogram.md#decsera)
* [decset](api-classes-blessed-d-blessedprogram.md#decset)
* [decsle](api-classes-blessed-d-blessedprogram.md#decsle)
* [decstbm](api-classes-blessed-d-blessedprogram.md#decstbm)
* [decstr](api-classes-blessed-d-blessedprogram.md#decstr)
* [decswbv](api-classes-blessed-d-blessedprogram.md#decswbv)
* [dectcemh](api-classes-blessed-d-blessedprogram.md#dectcemh)
* [deleteChars](api-classes-blessed-d-blessedprogram.md#deletechars)
* [deleteColumns](api-classes-blessed-d-blessedprogram.md#deletecolumns)
* [deleteLines](api-classes-blessed-d-blessedprogram.md#deletelines)
* [destroy](api-classes-blessed-d-blessedprogram.md#destroy)
* [deviceStatus](api-classes-blessed-d-blessedprogram.md#devicestatus)
* [disableGpm](api-classes-blessed-d-blessedprogram.md#disablegpm)
* [disableModifieres](api-classes-blessed-d-blessedprogram.md#disablemodifieres)
* [disableMouse](api-classes-blessed-d-blessedprogram.md#disablemouse)
* [dl](api-classes-blessed-d-blessedprogram.md#dl)
* [down](api-classes-blessed-d-blessedprogram.md#down)
* [dsr](api-classes-blessed-d-blessedprogram.md#dsr)
* [dynamicColors](api-classes-blessed-d-blessedprogram.md#dynamiccolors)
* [ech](api-classes-blessed-d-blessedprogram.md#ech)
* [echo](api-classes-blessed-d-blessedprogram.md#echo)
* [ed](api-classes-blessed-d-blessedprogram.md#ed)
* [el](api-classes-blessed-d-blessedprogram.md#el)
* [emit](api-classes-blessed-d-blessedprogram.md#emit)
* [enableFilterRectangle](api-classes-blessed-d-blessedprogram.md#enablefilterrectangle)
* [enableGpm](api-classes-blessed-d-blessedprogram.md#enablegpm)
* [enableLocatorReporting](api-classes-blessed-d-blessedprogram.md#enablelocatorreporting)
* [enableMouse](api-classes-blessed-d-blessedprogram.md#enablemouse)
* [enter_alt_charset_mode](api-classes-blessed-d-blessedprogram.md#enter_alt_charset_mode)
* [eraseChars](api-classes-blessed-d-blessedprogram.md#erasechars)
* [eraseInDisplay](api-classes-blessed-d-blessedprogram.md#eraseindisplay)
* [eraseInLine](api-classes-blessed-d-blessedprogram.md#eraseinline)
* [eraseRectangle](api-classes-blessed-d-blessedprogram.md#eraserectangle)
* [eventNames](api-classes-blessed-d-blessedprogram.md#eventnames)
* [exit_alt_charset_mode](api-classes-blessed-d-blessedprogram.md#exit_alt_charset_mode)
* [feed](api-classes-blessed-d-blessedprogram.md#feed)
* [ff](api-classes-blessed-d-blessedprogram.md#ff)
* [fg](api-classes-blessed-d-blessedprogram.md#fg)
* [fillRectangle](api-classes-blessed-d-blessedprogram.md#fillrectangle)
* [flush](api-classes-blessed-d-blessedprogram.md#flush)
* [form](api-classes-blessed-d-blessedprogram.md#form)
* [forward](api-classes-blessed-d-blessedprogram.md#forward)
* [getCursor](api-classes-blessed-d-blessedprogram.md#getcursor)
* [getCursorColor](api-classes-blessed-d-blessedprogram.md#getcursorcolor)
* [getMaxListeners](api-classes-blessed-d-blessedprogram.md#getmaxlisteners)
* [getTextParams](api-classes-blessed-d-blessedprogram.md#gettextparams)
* [getWindowSize](api-classes-blessed-d-blessedprogram.md#getwindowsize)
* [has](api-classes-blessed-d-blessedprogram.md#has)
* [hideCursor](api-classes-blessed-d-blessedprogram.md#hidecursor)
* [hpa](api-classes-blessed-d-blessedprogram.md#hpa)
* [ht](api-classes-blessed-d-blessedprogram.md#ht)
* [hvp](api-classes-blessed-d-blessedprogram.md#hvp)
* [ich](api-classes-blessed-d-blessedprogram.md#ich)
* [il](api-classes-blessed-d-blessedprogram.md#il)
* [ind](api-classes-blessed-d-blessedprogram.md#ind)
* [index](api-classes-blessed-d-blessedprogram.md#index)
* [initMouseTracking](api-classes-blessed-d-blessedprogram.md#initmousetracking)
* [insertChars](api-classes-blessed-d-blessedprogram.md#insertchars)
* [insertColumns](api-classes-blessed-d-blessedprogram.md#insertcolumns)
* [insertLines](api-classes-blessed-d-blessedprogram.md#insertlines)
* [kbs](api-classes-blessed-d-blessedprogram.md#kbs)
* [key](api-classes-blessed-d-blessedprogram.md#key)
* [left](api-classes-blessed-d-blessedprogram.md#left)
* [lineHeight](api-classes-blessed-d-blessedprogram.md#lineheight)
* [linePosAbsolute](api-classes-blessed-d-blessedprogram.md#lineposabsolute)
* [listen](api-classes-blessed-d-blessedprogram.md#listen)
* [listenerCount](api-classes-blessed-d-blessedprogram.md#listenercount)
* [listeners](api-classes-blessed-d-blessedprogram.md#listeners)
* [loadLEDs](api-classes-blessed-d-blessedprogram.md#loadleds)
* [log](api-classes-blessed-d-blessedprogram.md#log)
* [lrestoreCursor](api-classes-blessed-d-blessedprogram.md#lrestorecursor)
* [lsaveCursor](api-classes-blessed-d-blessedprogram.md#lsavecursor)
* [manipulateWindow](api-classes-blessed-d-blessedprogram.md#manipulatewindow)
* [mc](api-classes-blessed-d-blessedprogram.md#mc)
* [mc0](api-classes-blessed-d-blessedprogram.md#mc0)
* [mc4](api-classes-blessed-d-blessedprogram.md#mc4)
* [mc5](api-classes-blessed-d-blessedprogram.md#mc5)
* [mc5p](api-classes-blessed-d-blessedprogram.md#mc5p)
* [mediaCopy](api-classes-blessed-d-blessedprogram.md#mediacopy)
* [move](api-classes-blessed-d-blessedprogram.md#move)
* [newline](api-classes-blessed-d-blessedprogram.md#newline)
* [nextLine](api-classes-blessed-d-blessedprogram.md#nextline)
* [nl](api-classes-blessed-d-blessedprogram.md#nl)
* [normalBuffer](api-classes-blessed-d-blessedprogram.md#normalbuffer)
* [nul](api-classes-blessed-d-blessedprogram.md#nul)
* [off](api-classes-blessed-d-blessedprogram.md#off)
* [omove](api-classes-blessed-d-blessedprogram.md#omove)
* [on](api-classes-blessed-d-blessedprogram.md#on)
* [once](api-classes-blessed-d-blessedprogram.md#once)
* [onceKey](api-classes-blessed-d-blessedprogram.md#oncekey)
* [out](api-classes-blessed-d-blessedprogram.md#out)
* [p0](api-classes-blessed-d-blessedprogram.md#p0)
* [pause](api-classes-blessed-d-blessedprogram.md#pause)
* [pf](api-classes-blessed-d-blessedprogram.md#pf)
* [po](api-classes-blessed-d-blessedprogram.md#po)
* [pos](api-classes-blessed-d-blessedprogram.md#pos)
* [prependListener](api-classes-blessed-d-blessedprogram.md#prependlistener)
* [prependOnceListener](api-classes-blessed-d-blessedprogram.md#prependoncelistener)
* [print](api-classes-blessed-d-blessedprogram.md#print)
* [print_screen](api-classes-blessed-d-blessedprogram.md#print_screen)
* [prtr_non](api-classes-blessed-d-blessedprogram.md#prtr_non)
* [prtr_off](api-classes-blessed-d-blessedprogram.md#prtr_off)
* [prtr_on](api-classes-blessed-d-blessedprogram.md#prtr_on)
* [ps](api-classes-blessed-d-blessedprogram.md#ps)
* [rawListeners](api-classes-blessed-d-blessedprogram.md#rawlisteners)
* [rc](api-classes-blessed-d-blessedprogram.md#rc)
* [rcA](api-classes-blessed-d-blessedprogram.md#rca)
* [removeAllListeners](api-classes-blessed-d-blessedprogram.md#removealllisteners)
* [removeKey](api-classes-blessed-d-blessedprogram.md#removekey)
* [removeListener](api-classes-blessed-d-blessedprogram.md#removelistener)
* [rep](api-classes-blessed-d-blessedprogram.md#rep)
* [repeat](api-classes-blessed-d-blessedprogram.md#repeat)
* [repeatPrecedingCharacter](api-classes-blessed-d-blessedprogram.md#repeatprecedingcharacter)
* [req_mouse_pos](api-classes-blessed-d-blessedprogram.md#req_mouse_pos)
* [reqmp](api-classes-blessed-d-blessedprogram.md#reqmp)
* [requestAnsiMode](api-classes-blessed-d-blessedprogram.md#requestansimode)
* [requestLocatorPosition](api-classes-blessed-d-blessedprogram.md#requestlocatorposition)
* [requestParameters](api-classes-blessed-d-blessedprogram.md#requestparameters)
* [requestPrivateMode](api-classes-blessed-d-blessedprogram.md#requestprivatemode)
* [reset](api-classes-blessed-d-blessedprogram.md#reset)
* [resetColors](api-classes-blessed-d-blessedprogram.md#resetcolors)
* [resetCursor](api-classes-blessed-d-blessedprogram.md#resetcursor)
* [resetMode](api-classes-blessed-d-blessedprogram.md#resetmode)
* [resetTitleModes](api-classes-blessed-d-blessedprogram.md#resettitlemodes)
* [response](api-classes-blessed-d-blessedprogram.md#response)
* [restoreCursor](api-classes-blessed-d-blessedprogram.md#restorecursor)
* [restoreCursorA](api-classes-blessed-d-blessedprogram.md#restorecursora)
* [restorePrivateValues](api-classes-blessed-d-blessedprogram.md#restoreprivatevalues)
* [return](api-classes-blessed-d-blessedprogram.md#return)
* [reverse](api-classes-blessed-d-blessedprogram.md#reverse)
* [reverseAttrInRectangle](api-classes-blessed-d-blessedprogram.md#reverseattrinrectangle)
* [reverseIndex](api-classes-blessed-d-blessedprogram.md#reverseindex)
* [ri](api-classes-blessed-d-blessedprogram.md#ri)
* [right](api-classes-blessed-d-blessedprogram.md#right)
* [rm](api-classes-blessed-d-blessedprogram.md#rm)
* [rmacs](api-classes-blessed-d-blessedprogram.md#rmacs)
* [rmcup](api-classes-blessed-d-blessedprogram.md#rmcup)
* [rmove](api-classes-blessed-d-blessedprogram.md#rmove)
* [rs2](api-classes-blessed-d-blessedprogram.md#rs2)
* [rsetx](api-classes-blessed-d-blessedprogram.md#rsetx)
* [rsety](api-classes-blessed-d-blessedprogram.md#rsety)
* [saveCursor](api-classes-blessed-d-blessedprogram.md#savecursor)
* [saveCursorA](api-classes-blessed-d-blessedprogram.md#savecursora)
* [savePrivateValues](api-classes-blessed-d-blessedprogram.md#saveprivatevalues)
* [saveReportedCursor](api-classes-blessed-d-blessedprogram.md#savereportedcursor)
* [sc](api-classes-blessed-d-blessedprogram.md#sc)
* [scA](api-classes-blessed-d-blessedprogram.md#sca)
* [scrollDown](api-classes-blessed-d-blessedprogram.md#scrolldown)
* [scrollUp](api-classes-blessed-d-blessedprogram.md#scrollup)
* [sd](api-classes-blessed-d-blessedprogram.md#sd)
* [selData](api-classes-blessed-d-blessedprogram.md#seldata)
* [selectChangeExtent](api-classes-blessed-d-blessedprogram.md#selectchangeextent)
* [selectiveEraseRectangle](api-classes-blessed-d-blessedprogram.md#selectiveeraserectangle)
* [sendDeviceAttributes](api-classes-blessed-d-blessedprogram.md#senddeviceattributes)
* [setAttrInRectangle](api-classes-blessed-d-blessedprogram.md#setattrinrectangle)
* [setBackground](api-classes-blessed-d-blessedprogram.md#setbackground)
* [setCharProtectionAttr](api-classes-blessed-d-blessedprogram.md#setcharprotectionattr)
* [setConformanceLevel](api-classes-blessed-d-blessedprogram.md#setconformancelevel)
* [setCursorStyle](api-classes-blessed-d-blessedprogram.md#setcursorstyle)
* [setForeground](api-classes-blessed-d-blessedprogram.md#setforeground)
* [setG](api-classes-blessed-d-blessedprogram.md#setg)
* [setLocatorEvents](api-classes-blessed-d-blessedprogram.md#setlocatorevents)
* [setMarginBellVolume](api-classes-blessed-d-blessedprogram.md#setmarginbellvolume)
* [setMaxListeners](api-classes-blessed-d-blessedprogram.md#setmaxlisteners)
* [setMode](api-classes-blessed-d-blessedprogram.md#setmode)
* [setMouse](api-classes-blessed-d-blessedprogram.md#setmouse)
* [setPointerMode](api-classes-blessed-d-blessedprogram.md#setpointermode)
* [setResources](api-classes-blessed-d-blessedprogram.md#setresources)
* [setScrollRegion](api-classes-blessed-d-blessedprogram.md#setscrollregion)
* [setTerminal](api-classes-blessed-d-blessedprogram.md#setterminal)
* [setTitle](api-classes-blessed-d-blessedprogram.md#settitle)
* [setTitleModeFeature](api-classes-blessed-d-blessedprogram.md#settitlemodefeature)
* [setWarningBellVolume](api-classes-blessed-d-blessedprogram.md#setwarningbellvolume)
* [setupDump](api-classes-blessed-d-blessedprogram.md#setupdump)
* [setupTput](api-classes-blessed-d-blessedprogram.md#setuptput)
* [setx](api-classes-blessed-d-blessedprogram.md#setx)
* [sety](api-classes-blessed-d-blessedprogram.md#sety)
* [shiftIn](api-classes-blessed-d-blessedprogram.md#shiftin)
* [shiftOut](api-classes-blessed-d-blessedprogram.md#shiftout)
* [showCursor](api-classes-blessed-d-blessedprogram.md#showcursor)
* [sigtstp](api-classes-blessed-d-blessedprogram.md#sigtstp)
* [simpleInsert](api-classes-blessed-d-blessedprogram.md#simpleinsert)
* [sm](api-classes-blessed-d-blessedprogram.md#sm)
* [smacs](api-classes-blessed-d-blessedprogram.md#smacs)
* [smcup](api-classes-blessed-d-blessedprogram.md#smcup)
* [softReset](api-classes-blessed-d-blessedprogram.md#softreset)
* [su](api-classes-blessed-d-blessedprogram.md#su)
* [tab](api-classes-blessed-d-blessedprogram.md#tab)
* [tabClear](api-classes-blessed-d-blessedprogram.md#tabclear)
* [tabSet](api-classes-blessed-d-blessedprogram.md#tabset)
* [tbc](api-classes-blessed-d-blessedprogram.md#tbc)
* [term](api-classes-blessed-d-blessedprogram.md#term)
* [unKey](api-classes-blessed-d-blessedprogram.md#unkey)
* [up](api-classes-blessed-d-blessedprogram.md#up)
* [vi](api-classes-blessed-d-blessedprogram.md#vi)
* [vpa](api-classes-blessed-d-blessedprogram.md#vpa)
* [vpr](api-classes-blessed-d-blessedprogram.md#vpr)
* [vtab](api-classes-blessed-d-blessedprogram.md#vtab)
* [write](api-classes-blessed-d-blessedprogram.md#write)
* [listenerCount](api-classes-blessed-d-blessedprogram.md#listenercount-1)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BlessedProgram**(options?: *[IBlessedProgramOptions](api-interfaces-blessed-d-iblessedprogramoptions.md)*): [BlessedProgram](api-classes-blessed-d-blessedprogram.md)

*Defined in [blessed.d.ts:254](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L254)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [IBlessedProgramOptions](api-interfaces-blessed-d-iblessedprogramoptions.md) |

**Returns:** [BlessedProgram](api-classes-blessed-d-blessedprogram.md)

___

## Properties

<a id="cols"></a>

###  cols

**● cols**: *`number`*

*Defined in [blessed.d.ts:240](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L240)*

___
<a id="gpm"></a>

### `<Optional>` gpm

**● gpm**: *[GpmClient](api-interfaces-blessed-d-gpmclient.md)*

*Defined in [blessed.d.ts:225](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L225)*

*__internal__*: 

___
<a id="input"></a>

###  input

**● input**: *`Readable`*

*Defined in [blessed.d.ts:229](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L229)*

___
<a id="isalt"></a>

###  isAlt

**● isAlt**: *`boolean`*

*Defined in [blessed.d.ts:254](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L254)*

___
<a id="islxde"></a>

###  isLXDE

**● isLXDE**: *`boolean`*

*Defined in [blessed.d.ts:248](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L248)*

___
<a id="isosxterm"></a>

###  isOSXTerm

**● isOSXTerm**: *`boolean`*

*Defined in [blessed.d.ts:244](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L244)*

___
<a id="isrxvt"></a>

###  isRxvt

**● isRxvt**: *`boolean`*

*Defined in [blessed.d.ts:250](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L250)*

___
<a id="isterminator"></a>

###  isTerminator

**● isTerminator**: *`boolean`*

*Defined in [blessed.d.ts:247](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L247)*

___
<a id="isvte"></a>

###  isVTE

**● isVTE**: *`boolean`*

*Defined in [blessed.d.ts:249](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L249)*

___
<a id="isxfce"></a>

###  isXFCE

**● isXFCE**: *`boolean`*

*Defined in [blessed.d.ts:246](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L246)*

___
<a id="isxterm"></a>

###  isXterm

**● isXterm**: *`boolean`*

*Defined in [blessed.d.ts:251](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L251)*

___
<a id="isiterm2"></a>

###  isiTerm2

**● isiTerm2**: *`boolean`*

*Defined in [blessed.d.ts:245](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L245)*

___
<a id="options"></a>

###  options

**● options**: *[IBlessedProgramOptions](api-interfaces-blessed-d-iblessedprogramoptions.md)*

*Defined in [blessed.d.ts:228](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L228)*

___
<a id="output"></a>

###  output

**● output**: *`Writable`*

*Defined in [blessed.d.ts:230](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L230)*

___
<a id="restorereportedcursor"></a>

###  restoreReportedCursor

**● restoreReportedCursor**: *`function`*

*Defined in [blessed.d.ts:595](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L595)*

#### Type declaration
▸(): `boolean`

**Returns:** `boolean`

___
<a id="resume"></a>

###  resume

**● resume**: *`function`*

*Defined in [blessed.d.ts:1364](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1364)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="rows"></a>

###  rows

**● rows**: *`number`*

*Defined in [blessed.d.ts:241](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L241)*

___
<a id="savedx"></a>

###  savedX

**● savedX**: *`number`*

*Defined in [blessed.d.ts:238](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L238)*

___
<a id="savedy"></a>

###  savedY

**● savedY**: *`number`*

*Defined in [blessed.d.ts:239](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L239)*

___
<a id="scrollbottom"></a>

###  scrollBottom

**● scrollBottom**: *`number`*

*Defined in [blessed.d.ts:243](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L243)*

___
<a id="scrolltop"></a>

###  scrollTop

**● scrollTop**: *`number`*

*Defined in [blessed.d.ts:242](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L242)*

___
<a id="tmux"></a>

###  tmux

**● tmux**: *`boolean`*

*Defined in [blessed.d.ts:252](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L252)*

___
<a id="tmuxversion"></a>

###  tmuxVersion

**● tmuxVersion**: *`number`*

*Defined in [blessed.d.ts:253](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L253)*

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Defined in [blessed.d.ts:227](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L227)*

___
<a id="usebuffer"></a>

###  useBuffer

**● useBuffer**: *`boolean`*

*Defined in [blessed.d.ts:235](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L235)*

___
<a id="x"></a>

###  x

**● x**: *`number`*

*Defined in [blessed.d.ts:236](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L236)*

___
<a id="y"></a>

###  y

**● y**: *`number`*

*Defined in [blessed.d.ts:237](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L237)*

___
<a id="zero"></a>

###  zero

**● zero**: *`boolean`*

*Defined in [blessed.d.ts:234](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L234)*

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

**● instances**: *[BlessedProgram](api-classes-blessed-d-blessedprogram.md)[]*

*Defined in [blessed.d.ts:223](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L223)*

*__internal__*: 

___

## Methods

<a id="hpositionrelative"></a>

###  HPositionRelative

▸ **HPositionRelative**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:635](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L635)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="hvposition"></a>

###  HVPosition

▸ **HVPosition**(row?: *`number`*, col?: *`number`*): `boolean`

*Defined in [blessed.d.ts:646](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L646)*

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

*Defined in [blessed.d.ts:643](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L643)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="_ncoords"></a>

###  _ncoords

▸ **_ncoords**(): `void`

*Defined in [blessed.d.ts:349](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L349)*

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

*Defined in [blessed.d.ts:389](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L389)*

**Returns:** `boolean`

___
<a id="alternate"></a>

###  alternate

▸ **alternate**(): `boolean`

*Defined in [blessed.d.ts:758](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L758)*

**Returns:** `boolean`

___
<a id="alternatebuffer"></a>

###  alternateBuffer

▸ **alternateBuffer**(): `boolean`

*Defined in [blessed.d.ts:756](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L756)*

**Returns:** `boolean`

___
<a id="as"></a>

###  as

▸ **as**(): `boolean`

*Defined in [blessed.d.ts:385](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L385)*

**Returns:** `boolean`

___
<a id="back"></a>

###  back

▸ **back**(n?: *`number`*): `boolean`

*Defined in [blessed.d.ts:427](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L427)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="backspace"></a>

###  backspace

▸ **backspace**(): `boolean`

*Defined in [blessed.d.ts:343](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L343)*

**Returns:** `boolean`

___
<a id="bel"></a>

###  bel

▸ **bel**(): `boolean`

*Defined in [blessed.d.ts:336](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L336)*

**Returns:** `boolean`

___
<a id="bell"></a>

###  bell

▸ **bell**(): `boolean`

*Defined in [blessed.d.ts:335](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L335)*

**Returns:** `boolean`

___
<a id="bg"></a>

###  bg

▸ **bg**(color: *`string`*, val?: *`string`*): `boolean`

*Defined in [blessed.d.ts:553](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L553)*

*__see__*: [setBackground](api-classes-blessed-d-blessedprogram.md#setbackground)

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

*Defined in [blessed.d.ts:279](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L279)*

**Returns:** `void`

___
<a id="bindresponse"></a>

###  bindResponse

▸ **bindResponse**(): `void`

*Defined in [blessed.d.ts:282](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L282)*

**Returns:** `void`

___
<a id="cbt"></a>

###  cbt

▸ **cbt**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:956](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L956)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="cha"></a>

###  cha

▸ **cha**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:618](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L618)*

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

*Defined in [blessed.d.ts:518](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L518)*

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

*Defined in [blessed.d.ts:519](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L519)*

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

*Defined in [blessed.d.ts:632](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L632)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="charset"></a>

###  charset

▸ **charset**(val?: *`string`*, level?: *`number`*): `boolean`

*Defined in [blessed.d.ts:382](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L382)*

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

*Defined in [blessed.d.ts:918](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L918)*

*__see__*: [cursorForwardTab](api-classes-blessed-d-blessedprogram.md#cursorforwardtab)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="civis"></a>

###  civis

▸ **civis**(): `boolean`

*Defined in [blessed.d.ts:851](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L851)*

**Returns:** `boolean`

___
<a id="clear"></a>

###  clear

▸ **clear**(): `boolean`

*Defined in [blessed.d.ts:447](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L447)*

**Returns:** `boolean`

___
<a id="cnl"></a>

###  cnl

▸ **cnl**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:612](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L612)*

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

*Defined in [blessed.d.ts:1187](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1187)*

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

*Defined in [blessed.d.ts:313](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L313)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `boolean`

___
<a id="cpl"></a>

###  cpl

▸ **cpl**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:615](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L615)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="cr"></a>

###  cr

▸ **cr**(): `boolean`

*Defined in [blessed.d.ts:354](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L354)*

**Returns:** `boolean`

___
<a id="csr"></a>

###  csr

▸ **csr**(top: *`number`*, bottom: *`number`*): `boolean`

*Defined in [blessed.d.ts:892](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L892)*

*__see__*: [setScrollRegion](api-classes-blessed-d-blessedprogram.md#setscrollregion)

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

*Defined in [blessed.d.ts:425](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L425)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="cud"></a>

###  cud

▸ **cud**(n?: *`number`*): `boolean`

*Defined in [blessed.d.ts:415](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L415)*

*__see__*: [cursorDown](api-classes-blessed-d-blessedprogram.md#cursordown)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="cuf"></a>

###  cuf

▸ **cuf**(n?: *`number`*): `boolean`

*Defined in [blessed.d.ts:420](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L420)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="cup"></a>

###  cup

▸ **cup**(row?: *`number`*, col?: *`number`*): `boolean`

*Defined in [blessed.d.ts:437](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L437)*

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

*Defined in [blessed.d.ts:424](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L424)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="cursorbackwardtab"></a>

###  cursorBackwardTab

▸ **cursorBackwardTab**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:954](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L954)*

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

*Defined in [blessed.d.ts:309](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L309)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |

**Returns:** `number`

*Defined in [blessed.d.ts:617](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L617)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="cursorcolor"></a>

###  cursorColor

▸ **cursorColor**(color: *`string`*): `boolean`

*Defined in [blessed.d.ts:316](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L316)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |

**Returns:** `boolean`

___
<a id="cursordown"></a>

###  cursorDown

▸ **cursorDown**(n?: *`number`*): `boolean`

*Defined in [blessed.d.ts:413](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L413)*

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

*Defined in [blessed.d.ts:419](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L419)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="cursorforwardtab"></a>

###  cursorForwardTab

▸ **cursorForwardTab**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:916](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L916)*

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

*Defined in [blessed.d.ts:610](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L610)*

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

*Defined in [blessed.d.ts:432](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L432)*

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

*Defined in [blessed.d.ts:614](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L614)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="cursorreset"></a>

###  cursorReset

▸ **cursorReset**(): `boolean`

*Defined in [blessed.d.ts:317](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L317)*

**Returns:** `boolean`

___
<a id="cursorshape"></a>

###  cursorShape

▸ **cursorShape**(shape: *"block" \| "underline" \| "line"*, blink?: *`boolean`*): `boolean`

*Defined in [blessed.d.ts:315](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L315)*

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

*Defined in [blessed.d.ts:406](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L406)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="cursor_invisible"></a>

###  cursor_invisible

▸ **cursor_invisible**(): `boolean`

*Defined in [blessed.d.ts:853](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L853)*

**Returns:** `boolean`

___
<a id="cuu"></a>

###  cuu

▸ **cuu**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:407](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L407)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="da"></a>

###  da

▸ **da**(param?: *`number`*, callback?: *`Function`*): `boolean`

*Defined in [blessed.d.ts:638](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L638)*

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

*Defined in [blessed.d.ts:627](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L627)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="debug"></a>

###  debug

▸ **debug**(s: *`string`*): `boolean`

*Defined in [blessed.d.ts:261](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L261)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `boolean`

___
<a id="deccara"></a>

###  deccara

▸ **deccara**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1083](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1083)*

*__see__*: [setAttrInRectangle](api-classes-blessed-d-blessedprogram.md#setattrinrectangle)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="deccra"></a>

###  deccra

▸ **deccra**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1189](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1189)*

*__see__*: [copyRectangle](api-classes-blessed-d-blessedprogram.md#copyrectangle)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decdc"></a>

###  decdc

▸ **decdc**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1356](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1356)*

*__see__*: [deleteColumns](api-classes-blessed-d-blessedprogram.md#deletecolumns)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decefr"></a>

###  decefr

▸ **decefr**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1208](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1208)*

*__see__*: [enableFilterRectangle](api-classes-blessed-d-blessedprogram.md#enablefilterrectangle)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decelr"></a>

###  decelr

▸ **decelr**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1273](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1273)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decera"></a>

###  decera

▸ **decera**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1276](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1276)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decfra"></a>

###  decfra

▸ **decfra**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1253](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1253)*

*__see__*: [fillRectangle](api-classes-blessed-d-blessedprogram.md#fillrectangle)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decic"></a>

###  decic

▸ **decic**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1345](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1345)*

*__see__*: [insertColumns](api-classes-blessed-d-blessedprogram.md#insertcolumns)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decll"></a>

###  decll

▸ **decll**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:1017](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1017)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="decrara"></a>

###  decrara

▸ **decrara**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1157](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1157)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decreqtparm"></a>

###  decreqtparm

▸ **decreqtparm**(param: *`number`*): `boolean`

*Defined in [blessed.d.ts:1227](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1227)*

*__see__*: [requestParameters](api-classes-blessed-d-blessedprogram.md#requestparameters)

**Parameters:**

| Name | Type |
| ------ | ------ |
| param | `number` |

**Returns:** `boolean`

___
<a id="decrqlp"></a>

###  decrqlp

▸ **decrqlp**(param?: *`string`*, callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:1334](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1334)*

*__see__*: [requestLocatorPosition](api-classes-blessed-d-blessedprogram.md#requestlocatorposition)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="decrqm"></a>

###  decrqm

▸ **decrqm**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:1008](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1008)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="decrqmp"></a>

###  decrqmp

▸ **decrqmp**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:1011](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1011)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="decrst"></a>

###  decrst

▸ **decrst**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:848](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L848)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decsace"></a>

###  decsace

▸ **decsace**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:1239](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1239)*

*__see__*: [selectChangeExtent](api-classes-blessed-d-blessedprogram.md#selectchangeextent)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="decsca"></a>

###  decsca

▸ **decsca**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:1062](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1062)*

*__see__*: [setCharProtectionAttr](api-classes-blessed-d-blessedprogram.md#setcharprotectionattr)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="decscl"></a>

###  decscl

▸ **decscl**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1014](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1014)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decscursr"></a>

###  decscursr

▸ **decscursr**(cursor: *`number`*): `boolean`

*Defined in [blessed.d.ts:1048](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1048)*

see [setCursorStyle](api-classes-blessed-d-blessedprogram.md#setcursorstyle)

**Parameters:**

| Name | Type |
| ------ | ------ |
| cursor | `number` |

**Returns:** `boolean`

___
<a id="decsera"></a>

###  decsera

▸ **decsera**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1282](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1282)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decset"></a>

###  decset

▸ **decset**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:749](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L749)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decsle"></a>

###  decsle

▸ **decsle**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1279](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1279)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decstbm"></a>

###  decstbm

▸ **decstbm**(top: *`number`*, bottom: *`number`*): `boolean`

*Defined in [blessed.d.ts:894](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L894)*

*__see__*: [setScrollRegion](api-classes-blessed-d-blessedprogram.md#setscrollregion)

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

*Defined in [blessed.d.ts:1005](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1005)*

**Returns:** `boolean`

___
<a id="decswbv"></a>

###  decswbv

▸ **decswbv**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:1173](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1173)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="dectcemh"></a>

###  dectcemh

▸ **dectcemh**(): `boolean`

*Defined in [blessed.d.ts:854](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L854)*

**Returns:** `boolean`

___
<a id="deletechars"></a>

###  deleteChars

▸ **deleteChars**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:626](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L626)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="deletecolumns"></a>

###  deleteColumns

▸ **deleteColumns**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1354](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1354)*

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

*Defined in [blessed.d.ts:623](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L623)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(): `void`

*Defined in [blessed.d.ts:271](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L271)*

**Returns:** `void`

___
<a id="devicestatus"></a>

###  deviceStatus

▸ **deviceStatus**(param?: *`string`*, callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*, dec?: *`boolean`*, noBypass?: *`boolean`*): `boolean`

*Defined in [blessed.d.ts:580](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L580)*

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
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |
| `Optional` dec | `boolean` |
| `Optional` noBypass | `boolean` |

**Returns:** `boolean`

___
<a id="disablegpm"></a>

###  disableGpm

▸ **disableGpm**(): `void`

*Defined in [blessed.d.ts:281](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L281)*

**Returns:** `void`

___
<a id="disablemodifieres"></a>

###  disableModifieres

▸ **disableModifieres**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:985](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L985)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="disablemouse"></a>

###  disableMouse

▸ **disableMouse**(): `void`

*Defined in [blessed.d.ts:860](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L860)*

**Returns:** `void`

___
<a id="dl"></a>

###  dl

▸ **dl**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:624](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L624)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="down"></a>

###  down

▸ **down**(n?: *`number`*): `boolean`

*Defined in [blessed.d.ts:417](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L417)*

*__see__*: [cursorDown](api-classes-blessed-d-blessedprogram.md#cursordown)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="dsr"></a>

###  dsr

▸ **dsr**(param?: *`string`*, callback?: *`Function`*, dec?: *`boolean`*, noBypass?: *`boolean`*): `boolean`

*Defined in [blessed.d.ts:582](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L582)*

*__see__*: [deviceStatus](api-classes-blessed-d-blessedprogram.md#devicestatus)

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

*Defined in [blessed.d.ts:403](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L403)*

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

*Defined in [blessed.d.ts:630](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L630)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="echo"></a>

###  echo

▸ **echo**(text: *`string`*, attr?: *`boolean`*): `boolean`

*Defined in [blessed.d.ts:299](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L299)*

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

*Defined in [blessed.d.ts:445](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L445)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |

**Returns:** `boolean`

___
<a id="el"></a>

###  el

▸ **el**(param?: *`string`*): `boolean`

*Defined in [blessed.d.ts:450](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L450)*

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

*Defined in [blessed.d.ts:1206](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1206)*

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

*Defined in [blessed.d.ts:280](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L280)*

**Returns:** `void`

___
<a id="enablelocatorreporting"></a>

###  enableLocatorReporting

▸ **enableLocatorReporting**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1272](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1272)*

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

*Defined in [blessed.d.ts:859](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L859)*

**Returns:** `void`

___
<a id="enter_alt_charset_mode"></a>

###  enter_alt_charset_mode

▸ **enter_alt_charset_mode**(): `boolean`

*Defined in [blessed.d.ts:384](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L384)*

**Returns:** `boolean`

___
<a id="erasechars"></a>

###  eraseChars

▸ **eraseChars**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:629](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L629)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="eraseindisplay"></a>

###  eraseInDisplay

▸ **eraseInDisplay**(param?: *`string`*): `boolean`

*Defined in [blessed.d.ts:444](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L444)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |

**Returns:** `boolean`

___
<a id="eraseinline"></a>

###  eraseInLine

▸ **eraseInLine**(param?: *`string`*): `boolean`

*Defined in [blessed.d.ts:449](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L449)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |

**Returns:** `boolean`

___
<a id="eraserectangle"></a>

###  eraseRectangle

▸ **eraseRectangle**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1275](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1275)*

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

*Defined in [blessed.d.ts:388](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L388)*

**Returns:** `boolean`

___
<a id="feed"></a>

###  feed

▸ **feed**(): `boolean`

*Defined in [blessed.d.ts:356](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L356)*

**Returns:** `boolean`

___
<a id="ff"></a>

###  ff

▸ **ff**(): `boolean`

*Defined in [blessed.d.ts:341](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L341)*

**Returns:** `boolean`

___
<a id="fg"></a>

###  fg

▸ **fg**(color: *`string`*, val?: *`boolean`*): `string`

*Defined in [blessed.d.ts:536](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L536)*

*__see__*: [setForeground](api-classes-blessed-d-blessedprogram.md#setforeground)

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

*Defined in [blessed.d.ts:1250](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1250)*

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

*Defined in [blessed.d.ts:296](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L296)*

```
Flushes the buffer.
```

**Returns:** `void`

___
<a id="form"></a>

###  form

▸ **form**(): `boolean`

*Defined in [blessed.d.ts:340](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L340)*

**Returns:** `boolean`

___
<a id="forward"></a>

###  forward

▸ **forward**(n?: *`number`*): `boolean`

*Defined in [blessed.d.ts:422](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L422)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="getcursor"></a>

###  getCursor

▸ **getCursor**(callback: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:592](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L592)*

Example Call:

```
program.getCursor(function(err, data) {
program.log('getCursor', data);
});
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="getcursorcolor"></a>

###  getCursorColor

▸ **getCursorColor**(callback: *`Function`*): `boolean`

*Defined in [blessed.d.ts:331](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L331)*

example call:

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

*Defined in [blessed.d.ts:320](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L320)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| param | `string` |
| callback | `Function` |

**Returns:** `boolean`

___
<a id="getwindowsize"></a>

###  getWindowSize

▸ **getWindowSize**(callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:1154](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1154)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="has"></a>

###  has

▸ **has**(name: *`string`*): `boolean`

*Defined in [blessed.d.ts:266](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L266)*

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

*Defined in [blessed.d.ts:850](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L850)*

**Returns:** `boolean`

___
<a id="hpa"></a>

###  hpa

▸ **hpa**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:633](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L633)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="ht"></a>

###  ht

▸ **ht**(): `boolean`

*Defined in [blessed.d.ts:347](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L347)*

**Returns:** `boolean`

___
<a id="hvp"></a>

###  hvp

▸ **hvp**(row?: *`number`*, col?: *`number`*): `boolean`

*Defined in [blessed.d.ts:647](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L647)*

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

*Defined in [blessed.d.ts:601](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L601)*

*__see__*: [insertChars](api-classes-blessed-d-blessedprogram.md#insertchars)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="il"></a>

###  il

▸ **il**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:621](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L621)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="ind"></a>

###  ind

▸ **ind**(): `boolean`

*Defined in [blessed.d.ts:361](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L361)*

**Returns:** `boolean`

___
<a id="index"></a>

###  index

▸ **index**(): `boolean`

*Defined in [blessed.d.ts:360](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L360)*

**Returns:** `boolean`

___
<a id="initmousetracking"></a>

###  initMouseTracking

▸ **initMouseTracking**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:935](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L935)*

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

*Defined in [blessed.d.ts:599](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L599)*

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

*Defined in [blessed.d.ts:1343](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1343)*

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

*Defined in [blessed.d.ts:620](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L620)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="kbs"></a>

###  kbs

▸ **kbs**(): `boolean`

*Defined in [blessed.d.ts:344](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L344)*

**Returns:** `boolean`

___
<a id="key"></a>

###  key

▸ **key**(key: *`string` \| `string`[]*, l: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `void`

*Defined in [blessed.d.ts:273](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L273)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `string`[] |
| l | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="left"></a>

###  left

▸ **left**(n?: *`number`*): `boolean`

*Defined in [blessed.d.ts:426](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L426)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="lineheight"></a>

###  lineHeight

▸ **lineHeight**(): `boolean`

*Defined in [blessed.d.ts:380](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L380)*

**Returns:** `boolean`

___
<a id="lineposabsolute"></a>

###  linePosAbsolute

▸ **linePosAbsolute**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:640](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L640)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="listen"></a>

###  listen

▸ **listen**(): `void`

*Defined in [blessed.d.ts:270](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L270)*

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

*Defined in [blessed.d.ts:1016](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1016)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="log"></a>

###  log

▸ **log**(...args: *`any`[]*): `boolean`

*Defined in [blessed.d.ts:260](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L260)*

Writes arguments to [log](api-classes-blessed-d-blessedprogram.md#log) file passed in options.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="lrestorecursor"></a>

###  lrestoreCursor

▸ **lrestoreCursor**(key?: *`string`*, hide?: *`boolean`*): `void`

*Defined in [blessed.d.ts:378](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L378)*

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

*Defined in [blessed.d.ts:377](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L377)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` key | `string` |

**Returns:** `void`

___
<a id="manipulatewindow"></a>

###  manipulateWindow

▸ **manipulateWindow**(data1: *`number`*, data2: *`number` \| `undefined`*, c: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

▸ **manipulateWindow**(data1: *`number`*, c: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:1150](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1150)*

`` ` CSI Ps ; Ps ; Ps t Window manipulation (from dtterm, as well as extensions). These controls may be disabled using the allowWindowOps resource. Valid values for the first (and any additional parameters) are:````Ps = 1 -> De-iconify window. Ps = 2 -> Iconify window. Ps = 3 ; x ; y -> Move window to [x, y]. Ps = 4 ; height ; width -> Resize the xterm window to height and width in pixels. Ps = 5 -> Raise the xterm window to the front of the stack- ing order. Ps = 6 -> Lower the xterm window to the bottom of the stacking order. Ps = 7 -> Refresh the xterm window. Ps = 8 ; height ; width -> Resize the text area to [height;width] in characters. Ps = 9 ; 0 -> Restore maximized window. Ps = 9 ; 1 -> Maximize window (i.e., resize to screen size). Ps = 1 0 ; 0 -> Undo full-screen mode. Ps = 1 0 ; 1 -> Change to full-screen. Ps = 1 1 -> Report xterm window state. If the xterm window is open (non-iconified), it returns CSI 1 t . If the xterm window is iconified, it returns CSI 2 t . Ps = 1 3 -> Report xterm window position. Result is CSI 3 ; x ; y t Ps = 1 4 -> Report xterm window in pixels. Result is CSI 4 ; height ; width t Ps = 1 8 -> Report the size of the text area in characters. Result is CSI 8 ; height ; width t Ps = 1 9 -> Report the size of the screen in characters. Result is CSI 9 ; height ; width t Ps = 2 0 -> Report xterm window's icon label. Result is OSC L label ST Ps = 2 1 -> Report xterm window's title. Result is OSC l label ST Ps = 2 2 ; 0 -> Save xterm icon and window title on stack. Ps = 2 2 ; 1 -> Save xterm icon title on stack. Ps = 2 2 ; 2 -> Save xterm window title on stack. Ps = 2 3 ; 0 -> Restore xterm icon and window title from stack. Ps = 2 3 ; 1 -> Restore xterm icon title from stack. Ps = 2 3 ; 2 -> Restore xterm window title from stack. Ps >= 2 4 -> Resize to Ps lines (DECSLPP). Ps >= 2 4 -> Resize to Ps lines (DECSLPP). ` ```` ` ````Example call: ` ``\` program.manipulateWindow(18, function(err:any, data:any) { program.log('manipulateWindow', data); });

`` ` ``

**Parameters:**

| Name | Type |
| ------ | ------ |
| data1 | `number` |
| data2 | `number` \| `undefined` |
| c | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

*Defined in [blessed.d.ts:1152](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1152)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| data1 | `number` |
| c | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="mc"></a>

###  mc

▸ **mc**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:965](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L965)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="mc0"></a>

###  mc0

▸ **mc0**(): `boolean`

*Defined in [blessed.d.ts:967](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L967)*

**Returns:** `boolean`

___
<a id="mc4"></a>

###  mc4

▸ **mc4**(): `boolean`

*Defined in [blessed.d.ts:975](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L975)*

**Returns:** `boolean`

___
<a id="mc5"></a>

###  mc5

▸ **mc5**(): `boolean`

*Defined in [blessed.d.ts:971](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L971)*

**Returns:** `boolean`

___
<a id="mc5p"></a>

###  mc5p

▸ **mc5p**(): `boolean`

*Defined in [blessed.d.ts:979](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L979)*

**Returns:** `boolean`

___
<a id="mediacopy"></a>

###  mediaCopy

▸ **mediaCopy**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:964](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L964)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="move"></a>

###  move

▸ **move**(x: *`number`*, y: *`number`*): `boolean`

*Defined in [blessed.d.ts:303](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L303)*

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

*Defined in [blessed.d.ts:357](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L357)*

**Returns:** `boolean`

___
<a id="nextline"></a>

###  nextLine

▸ **nextLine**(): `boolean`

*Defined in [blessed.d.ts:367](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L367)*

**Returns:** `boolean`

___
<a id="nl"></a>

###  nl

▸ **nl**(): `boolean`

*Defined in [blessed.d.ts:358](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L358)*

**Returns:** `boolean`

___
<a id="normalbuffer"></a>

###  normalBuffer

▸ **normalBuffer**(): `boolean`

*Defined in [blessed.d.ts:856](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L856)*

**Returns:** `boolean`

___
<a id="nul"></a>

###  nul

▸ **nul**(): `boolean`

*Defined in [blessed.d.ts:333](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L333)*

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

*Defined in [blessed.d.ts:304](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L304)*

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

▸ **on**(e: *"keypress"*, c: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `this`

▸ **on**(event: *"warning"*, callback: *`function`*): `this`

▸ **on**(e: *`string`*, c: *`function`*): `this`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1367](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1367)*

triggered when native events in the host terminal window

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "mouse" |
| c | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1370](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1370)*

triggered when the terminal window is resized.

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "resize" |
| c | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1372](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1372)*

triggered when the terminal window gains focus n the host window manager. For exmmple when the user switchst form another application to the terminal with ctrl-tab. Notice that these are native events, ocurring outside the terminal application.

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "focus" |
| c | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1374](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1374)*

triggered when the terminal window loose focus host window manager. For exmmple when the user switchs from the shell to another form another application . Notice that these are native events, ocurring outside the terminal application.

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "blur" |
| c | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1376](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1376)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "keypress" |
| c | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1379](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1379)*

Received when blessed notices something untoward (output is not a tty, terminfo not found, etc).

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "warning" |
| callback | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1380](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1380)*

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

▸ **onceKey**(key: *`string` \| `string`[]*, l: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `void`

*Defined in [blessed.d.ts:274](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L274)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `string`[] |
| l | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="out"></a>

###  out

▸ **out**(param: *`string`*, ...args: *`any`[]*): `boolean`

*Defined in [blessed.d.ts:1358](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1358)*

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

*Defined in [blessed.d.ts:981](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L981)*

**Returns:** `boolean`

___
<a id="pause"></a>

###  pause

▸ **pause**(callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `Function`

*Defined in [blessed.d.ts:1362](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1362)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `Function`

___
<a id="pf"></a>

###  pf

▸ **pf**(): `boolean`

*Defined in [blessed.d.ts:977](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L977)*

**Returns:** `boolean`

___
<a id="po"></a>

###  po

▸ **po**(): `boolean`

*Defined in [blessed.d.ts:973](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L973)*

**Returns:** `boolean`

___
<a id="pos"></a>

###  pos

▸ **pos**(row?: *`number`*, col?: *`number`*): `boolean`

*Defined in [blessed.d.ts:442](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L442)*

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

*Defined in [blessed.d.ts:298](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L298)*

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

*Defined in [blessed.d.ts:968](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L968)*

**Returns:** `boolean`

___
<a id="prtr_non"></a>

###  prtr_non

▸ **prtr_non**(): `boolean`

*Defined in [blessed.d.ts:980](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L980)*

**Returns:** `boolean`

___
<a id="prtr_off"></a>

###  prtr_off

▸ **prtr_off**(): `boolean`

*Defined in [blessed.d.ts:976](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L976)*

**Returns:** `boolean`

___
<a id="prtr_on"></a>

###  prtr_on

▸ **prtr_on**(): `boolean`

*Defined in [blessed.d.ts:972](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L972)*

**Returns:** `boolean`

___
<a id="ps"></a>

###  ps

▸ **ps**(): `boolean`

*Defined in [blessed.d.ts:969](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L969)*

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

*Defined in [blessed.d.ts:375](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L375)*

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

*Defined in [blessed.d.ts:913](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L913)*

*__see__*: [restoreCursorA](api-classes-blessed-d-blessedprogram.md#restorecursora)

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

▸ **removeKey**(key: *`string` \| `string`[]*, l: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `void`

*Defined in [blessed.d.ts:277](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L277)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `string`[] |
| l | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

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

*Defined in [blessed.d.ts:959](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L959)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="repeat"></a>

###  repeat

▸ **repeat**(ch: *`string`*, i?: *`number`*): `string`

*Defined in [blessed.d.ts:312](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L312)*

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

*Defined in [blessed.d.ts:958](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L958)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="req_mouse_pos"></a>

###  req_mouse_pos

▸ **req_mouse_pos**(param?: *`string`*, callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:1332](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1332)*

*__see__*: [requestLocatorPosition](api-classes-blessed-d-blessedprogram.md#requestlocatorposition)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="reqmp"></a>

###  reqmp

▸ **reqmp**(param?: *`string`*, callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:1330](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1330)*

*__see__*: [requestLocatorPosition](api-classes-blessed-d-blessedprogram.md#requestlocatorposition)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="requestansimode"></a>

###  requestAnsiMode

▸ **requestAnsiMode**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:1007](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1007)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="requestlocatorposition"></a>

###  requestLocatorPosition

▸ **requestLocatorPosition**(param?: *`string`*, callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:1328](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1328)*

`` ` `` CSI Ps ' \| Request Locator Position (DECRQLP). Valid values for the parameter are: Ps = 0 , 1 or omitted -> transmit a single DECLRP locator report.

If Locator Reporting has been enabled by a DECELR, xterm will respond with a DECLRP Locator Report. This report is also generated on button up and down events if they have been enabled with a DECSLE, or when the locator is detected outside of a filter rectangle, if filter rectangles have been enabled with a DECEFR.

\-> CSI Pe ; Pb ; Pr ; Pc ; Pp & w

Parameters are \[event;button;row;column;page\]. Valid values for the event: Pe = 0 -> locator unavailable - no other parameters sent. Pe = 1 -> request - xterm received a DECRQLP. Pe = 2 -> left button down. Pe = 3 -> left button up. Pe = 4 -> middle button down. Pe = 5 -> middle button up. Pe = 6 -> right button down. Pe = 7 -> right button up. Pe = 8 -> M4 button down. Pe = 9 -> M4 button up. Pe = 1 0 -> locator outside filter rectangle. `button'' parameter is a bitmask indicating which buttons are pressed: Pb = 0 <- no buttons down. Pb & 1 <- right button down. Pb & 2 <- middle button down. Pb & 4 <- left button down. Pb & 8 <- M4 button down.`row'' and`column'' parameters are the coordinates of the locator position in the xterm window, encoded as ASCII deci- mal. The`page'' parameter is not used by xterm, and will be omit- ted. `` ` ``

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="requestparameters"></a>

###  requestParameters

▸ **requestParameters**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:1225](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1225)*

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

*Defined in [blessed.d.ts:1010](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1010)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="reset"></a>

###  reset

▸ **reset**(): `boolean`

*Defined in [blessed.d.ts:368](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L368)*

**Returns:** `boolean`

___
<a id="resetcolors"></a>

###  resetColors

▸ **resetColors**(param?: *`string`*): `boolean`

*Defined in [blessed.d.ts:396](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L396)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `string` |

**Returns:** `boolean`

___
<a id="resetcursor"></a>

###  resetCursor

▸ **resetCursor**(): `boolean`

*Defined in [blessed.d.ts:318](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L318)*

**Returns:** `boolean`

___
<a id="resetmode"></a>

###  resetMode

▸ **resetMode**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:844](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L844)*

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

*Defined in [blessed.d.ts:951](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L951)*

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

*Defined in [blessed.d.ts:284](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L284)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| text | `string` |
| callback | `Function` |
| `Optional` noBypass | `boolean` |

**Returns:** `boolean`

*Defined in [blessed.d.ts:285](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L285)*

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

*Defined in [blessed.d.ts:374](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L374)*

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

*Defined in [blessed.d.ts:911](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L911)*

```
CSI u
Restore cursor (ANSI.SYS).
```

**Returns:** `boolean`

___
<a id="restoreprivatevalues"></a>

###  restorePrivateValues

▸ **restorePrivateValues**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1070](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1070)*

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

*Defined in [blessed.d.ts:353](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L353)*

**Returns:** `boolean`

___
<a id="reverse"></a>

###  reverse

▸ **reverse**(): `boolean`

*Defined in [blessed.d.ts:364](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L364)*

**Returns:** `boolean`

___
<a id="reverseattrinrectangle"></a>

###  reverseAttrInRectangle

▸ **reverseAttrInRectangle**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1156](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1156)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="reverseindex"></a>

###  reverseIndex

▸ **reverseIndex**(): `boolean`

*Defined in [blessed.d.ts:363](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L363)*

**Returns:** `boolean`

___
<a id="ri"></a>

###  ri

▸ **ri**(): `boolean`

*Defined in [blessed.d.ts:365](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L365)*

**Returns:** `boolean`

___
<a id="right"></a>

###  right

▸ **right**(n?: *`number`*): `boolean`

*Defined in [blessed.d.ts:421](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L421)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` n | `number` |

**Returns:** `boolean`

___
<a id="rm"></a>

###  rm

▸ **rm**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:846](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L846)*

*__see__*: [resetMode](api-classes-blessed-d-blessedprogram.md#resetmode)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="rmacs"></a>

###  rmacs

▸ **rmacs**(): `boolean`

*Defined in [blessed.d.ts:390](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L390)*

**Returns:** `boolean`

___
<a id="rmcup"></a>

###  rmcup

▸ **rmcup**(): `boolean`

*Defined in [blessed.d.ts:857](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L857)*

**Returns:** `boolean`

___
<a id="rmove"></a>

###  rmove

▸ **rmove**(x: *`number`*, y: *`number`*): `void`

*Defined in [blessed.d.ts:307](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L307)*

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

*Defined in [blessed.d.ts:1004](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1004)*

**Returns:** `boolean`

___
<a id="rsetx"></a>

###  rsetx

▸ **rsetx**(x: *`number`*): `boolean`

*Defined in [blessed.d.ts:305](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L305)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |

**Returns:** `boolean`

___
<a id="rsety"></a>

###  rsety

▸ **rsety**(y: *`number`*): `boolean`

*Defined in [blessed.d.ts:306](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L306)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| y | `number` |

**Returns:** `boolean`

___
<a id="savecursor"></a>

###  saveCursor

▸ **saveCursor**(key: *`string`*): `boolean`

*Defined in [blessed.d.ts:371](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L371)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `boolean`

___
<a id="savecursora"></a>

###  saveCursorA

▸ **saveCursorA**(): `boolean`

*Defined in [blessed.d.ts:901](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L901)*

```
CSI s
Save cursor (ANSI.SYS).
```

**Returns:** `boolean`

___
<a id="saveprivatevalues"></a>

###  savePrivateValues

▸ **savePrivateValues**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1086](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1086)*

Save DEC Private Mode Values. Ps values are the same as for

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="savereportedcursor"></a>

###  saveReportedCursor

▸ **saveReportedCursor**(callback: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `void`

*Defined in [blessed.d.ts:593](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L593)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `void`

___
<a id="sc"></a>

###  sc

▸ **sc**(key: *`string`*): `boolean`

*Defined in [blessed.d.ts:372](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L372)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `boolean`

___
<a id="sca"></a>

###  scA

▸ **scA**(): `boolean`

*Defined in [blessed.d.ts:903](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L903)*

*__see__*: [saveCursorA](api-classes-blessed-d-blessedprogram.md#savecursora)

**Returns:** `boolean`

___
<a id="scrolldown"></a>

###  scrollDown

▸ **scrollDown**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:924](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L924)*

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

*Defined in [blessed.d.ts:920](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L920)*

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

*Defined in [blessed.d.ts:926](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L926)*

*__see__*: [scrollDown](api-classes-blessed-d-blessedprogram.md#scrolldown)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="seldata"></a>

###  selData

▸ **selData**(a: *`string`*, b: *`string`*): `boolean`

*Defined in [blessed.d.ts:404](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L404)*

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

*Defined in [blessed.d.ts:1237](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1237)*

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

*Defined in [blessed.d.ts:1281](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1281)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="senddeviceattributes"></a>

###  sendDeviceAttributes

▸ **sendDeviceAttributes**(param?: *`number`*, callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:637](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L637)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="setattrinrectangle"></a>

###  setAttrInRectangle

▸ **setAttrInRectangle**(Pt: *`number`*, Pl: *`number`*, Pb: *`number`*, Pr: *`number`*, Ps$: *`number`*): `boolean`

*Defined in [blessed.d.ts:1081](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1081)*

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

*Defined in [blessed.d.ts:551](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L551)*

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

*Defined in [blessed.d.ts:1060](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1060)*

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

*Defined in [blessed.d.ts:1013](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1013)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="setcursorstyle"></a>

###  setCursorStyle

▸ **setCursorStyle**(cursor: *`0` \| `1` \| `2` \| `3` \| `4` \| "blinkingblock" \| "block" \| "steady block" \| "blinking underline" \| "underline" \| "steady underline" \| "blinking bar" \| "bar" \| "steady bar"*): `boolean`

*Defined in [blessed.d.ts:1030](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1030)*

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

*Defined in [blessed.d.ts:534](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L534)*

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

*Defined in [blessed.d.ts:392](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L392)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `number` |

**Returns:** `boolean`

___
<a id="setlocatorevents"></a>

###  setLocatorEvents

▸ **setLocatorEvents**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1278](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1278)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="setmarginbellvolume"></a>

###  setMarginBellVolume

▸ **setMarginBellVolume**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:1175](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1175)*

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

▸ **setMode**(args: *`string`*, callback: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:745](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L745)*

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
| callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="setmouse"></a>

###  setMouse

▸ **setMouse**(opt?: *`object`*, enable?: *`boolean`*): `void`

*Defined in [blessed.d.ts:862](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L862)*

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

*Defined in [blessed.d.ts:1001](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1001)*

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

*Defined in [blessed.d.ts:983](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L983)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="setscrollregion"></a>

###  setScrollRegion

▸ **setScrollRegion**(top: *`number`*, bottom: *`number`*): `boolean`

*Defined in [blessed.d.ts:890](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L890)*

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

*Defined in [blessed.d.ts:264](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L264)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| terminal | `string` |

**Returns:** `void`

___
<a id="settitle"></a>

###  setTitle

▸ **setTitle**(title: *`string`*): `boolean`

*Defined in [blessed.d.ts:394](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L394)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| title | `string` |

**Returns:** `boolean`

___
<a id="settitlemodefeature"></a>

###  setTitleModeFeature

▸ **setTitleModeFeature**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1170](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1170)*

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

*Defined in [blessed.d.ts:1172](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1172)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="setupdump"></a>

###  setupDump

▸ **setupDump**(): `void`

*Defined in [blessed.d.ts:262](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L262)*

**Returns:** `void`

___
<a id="setuptput"></a>

###  setupTput

▸ **setupTput**(): `void`

*Defined in [blessed.d.ts:263](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L263)*

**Returns:** `void`

___
<a id="setx"></a>

###  setx

▸ **setx**(x: *`number`*): `boolean`

*Defined in [blessed.d.ts:301](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L301)*

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

*Defined in [blessed.d.ts:302](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L302)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| y | `number` |

**Returns:** `boolean`

___
<a id="shiftin"></a>

###  shiftIn

▸ **shiftIn**(): `boolean`

*Defined in [blessed.d.ts:351](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L351)*

**Returns:** `boolean`

___
<a id="shiftout"></a>

###  shiftOut

▸ **shiftOut**(): `boolean`

*Defined in [blessed.d.ts:350](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L350)*

**Returns:** `boolean`

___
<a id="showcursor"></a>

###  showCursor

▸ **showCursor**(): `boolean`

*Defined in [blessed.d.ts:754](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L754)*

Uses [setMode](api-classes-blessed-d-blessedprogram.md#setmode) 2 5 to show the cursor: NOTE: In xterm terminfo: cnorm stops blinking cursor cvvis starts blinking cursor

**Returns:** `boolean`

___
<a id="sigtstp"></a>

###  sigtstp

▸ **sigtstp**(callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:1360](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1360)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="simpleinsert"></a>

###  simpleInsert

▸ **simpleInsert**(ch: *`string`*, i?: *`number`*, attr?: *`boolean`*): `boolean`

*Defined in [blessed.d.ts:311](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L311)*

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

*Defined in [blessed.d.ts:747](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L747)*

*__see__*: [setMode](api-classes-blessed-d-blessedprogram.md#setmode)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="smacs"></a>

###  smacs

▸ **smacs**(): `boolean`

*Defined in [blessed.d.ts:386](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L386)*

**Returns:** `boolean`

___
<a id="smcup"></a>

###  smcup

▸ **smcup**(): `boolean`

*Defined in [blessed.d.ts:757](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L757)*

**Returns:** `boolean`

___
<a id="softreset"></a>

###  softReset

▸ **softReset**(): `boolean`

*Defined in [blessed.d.ts:1003](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L1003)*

**Returns:** `boolean`

___
<a id="su"></a>

###  su

▸ **su**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:922](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L922)*

*__see__*: [scrollUp](api-classes-blessed-d-blessedprogram.md#scrollup)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="tab"></a>

###  tab

▸ **tab**(): `boolean`

*Defined in [blessed.d.ts:346](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L346)*

**Returns:** `boolean`

___
<a id="tabclear"></a>

###  tabClear

▸ **tabClear**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:961](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L961)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="tabset"></a>

###  tabSet

▸ **tabSet**(): `boolean`

*Defined in [blessed.d.ts:369](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L369)*

**Returns:** `boolean`

___
<a id="tbc"></a>

###  tbc

▸ **tbc**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:962](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L962)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="term"></a>

###  term

▸ **term**(is: *`string`*): `boolean`

*Defined in [blessed.d.ts:268](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L268)*

Queries whether the terminal of the type `is`.

**Parameters:**

| Name | Type |
| ------ | ------ |
| is | `string` |

**Returns:** `boolean`

___
<a id="unkey"></a>

###  unKey

▸ **unKey**(key: *`string` \| `string`[]*, l: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `void`

*Defined in [blessed.d.ts:276](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L276)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `string`[] |
| l | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="up"></a>

###  up

▸ **up**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:408](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L408)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="vi"></a>

###  vi

▸ **vi**(): `boolean`

*Defined in [blessed.d.ts:852](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L852)*

**Returns:** `boolean`

___
<a id="vpa"></a>

###  vpa

▸ **vpa**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:641](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L641)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="vpr"></a>

###  vpr

▸ **vpr**(param?: *`number`*): `boolean`

*Defined in [blessed.d.ts:644](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L644)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `number` |

**Returns:** `boolean`

___
<a id="vtab"></a>

###  vtab

▸ **vtab**(): `boolean`

*Defined in [blessed.d.ts:338](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L338)*

**Returns:** `boolean`

___
<a id="write"></a>

###  write

▸ **write**(text: *`string`*): `boolean`

▸ **write**(text: *`string`*, style: *`string`*): `boolean`

*Defined in [blessed.d.ts:287](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L287)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `boolean`

*Defined in [blessed.d.ts:292](https://github.com/cancerberoSgx/accursed/blob/f66c8ce/src/declarations/blessed.d.ts#L292)*

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

