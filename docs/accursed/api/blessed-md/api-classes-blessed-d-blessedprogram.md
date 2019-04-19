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

*Defined in [blessed.d.ts:252](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L252)*

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

*Defined in [blessed.d.ts:238](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L238)*

___
<a id="gpm"></a>

### `<Optional>` gpm

**● gpm**: *[GpmClient](api-interfaces-blessed-d-gpmclient.md)*

*Defined in [blessed.d.ts:225](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L225)*

*__internal__*: 

___
<a id="input"></a>

###  input

**● input**: *`Readable`*

*Defined in [blessed.d.ts:229](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L229)*

___
<a id="isalt"></a>

###  isAlt

**● isAlt**: *`boolean`*

*Defined in [blessed.d.ts:252](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L252)*

___
<a id="islxde"></a>

###  isLXDE

**● isLXDE**: *`boolean`*

*Defined in [blessed.d.ts:246](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L246)*

___
<a id="isosxterm"></a>

###  isOSXTerm

**● isOSXTerm**: *`boolean`*

*Defined in [blessed.d.ts:242](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L242)*

___
<a id="isrxvt"></a>

###  isRxvt

**● isRxvt**: *`boolean`*

*Defined in [blessed.d.ts:248](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L248)*

___
<a id="isterminator"></a>

###  isTerminator

**● isTerminator**: *`boolean`*

*Defined in [blessed.d.ts:245](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L245)*

___
<a id="isvte"></a>

###  isVTE

**● isVTE**: *`boolean`*

*Defined in [blessed.d.ts:247](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L247)*

___
<a id="isxfce"></a>

###  isXFCE

**● isXFCE**: *`boolean`*

*Defined in [blessed.d.ts:244](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L244)*

___
<a id="isxterm"></a>

###  isXterm

**● isXterm**: *`boolean`*

*Defined in [blessed.d.ts:249](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L249)*

___
<a id="isiterm2"></a>

###  isiTerm2

**● isiTerm2**: *`boolean`*

*Defined in [blessed.d.ts:243](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L243)*

___
<a id="options"></a>

###  options

**● options**: *[IBlessedProgramOptions](api-interfaces-blessed-d-iblessedprogramoptions.md)*

*Defined in [blessed.d.ts:228](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L228)*

___
<a id="output"></a>

###  output

**● output**: *`Writable`*

*Defined in [blessed.d.ts:230](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L230)*

___
<a id="restorereportedcursor"></a>

###  restoreReportedCursor

**● restoreReportedCursor**: *`function`*

*Defined in [blessed.d.ts:584](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L584)*

#### Type declaration
▸(): `boolean`

**Returns:** `boolean`

___
<a id="resume"></a>

###  resume

**● resume**: *`function`*

*Defined in [blessed.d.ts:1346](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1346)*

#### Type declaration
▸(): `void`

**Returns:** `void`

___
<a id="rows"></a>

###  rows

**● rows**: *`number`*

*Defined in [blessed.d.ts:239](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L239)*

___
<a id="savedx"></a>

###  savedX

**● savedX**: *`number`*

*Defined in [blessed.d.ts:236](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L236)*

___
<a id="savedy"></a>

###  savedY

**● savedY**: *`number`*

*Defined in [blessed.d.ts:237](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L237)*

___
<a id="scrollbottom"></a>

###  scrollBottom

**● scrollBottom**: *`number`*

*Defined in [blessed.d.ts:241](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L241)*

___
<a id="scrolltop"></a>

###  scrollTop

**● scrollTop**: *`number`*

*Defined in [blessed.d.ts:240](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L240)*

___
<a id="tmux"></a>

###  tmux

**● tmux**: *`boolean`*

*Defined in [blessed.d.ts:250](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L250)*

___
<a id="tmuxversion"></a>

###  tmuxVersion

**● tmuxVersion**: *`number`*

*Defined in [blessed.d.ts:251](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L251)*

___
<a id="type"></a>

###  type

**● type**: *`string`*

*Defined in [blessed.d.ts:227](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L227)*

___
<a id="usebuffer"></a>

###  useBuffer

**● useBuffer**: *`boolean`*

*Defined in [blessed.d.ts:233](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L233)*

___
<a id="x"></a>

###  x

**● x**: *`number`*

*Defined in [blessed.d.ts:234](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L234)*

___
<a id="y"></a>

###  y

**● y**: *`number`*

*Defined in [blessed.d.ts:235](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L235)*

___
<a id="zero"></a>

###  zero

**● zero**: *`boolean`*

*Defined in [blessed.d.ts:232](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L232)*

zero-based indexes for col, row values

___
<a id="defaultmaxlisteners"></a>

### `<Static>` defaultMaxListeners

**● defaultMaxListeners**: *`number`*

*Inherited from EventEmitter.defaultMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:8*

___
<a id="instances"></a>

### `<Static>` instances

**● instances**: *[BlessedProgram](api-classes-blessed-d-blessedprogram.md)[]*

*Defined in [blessed.d.ts:223](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L223)*

*__internal__*: 

___

## Methods

<a id="hpositionrelative"></a>

###  HPositionRelative

▸ **HPositionRelative**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:623](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L623)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="hvposition"></a>

###  HVPosition

▸ **HVPosition**(row?: *`undefined` \| `number`*, col?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:634](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L634)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` row | `undefined` \| `number` |
| `Optional` col | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="vpositionrelative"></a>

###  VPositionRelative

▸ **VPositionRelative**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:631](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L631)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="_ncoords"></a>

###  _ncoords

▸ **_ncoords**(): `void`

*Defined in [blessed.d.ts:345](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L345)*

*__internal__*: 

**Returns:** `void`

___
<a id="addlistener"></a>

###  addListener

▸ **addListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.addListener*

*Overrides EventEmitter.addListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:10*

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

*Defined in [blessed.d.ts:385](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L385)*

**Returns:** `boolean`

___
<a id="alternate"></a>

###  alternate

▸ **alternate**(): `boolean`

*Defined in [blessed.d.ts:746](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L746)*

**Returns:** `boolean`

___
<a id="alternatebuffer"></a>

###  alternateBuffer

▸ **alternateBuffer**(): `boolean`

*Defined in [blessed.d.ts:744](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L744)*

**Returns:** `boolean`

___
<a id="as"></a>

###  as

▸ **as**(): `boolean`

*Defined in [blessed.d.ts:381](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L381)*

**Returns:** `boolean`

___
<a id="back"></a>

###  back

▸ **back**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:418](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L418)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="backspace"></a>

###  backspace

▸ **backspace**(): `boolean`

*Defined in [blessed.d.ts:339](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L339)*

**Returns:** `boolean`

___
<a id="bel"></a>

###  bel

▸ **bel**(): `boolean`

*Defined in [blessed.d.ts:332](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L332)*

**Returns:** `boolean`

___
<a id="bell"></a>

###  bell

▸ **bell**(): `boolean`

*Defined in [blessed.d.ts:331](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L331)*

**Returns:** `boolean`

___
<a id="bg"></a>

###  bg

▸ **bg**(color: *`string`*, val?: *`undefined` \| `string`*): `boolean`

*Defined in [blessed.d.ts:542](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L542)*

*__see__*: setBackground

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |
| `Optional` val | `undefined` \| `string` |

**Returns:** `boolean`

___
<a id="bindmouse"></a>

###  bindMouse

▸ **bindMouse**(): `void`

*Defined in [blessed.d.ts:275](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L275)*

**Returns:** `void`

___
<a id="bindresponse"></a>

###  bindResponse

▸ **bindResponse**(): `void`

*Defined in [blessed.d.ts:278](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L278)*

**Returns:** `void`

___
<a id="cbt"></a>

###  cbt

▸ **cbt**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:939](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L939)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cha"></a>

###  cha

▸ **cha**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:606](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L606)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="charattributes"></a>

###  charAttributes

▸ **charAttributes**(param: *`string`*, val?: *`undefined` \| `string`*): `boolean`

▸ **charAttributes**(param: *`string`[]*, val?: *`undefined` \| `string`*): `boolean`

*Defined in [blessed.d.ts:507](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L507)*

CSI Pm m Character Attributes (SGR). Ps = 0 -> Normal (default). Ps = 1 -> Bold. Ps = 4 -> Underlined. Ps = 5 -> Blink (appears as Bold). Ps = 7 -> Inverse. Ps = 8 -> Invisible, i.e., hidden (VT300). Ps = 2 2 -> Normal (neither bold nor faint). Ps = 2 4 -> Not underlined. Ps = 2 5 -> Steady (not blinking). Ps = 2 7 -> Positive (not inverse). Ps = 2 8 -> Visible, i.e., not hidden (VT300). Ps = 3 0 -> Set foreground color to Black. Ps = 3 1 -> Set foreground color to Red. Ps = 3 2 -> Set foreground color to Green. Ps = 3 3 -> Set foreground color to Yellow. Ps = 3 4 -> Set foreground color to Blue. Ps = 3 5 -> Set foreground color to Magenta. Ps = 3 6 -> Set foreground color to Cyan. Ps = 3 7 -> Set foreground color to White. Ps = 3 9 -> Set foreground color to default (original). Ps = 4 0 -> Set background color to Black. Ps = 4 1 -> Set background color to Red. Ps = 4 2 -> Set background color to Green. Ps = 4 3 -> Set background color to Yellow. Ps = 4 4 -> Set background color to Blue. Ps = 4 5 -> Set background color to Magenta. Ps = 4 6 -> Set background color to Cyan. Ps = 4 7 -> Set background color to White. Ps = 4 9 -> Set background color to default (original).

If 16-color support is compiled, the following apply. Assume that xterm's resources are set so that the ISO color codes are the first 8 of a set of 16. Then the aixterm colors are the bright versions of the ISO colors: Ps = 9 0 -> Set foreground color to Black. Ps = 9 1 -> Set foreground color to Red. Ps = 9 2 -> Set foreground color to Green. Ps = 9 3 -> Set foreground color to Yellow. Ps = 9 4 -> Set foreground color to Blue. Ps = 9 5 -> Set foreground color to Magenta. Ps = 9 6 -> Set foreground color to Cyan. Ps = 9 7 -> Set foreground color to White. Ps = 1 0 0 -> Set background color to Black. Ps = 1 0 1 -> Set background color to Red. Ps = 1 0 2 -> Set background color to Green. Ps = 1 0 3 -> Set background color to Yellow. Ps = 1 0 4 -> Set background color to Blue. Ps = 1 0 5 -> Set background color to Magenta. Ps = 1 0 6 -> Set background color to Cyan. Ps = 1 0 7 -> Set background color to White.

If xterm is compiled with the 16-color support disabled, it supports the following, from rxvt: Ps = 1 0 0 -> Set foreground and background color to default.

If 88- or 256-color support is compiled, the following apply. Ps = 3 8 ; 5 ; Ps -> Set foreground color to the second Ps. Ps = 4 8 ; 5 ; Ps -> Set background color to the second Ps.

**Parameters:**

| Name | Type |
| ------ | ------ |
| param | `string` |
| `Optional` val | `undefined` \| `string` |

**Returns:** `boolean`

*Defined in [blessed.d.ts:508](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L508)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| param | `string`[] |
| `Optional` val | `undefined` \| `string` |

**Returns:** `boolean`

___
<a id="charposabsolute"></a>

###  charPosAbsolute

▸ **charPosAbsolute**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:620](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L620)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="charset"></a>

###  charset

▸ **charset**(val?: *`undefined` \| `string`*, level?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:378](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L378)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` val | `undefined` \| `string` |
| `Optional` level | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cht"></a>

###  cht

▸ **cht**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:902](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L902)*

*__see__*: cursorForwardTab

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="civis"></a>

###  civis

▸ **civis**(): `boolean`

*Defined in [blessed.d.ts:839](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L839)*

**Returns:** `boolean`

___
<a id="clear"></a>

###  clear

▸ **clear**(): `boolean`

*Defined in [blessed.d.ts:438](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L438)*

**Returns:** `boolean`

___
<a id="cnl"></a>

###  cnl

▸ **cnl**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:600](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L600)*

*__cursornextline__*: 

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="copyrectangle"></a>

###  copyRectangle

▸ **copyRectangle**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1169](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1169)*

```
CSI Pt; Pl; Pb; Pr; Pp; Pt; Pl; Pp$ v
Copy Rectangular Area (DECCRA, VT400 and up).
Pt; Pl; Pb; Pr denotes the rectangle.
Pp denotes the source page.
Pt; Pl denotes the target location.
Pp denotes the target page.
NOTE: xterm doesn't enable this code by default.
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="copytoclipboard"></a>

###  copyToClipboard

▸ **copyToClipboard**(text: *`string`*): `boolean`

*Defined in [blessed.d.ts:309](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L309)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `boolean`

___
<a id="cpl"></a>

###  cpl

▸ **cpl**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:603](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L603)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cr"></a>

###  cr

▸ **cr**(): `boolean`

*Defined in [blessed.d.ts:350](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L350)*

**Returns:** `boolean`

___
<a id="csr"></a>

###  csr

▸ **csr**(top: *`number`*, bottom: *`number`*): `boolean`

*Defined in [blessed.d.ts:880](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L880)*

*__see__*: setScrollRegion

**Parameters:**

| Name | Type |
| ------ | ------ |
| top | `number` |
| bottom | `number` |

**Returns:** `boolean`

___
<a id="cub"></a>

###  cub

▸ **cub**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:416](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L416)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cud"></a>

###  cud

▸ **cud**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:407](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L407)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cuf"></a>

###  cuf

▸ **cuf**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:411](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L411)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cup"></a>

###  cup

▸ **cup**(row?: *`undefined` \| `number`*, col?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:428](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L428)*

CSI Ps ; Ps H Cursor Position \[ row;column \] (default = \[ 1,1 \]) (CUP).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` row | `undefined` \| `number` |
| `Optional` col | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cursorbackward"></a>

###  cursorBackward

▸ **cursorBackward**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:415](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L415)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cursorbackwardtab"></a>

###  cursorBackwardTab

▸ **cursorBackwardTab**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:937](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L937)*

CSI Ps Z Cursor Backward Tabulation Ps tab stops (default = 1) (CBT).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cursorcharabsolute"></a>

###  cursorCharAbsolute

▸ **cursorCharAbsolute**(x: *`number`*): `number`

▸ **cursorCharAbsolute**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:305](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L305)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |

**Returns:** `number`

*Defined in [blessed.d.ts:605](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L605)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cursorcolor"></a>

###  cursorColor

▸ **cursorColor**(color: *`string`*): `boolean`

*Defined in [blessed.d.ts:312](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L312)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |

**Returns:** `boolean`

___
<a id="cursordown"></a>

###  cursorDown

▸ **cursorDown**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:406](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L406)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cursorforward"></a>

###  cursorForward

▸ **cursorForward**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:410](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L410)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cursorforwardtab"></a>

###  cursorForwardTab

▸ **cursorForwardTab**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:900](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L900)*

Cursor Forward Tabulation Ps tab stops (default = 1) (CHT).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cursornextline"></a>

###  cursorNextLine

▸ **cursorNextLine**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:598](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L598)*

CSI Ps E Cursor Next Line Ps Times (default = 1) (CNL). same as CSI Ps B 

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cursorpos"></a>

###  cursorPos

▸ **cursorPos**(row?: *`undefined` \| `number`*, col?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:423](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L423)*

CSI Ps ; Ps H Cursor Position \[ row;column \] (default = \[ 1,1 \]) (CUP).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` row | `undefined` \| `number` |
| `Optional` col | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cursorprecedingline"></a>

###  cursorPrecedingLine

▸ **cursorPrecedingLine**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:602](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L602)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cursorreset"></a>

###  cursorReset

▸ **cursorReset**(): `boolean`

*Defined in [blessed.d.ts:313](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L313)*

**Returns:** `boolean`

___
<a id="cursorshape"></a>

###  cursorShape

▸ **cursorShape**(shape: *"block" \| "underline" \| "line"*, blink?: *`undefined` \| `false` \| `true`*): `boolean`

*Defined in [blessed.d.ts:311](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L311)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| shape | "block" \| "underline" \| "line" |
| `Optional` blink | `undefined` \| `false` \| `true` |

**Returns:** `boolean`

___
<a id="cursorup"></a>

###  cursorUp

▸ **cursorUp**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:402](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L402)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="cursor_invisible"></a>

###  cursor_invisible

▸ **cursor_invisible**(): `boolean`

*Defined in [blessed.d.ts:841](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L841)*

**Returns:** `boolean`

___
<a id="cuu"></a>

###  cuu

▸ **cuu**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:403](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L403)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="da"></a>

###  da

▸ **da**(param?: *`undefined` \| `number`*, callback?: *`Function`*): `boolean`

*Defined in [blessed.d.ts:626](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L626)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |
| `Optional` callback | `Function` |

**Returns:** `boolean`

___
<a id="dch"></a>

###  dch

▸ **dch**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:615](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L615)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="debug"></a>

###  debug

▸ **debug**(s: *`string`*): `boolean`

*Defined in [blessed.d.ts:257](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L257)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| s | `string` |

**Returns:** `boolean`

___
<a id="deccara"></a>

###  deccara

▸ **deccara**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1066](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1066)*

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

*Defined in [blessed.d.ts:1171](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1171)*

*__see__*: copyRectangle

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decdc"></a>

###  decdc

▸ **decdc**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1338](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1338)*

*__see__*: deleteColumns

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decefr"></a>

###  decefr

▸ **decefr**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1190](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1190)*

*__see__*: enableFilterRectangle

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decelr"></a>

###  decelr

▸ **decelr**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1255](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1255)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decera"></a>

###  decera

▸ **decera**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1258](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1258)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decfra"></a>

###  decfra

▸ **decfra**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1235](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1235)*

*__see__*: fillRectangle

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decic"></a>

###  decic

▸ **decic**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1327](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1327)*

*__see__*: insertColumns

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decll"></a>

###  decll

▸ **decll**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:1000](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1000)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="decrara"></a>

###  decrara

▸ **decrara**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1140](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1140)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decreqtparm"></a>

###  decreqtparm

▸ **decreqtparm**(param: *`number`*): `boolean`

*Defined in [blessed.d.ts:1209](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1209)*

*__see__*: requestParameters

**Parameters:**

| Name | Type |
| ------ | ------ |
| param | `number` |

**Returns:** `boolean`

___
<a id="decrqlp"></a>

###  decrqlp

▸ **decrqlp**(param?: *`undefined` \| `string`*, callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:1316](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1316)*

*__see__*: requestLocatorPosition

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `string` |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="decrqm"></a>

###  decrqm

▸ **decrqm**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:991](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L991)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="decrqmp"></a>

###  decrqmp

▸ **decrqmp**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:994](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L994)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="decrst"></a>

###  decrst

▸ **decrst**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:836](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L836)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decsace"></a>

###  decsace

▸ **decsace**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:1221](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1221)*

*__see__*: selectChangeExtent

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="decsca"></a>

###  decsca

▸ **decsca**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:1045](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1045)*

*__see__*: [setCharProtectionAttr](api-classes-blessed-d-blessedprogram.md#setcharprotectionattr)

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="decscl"></a>

###  decscl

▸ **decscl**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:997](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L997)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decscursr"></a>

###  decscursr

▸ **decscursr**(cursor: *`number`*): `boolean`

*Defined in [blessed.d.ts:1031](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1031)*

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

*Defined in [blessed.d.ts:1264](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1264)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decset"></a>

###  decset

▸ **decset**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:737](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L737)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decsle"></a>

###  decsle

▸ **decsle**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1261](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1261)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="decstbm"></a>

###  decstbm

▸ **decstbm**(top: *`number`*, bottom: *`number`*): `boolean`

*Defined in [blessed.d.ts:882](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L882)*

*__see__*: setScrollRegion

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

*Defined in [blessed.d.ts:988](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L988)*

**Returns:** `boolean`

___
<a id="decswbv"></a>

###  decswbv

▸ **decswbv**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:1155](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1155)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="dectcemh"></a>

###  dectcemh

▸ **dectcemh**(): `boolean`

*Defined in [blessed.d.ts:842](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L842)*

**Returns:** `boolean`

___
<a id="deletechars"></a>

###  deleteChars

▸ **deleteChars**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:614](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L614)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="deletecolumns"></a>

###  deleteColumns

▸ **deleteColumns**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1336](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1336)*

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

▸ **deleteLines**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:611](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L611)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="destroy"></a>

###  destroy

▸ **destroy**(): `void`

*Defined in [blessed.d.ts:267](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L267)*

**Returns:** `void`

___
<a id="devicestatus"></a>

###  deviceStatus

▸ **deviceStatus**(param?: *`undefined` \| `string`*, callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*, dec?: *`undefined` \| `false` \| `true`*, noBypass?: *`undefined` \| `false` \| `true`*): `boolean`

*Defined in [blessed.d.ts:569](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L569)*

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
| `Optional` param | `undefined` \| `string` |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |
| `Optional` dec | `undefined` \| `false` \| `true` |
| `Optional` noBypass | `undefined` \| `false` \| `true` |

**Returns:** `boolean`

___
<a id="disablegpm"></a>

###  disableGpm

▸ **disableGpm**(): `void`

*Defined in [blessed.d.ts:277](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L277)*

**Returns:** `void`

___
<a id="disablemodifieres"></a>

###  disableModifieres

▸ **disableModifieres**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:968](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L968)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="disablemouse"></a>

###  disableMouse

▸ **disableMouse**(): `void`

*Defined in [blessed.d.ts:848](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L848)*

**Returns:** `void`

___
<a id="dl"></a>

###  dl

▸ **dl**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:612](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L612)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="down"></a>

###  down

▸ **down**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:408](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L408)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="dsr"></a>

###  dsr

▸ **dsr**(param?: *`undefined` \| `string`*, callback?: *`Function`*, dec?: *`undefined` \| `false` \| `true`*, noBypass?: *`undefined` \| `false` \| `true`*): `boolean`

*Defined in [blessed.d.ts:571](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L571)*

*__see__*: deviceStatus

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `string` |
| `Optional` callback | `Function` |
| `Optional` dec | `undefined` \| `false` \| `true` |
| `Optional` noBypass | `undefined` \| `false` \| `true` |

**Returns:** `boolean`

___
<a id="dynamiccolors"></a>

###  dynamicColors

▸ **dynamicColors**(param?: *`undefined` \| `string`*): `boolean`

*Defined in [blessed.d.ts:399](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L399)*

OSC Ps ; Pt ST OSC Ps ; Pt BEL Change dynamic colors

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `string` |

**Returns:** `boolean`

___
<a id="ech"></a>

###  ech

▸ **ech**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:618](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L618)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="echo"></a>

###  echo

▸ **echo**(text: *`string`*, attr?: *`undefined` \| `false` \| `true`*): `boolean`

*Defined in [blessed.d.ts:295](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L295)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| `Optional` attr | `undefined` \| `false` \| `true` |

**Returns:** `boolean`

___
<a id="ed"></a>

###  ed

▸ **ed**(param?: *`undefined` \| `string`*): `boolean`

*Defined in [blessed.d.ts:436](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L436)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `string` |

**Returns:** `boolean`

___
<a id="el"></a>

###  el

▸ **el**(param?: *`undefined` \| `string`*): `boolean`

*Defined in [blessed.d.ts:441](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L441)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `string` |

**Returns:** `boolean`

___
<a id="emit"></a>

###  emit

▸ **emit**(event: *`string` \| `symbol`*, ...args: *`any`[]*): `boolean`

*Inherited from EventEmitter.emit*

*Overrides EventEmitter.emit*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:22*

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

*Defined in [blessed.d.ts:1188](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1188)*

```
CSI Pt ; Pl ; Pb ; Pr ' w
Enable Filter Rectangle (DECEFR), VT420 and up.
Parameters are [top;left;bottom;right].
Defines the coordinates of a filter rectangle and activates
it.  Anytime the locator is detected outside of the filter
rectangle, an outside rectangle event is generated and the
rectangle is disabled.  Filter rectangles are always treated
as "one-shot" events.  Any parameters that are omitted default
to the current locator position.  If all parameters are omit-
ted, any locator motion will be reported.  DECELR always can-
cels any prevous rectangle definition.
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="enablegpm"></a>

###  enableGpm

▸ **enableGpm**(): `void`

*Defined in [blessed.d.ts:276](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L276)*

**Returns:** `void`

___
<a id="enablelocatorreporting"></a>

###  enableLocatorReporting

▸ **enableLocatorReporting**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1254](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1254)*

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

*Defined in [blessed.d.ts:847](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L847)*

**Returns:** `void`

___
<a id="enter_alt_charset_mode"></a>

###  enter_alt_charset_mode

▸ **enter_alt_charset_mode**(): `boolean`

*Defined in [blessed.d.ts:380](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L380)*

**Returns:** `boolean`

___
<a id="erasechars"></a>

###  eraseChars

▸ **eraseChars**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:617](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L617)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="eraseindisplay"></a>

###  eraseInDisplay

▸ **eraseInDisplay**(param?: *`undefined` \| `string`*): `boolean`

*Defined in [blessed.d.ts:435](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L435)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `string` |

**Returns:** `boolean`

___
<a id="eraseinline"></a>

###  eraseInLine

▸ **eraseInLine**(param?: *`undefined` \| `string`*): `boolean`

*Defined in [blessed.d.ts:440](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L440)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `string` |

**Returns:** `boolean`

___
<a id="eraserectangle"></a>

###  eraseRectangle

▸ **eraseRectangle**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1257](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1257)*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:23*

**Returns:** `Array`<`string` \| `symbol`>

___
<a id="exit_alt_charset_mode"></a>

###  exit_alt_charset_mode

▸ **exit_alt_charset_mode**(): `boolean`

*Defined in [blessed.d.ts:384](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L384)*

**Returns:** `boolean`

___
<a id="feed"></a>

###  feed

▸ **feed**(): `boolean`

*Defined in [blessed.d.ts:352](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L352)*

**Returns:** `boolean`

___
<a id="ff"></a>

###  ff

▸ **ff**(): `boolean`

*Defined in [blessed.d.ts:337](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L337)*

**Returns:** `boolean`

___
<a id="fg"></a>

###  fg

▸ **fg**(color: *`string`*, val?: *`undefined` \| `false` \| `true`*): `string`

*Defined in [blessed.d.ts:525](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L525)*

*__see__*: setForeground

**Parameters:**

| Name | Type |
| ------ | ------ |
| color | `string` |
| `Optional` val | `undefined` \| `false` \| `true` |

**Returns:** `string`

___
<a id="fillrectangle"></a>

###  fillRectangle

▸ **fillRectangle**(Pc: *`string`*, Pt: *`number`*, pl: *`number`*, pb: *`number`*, pr: *`number`*): `boolean`

*Defined in [blessed.d.ts:1232](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1232)*

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

*Defined in [blessed.d.ts:292](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L292)*

```
Flushes the buffer.
```

**Returns:** `void`

___
<a id="form"></a>

###  form

▸ **form**(): `boolean`

*Defined in [blessed.d.ts:336](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L336)*

**Returns:** `boolean`

___
<a id="forward"></a>

###  forward

▸ **forward**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:413](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L413)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="getcursor"></a>

###  getCursor

▸ **getCursor**(callback: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:581](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L581)*

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

*Defined in [blessed.d.ts:327](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L327)*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:19*

**Returns:** `number`

___
<a id="gettextparams"></a>

###  getTextParams

▸ **getTextParams**(param: *`string`*, callback: *`Function`*): `boolean`

*Defined in [blessed.d.ts:316](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L316)*

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

*Defined in [blessed.d.ts:1137](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1137)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="has"></a>

###  has

▸ **has**(name: *`string`*): `boolean`

*Defined in [blessed.d.ts:262](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L262)*

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

*Defined in [blessed.d.ts:838](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L838)*

**Returns:** `boolean`

___
<a id="hpa"></a>

###  hpa

▸ **hpa**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:621](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L621)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="ht"></a>

###  ht

▸ **ht**(): `boolean`

*Defined in [blessed.d.ts:343](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L343)*

**Returns:** `boolean`

___
<a id="hvp"></a>

###  hvp

▸ **hvp**(row?: *`undefined` \| `number`*, col?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:635](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L635)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` row | `undefined` \| `number` |
| `Optional` col | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="ich"></a>

###  ich

▸ **ich**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:590](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L590)*

*__see__*: insertChars

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="il"></a>

###  il

▸ **il**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:609](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L609)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="ind"></a>

###  ind

▸ **ind**(): `boolean`

*Defined in [blessed.d.ts:357](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L357)*

**Returns:** `boolean`

___
<a id="index"></a>

###  index

▸ **index**(): `boolean`

*Defined in [blessed.d.ts:356](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L356)*

**Returns:** `boolean`

___
<a id="initmousetracking"></a>

###  initMouseTracking

▸ **initMouseTracking**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:919](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L919)*

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

▸ **insertChars**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:588](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L588)*

CSI Ps @ Insert Ps (Blank) Character(s) (default = 1) (ICH).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="insertcolumns"></a>

###  insertColumns

▸ **insertColumns**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1325](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1325)*

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

▸ **insertLines**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:608](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L608)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="kbs"></a>

###  kbs

▸ **kbs**(): `boolean`

*Defined in [blessed.d.ts:340](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L340)*

**Returns:** `boolean`

___
<a id="key"></a>

###  key

▸ **key**(key: *`string` \| `string`[]*, l: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `void`

*Defined in [blessed.d.ts:269](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L269)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `string`[] |
| l | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="left"></a>

###  left

▸ **left**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:417](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L417)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="lineheight"></a>

###  lineHeight

▸ **lineHeight**(): `boolean`

*Defined in [blessed.d.ts:376](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L376)*

**Returns:** `boolean`

___
<a id="lineposabsolute"></a>

###  linePosAbsolute

▸ **linePosAbsolute**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:628](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L628)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="listen"></a>

###  listen

▸ **listen**(): `void`

*Defined in [blessed.d.ts:266](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L266)*

**Returns:** `void`

___
<a id="listenercount"></a>

###  listenerCount

▸ **listenerCount**(type: *`string` \| `symbol`*): `number`

*Inherited from EventEmitter.listenerCount*

*Overrides EventEmitter.listenerCount*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:24*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:20*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="loadleds"></a>

###  loadLEDs

▸ **loadLEDs**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:999](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L999)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="log"></a>

###  log

▸ **log**(...args: *`any`[]*): `boolean`

*Defined in [blessed.d.ts:256](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L256)*

writes arguments to [log](api-classes-blessed-d-blessedprogram.md#log) file passed in options

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `any`[] |

**Returns:** `boolean`

___
<a id="lrestorecursor"></a>

###  lrestoreCursor

▸ **lrestoreCursor**(key?: *`undefined` \| `string`*, hide?: *`undefined` \| `false` \| `true`*): `void`

*Defined in [blessed.d.ts:374](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L374)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` key | `undefined` \| `string` |
| `Optional` hide | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="lsavecursor"></a>

###  lsaveCursor

▸ **lsaveCursor**(key?: *`undefined` \| `string`*): `void`

*Defined in [blessed.d.ts:373](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L373)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` key | `undefined` \| `string` |

**Returns:** `void`

___
<a id="manipulatewindow"></a>

###  manipulateWindow

▸ **manipulateWindow**(data1: *`number`*, data2: *`number` \| `undefined`*, c: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

▸ **manipulateWindow**(data1: *`number`*, c: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:1133](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1133)*

```
CSI Ps ; Ps ; Ps t
Window manipulation (from dtterm, as well as extensions).
These controls may be disabled using the allowWindowOps
resource.  Valid values for the first (and any additional
parameters) are:
```

Ps = 1 -> De-iconify window. Ps = 2 -> Iconify window. Ps = 3 ; x ; y -> Move window to \[x, y\]. Ps = 4 ; height ; width -> Resize the xterm window to height and width in pixels. Ps = 5 -> Raise the xterm window to the front of the stack- ing order. Ps = 6 -> Lower the xterm window to the bottom of the stacking order. Ps = 7 -> Refresh the xterm window. Ps = 8 ; height ; width -> Resize the text area to \[height;width\] in characters. Ps = 9 ; 0 -> Restore maximized window. Ps = 9 ; 1 -> Maximize window (i.e., resize to screen size). Ps = 1 0 ; 0 -> Undo full-screen mode. Ps = 1 0 ; 1 -> Change to full-screen. Ps = 1 1 -> Report xterm window state. If the xterm window is open (non-iconified), it returns CSI 1 t . If the xterm window is iconified, it returns CSI 2 t . Ps = 1 3 -> Report xterm window position. Result is CSI 3 ; x ; y t Ps = 1 4 -> Report xterm window in pixels. Result is CSI 4 ; height ; width t Ps = 1 8 -> Report the size of the text area in characters. Result is CSI 8 ; height ; width t Ps = 1 9 -> Report the size of the screen in characters. Result is CSI 9 ; height ; width t Ps = 2 0 -> Report xterm window's icon label. Result is OSC L label ST Ps = 2 1 -> Report xterm window's title. Result is OSC l label ST Ps = 2 2 ; 0 -> Save xterm icon and window title on stack. Ps = 2 2 ; 1 -> Save xterm icon title on stack. Ps = 2 2 ; 2 -> Save xterm window title on stack. Ps = 2 3 ; 0 -> Restore xterm icon and window title from stack. Ps = 2 3 ; 1 -> Restore xterm icon title from stack. Ps = 2 3 ; 2 -> Restore xterm window title from stack. Ps >= 2 4 -> Resize to Ps lines (DECSLPP). Ps >= 2 4 -> Resize to Ps lines (DECSLPP).

Example call: `` ` `` program.manipulateWindow(18, function(err:any, data:any) { program.log('manipulateWindow', data); });

`` ` ``

**Parameters:**

| Name | Type |
| ------ | ------ |
| data1 | `number` |
| data2 | `number` \| `undefined` |
| c | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

*Defined in [blessed.d.ts:1135](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1135)*

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

*Defined in [blessed.d.ts:948](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L948)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="mc0"></a>

###  mc0

▸ **mc0**(): `boolean`

*Defined in [blessed.d.ts:950](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L950)*

**Returns:** `boolean`

___
<a id="mc4"></a>

###  mc4

▸ **mc4**(): `boolean`

*Defined in [blessed.d.ts:958](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L958)*

**Returns:** `boolean`

___
<a id="mc5"></a>

###  mc5

▸ **mc5**(): `boolean`

*Defined in [blessed.d.ts:954](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L954)*

**Returns:** `boolean`

___
<a id="mc5p"></a>

###  mc5p

▸ **mc5p**(): `boolean`

*Defined in [blessed.d.ts:962](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L962)*

**Returns:** `boolean`

___
<a id="mediacopy"></a>

###  mediaCopy

▸ **mediaCopy**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:947](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L947)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="move"></a>

###  move

▸ **move**(x: *`number`*, y: *`number`*): `boolean`

*Defined in [blessed.d.ts:299](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L299)*

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

*Defined in [blessed.d.ts:353](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L353)*

**Returns:** `boolean`

___
<a id="nextline"></a>

###  nextLine

▸ **nextLine**(): `boolean`

*Defined in [blessed.d.ts:363](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L363)*

**Returns:** `boolean`

___
<a id="nl"></a>

###  nl

▸ **nl**(): `boolean`

*Defined in [blessed.d.ts:354](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L354)*

**Returns:** `boolean`

___
<a id="normalbuffer"></a>

###  normalBuffer

▸ **normalBuffer**(): `boolean`

*Defined in [blessed.d.ts:844](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L844)*

**Returns:** `boolean`

___
<a id="nul"></a>

###  nul

▸ **nul**(): `boolean`

*Defined in [blessed.d.ts:329](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L329)*

**Returns:** `boolean`

___
<a id="off"></a>

###  off

▸ **off**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.off*

*Overrides EventEmitter.off*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:16*

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

*Defined in [blessed.d.ts:300](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L300)*

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

*Defined in [blessed.d.ts:1349](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1349)*

triggered when native events in the host terminal window

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "mouse" |
| c | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1352](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1352)*

triggered when the terminal window is resized.

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "resize" |
| c | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1354](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1354)*

triggered when the terminal window gains focus n the host window manager. For exmmple when the user switchst form another application to the terminal with ctrl-tab. Notice that these are native events, ocurring outside the terminal application.

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "focus" |
| c | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1356](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1356)*

triggered when the terminal window loose focus host window manager. For exmmple when the user switchs from the shell to another form another application . Notice that these are native events, ocurring outside the terminal application.

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "blur" |
| c | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1358](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1358)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| e | "keypress" |
| c | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1361](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1361)*

Received when blessed notices something untoward (output is not a tty, terminfo not found, etc).

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | "warning" |
| callback | `function` |

**Returns:** `this`

*Overrides EventEmitter.on*

*Defined in [blessed.d.ts:1362](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1362)*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:12*

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

*Defined in [blessed.d.ts:270](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L270)*

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

*Defined in [blessed.d.ts:1340](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1340)*

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

*Defined in [blessed.d.ts:964](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L964)*

**Returns:** `boolean`

___
<a id="pause"></a>

###  pause

▸ **pause**(callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `Function`

*Defined in [blessed.d.ts:1344](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1344)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `Function`

___
<a id="pf"></a>

###  pf

▸ **pf**(): `boolean`

*Defined in [blessed.d.ts:960](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L960)*

**Returns:** `boolean`

___
<a id="po"></a>

###  po

▸ **po**(): `boolean`

*Defined in [blessed.d.ts:956](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L956)*

**Returns:** `boolean`

___
<a id="pos"></a>

###  pos

▸ **pos**(row?: *`undefined` \| `number`*, col?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:433](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L433)*

CSI Ps ; Ps H Cursor Position \[ row;column \] (default = \[ 1,1 \]) (CUP).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` row | `undefined` \| `number` |
| `Optional` col | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="prependlistener"></a>

###  prependListener

▸ **prependListener**(event: *`string` \| `symbol`*, listener: *`function`*): `this`

*Inherited from EventEmitter.prependListener*

*Overrides EventEmitter.prependListener*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:13*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:14*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="print"></a>

###  print

▸ **print**(text: *`string`*, attr?: *`undefined` \| `false` \| `true`*): `boolean`

*Defined in [blessed.d.ts:294](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L294)*

Determines whether to include text attributes when writing.

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |
| `Optional` attr | `undefined` \| `false` \| `true` |

**Returns:** `boolean`

___
<a id="print_screen"></a>

###  print_screen

▸ **print_screen**(): `boolean`

*Defined in [blessed.d.ts:951](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L951)*

**Returns:** `boolean`

___
<a id="prtr_non"></a>

###  prtr_non

▸ **prtr_non**(): `boolean`

*Defined in [blessed.d.ts:963](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L963)*

**Returns:** `boolean`

___
<a id="prtr_off"></a>

###  prtr_off

▸ **prtr_off**(): `boolean`

*Defined in [blessed.d.ts:959](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L959)*

**Returns:** `boolean`

___
<a id="prtr_on"></a>

###  prtr_on

▸ **prtr_on**(): `boolean`

*Defined in [blessed.d.ts:955](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L955)*

**Returns:** `boolean`

___
<a id="ps"></a>

###  ps

▸ **ps**(): `boolean`

*Defined in [blessed.d.ts:952](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L952)*

**Returns:** `boolean`

___
<a id="rawlisteners"></a>

###  rawListeners

▸ **rawListeners**(event: *`string` \| `symbol`*): `Function`[]

*Inherited from EventEmitter.rawListeners*

*Overrides EventEmitter.rawListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:21*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |

**Returns:** `Function`[]

___
<a id="rc"></a>

###  rc

▸ **rc**(key?: *`undefined` \| `string`*, hide?: *`undefined` \| `false` \| `true`*): `boolean`

*Defined in [blessed.d.ts:371](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L371)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` key | `undefined` \| `string` |
| `Optional` hide | `undefined` \| `false` \| `true` |

**Returns:** `boolean`

___
<a id="rca"></a>

###  rcA

▸ **rcA**(): `boolean`

*Defined in [blessed.d.ts:897](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L897)*

*__see__*: restoreCursorA

**Returns:** `boolean`

___
<a id="removealllisteners"></a>

###  removeAllListeners

▸ **removeAllListeners**(event?: *`string` \| `symbol`*): `this`

*Inherited from EventEmitter.removeAllListeners*

*Overrides EventEmitter.removeAllListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:17*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` event | `string` \| `symbol` |

**Returns:** `this`

___
<a id="removekey"></a>

###  removeKey

▸ **removeKey**(key: *`string` \| `string`[]*, l: *[KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener)*): `void`

*Defined in [blessed.d.ts:273](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L273)*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:15*

**Parameters:**

| Name | Type |
| ------ | ------ |
| event | `string` \| `symbol` |
| listener | `function` |

**Returns:** `this`

___
<a id="rep"></a>

###  rep

▸ **rep**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:942](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L942)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="repeat"></a>

###  repeat

▸ **repeat**(ch: *`string`*, i?: *`undefined` \| `number`*): `string`

*Defined in [blessed.d.ts:308](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L308)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ch | `string` |
| `Optional` i | `undefined` \| `number` |

**Returns:** `string`

___
<a id="repeatprecedingcharacter"></a>

###  repeatPrecedingCharacter

▸ **repeatPrecedingCharacter**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:941](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L941)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="req_mouse_pos"></a>

###  req_mouse_pos

▸ **req_mouse_pos**(param?: *`undefined` \| `string`*, callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:1314](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1314)*

*__see__*: requestLocatorPosition

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `string` |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="reqmp"></a>

###  reqmp

▸ **reqmp**(param?: *`undefined` \| `string`*, callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:1312](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1312)*

*__see__*: requestLocatorPosition

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `string` |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="requestansimode"></a>

###  requestAnsiMode

▸ **requestAnsiMode**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:990](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L990)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="requestlocatorposition"></a>

###  requestLocatorPosition

▸ **requestLocatorPosition**(param?: *`undefined` \| `string`*, callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:1310](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1310)*

`` ` `` CSI Ps ' \| Request Locator Position (DECRQLP). Valid values for the parameter are: Ps = 0 , 1 or omitted -> transmit a single DECLRP locator report.

If Locator Reporting has been enabled by a DECELR, xterm will respond with a DECLRP Locator Report. This report is also generated on button up and down events if they have been enabled with a DECSLE, or when the locator is detected outside of a filter rectangle, if filter rectangles have been enabled with a DECEFR.

\-> CSI Pe ; Pb ; Pr ; Pc ; Pp & w

Parameters are \[event;button;row;column;page\]. Valid values for the event: Pe = 0 -> locator unavailable - no other parameters sent. Pe = 1 -> request - xterm received a DECRQLP. Pe = 2 -> left button down. Pe = 3 -> left button up. Pe = 4 -> middle button down. Pe = 5 -> middle button up. Pe = 6 -> right button down. Pe = 7 -> right button up. Pe = 8 -> M4 button down. Pe = 9 -> M4 button up. Pe = 1 0 -> locator outside filter rectangle. `button'' parameter is a bitmask indicating which buttons are pressed: Pb = 0 <- no buttons down. Pb & 1 <- right button down. Pb & 2 <- middle button down. Pb & 4 <- left button down. Pb & 8 <- M4 button down.`row'' and `column'' parameters are the coordinates of the locator position in the xterm window, encoded as ASCII deci- mal. The`page'' parameter is not used by xterm, and will be omit- ted. `` ` ``

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `string` |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="requestparameters"></a>

###  requestParameters

▸ **requestParameters**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:1207](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1207)*

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
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="requestprivatemode"></a>

###  requestPrivateMode

▸ **requestPrivateMode**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:993](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L993)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="reset"></a>

###  reset

▸ **reset**(): `boolean`

*Defined in [blessed.d.ts:364](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L364)*

**Returns:** `boolean`

___
<a id="resetcolors"></a>

###  resetColors

▸ **resetColors**(param?: *`undefined` \| `string`*): `boolean`

*Defined in [blessed.d.ts:392](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L392)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `string` |

**Returns:** `boolean`

___
<a id="resetcursor"></a>

###  resetCursor

▸ **resetCursor**(): `boolean`

*Defined in [blessed.d.ts:314](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L314)*

**Returns:** `boolean`

___
<a id="resetmode"></a>

###  resetMode

▸ **resetMode**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:832](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L832)*

`` ` ``

CSI Pm l Reset Mode (RM). Ps = 2 -> Keyboard Action Mode (AM). Ps = 4 -> Replace Mode (IRM). Ps = 1 2 -> Send/receive (SRM). Ps = 2 0 -> Normal Linefeed (LNM). CSI ? Pm l DEC Private Mode Reset (DECRST). Ps = 1 -> Normal Cursor Keys (DECCKM). Ps = 2 -> Designate VT52 mode (DECANM). Ps = 3 -> 80 Column Mode (DECCOLM). Ps = 4 -> Jump (Fast) Scroll (DECSCLM). Ps = 5 -> Normal Video (DECSCNM). Ps = 6 -> Normal Cursor Mode (DECOM). Ps = 7 -> No Wraparound Mode (DECAWM). Ps = 8 -> No Auto-repeat Keys (DECARM). Ps = 9 -> Don't send Mouse X & Y on button press. Ps = 1 0 -> Hide toolbar (rxvt). Ps = 1 2 -> Stop Blinking Cursor (att610). Ps = 1 8 -> Don't print form feed (DECPFF). Ps = 1 9 -> Limit print to scrolling region (DECPEX). Ps = 2 5 -> Hide Cursor (DECTCEM). Ps = 3 0 -> Don't show scrollbar (rxvt). Ps = 3 5 -> Disable font-shifting functions (rxvt). Ps = 4 0 -> Disallow 80 -> 132 Mode. Ps = 4 1 -> No more(1) fix (see curses resource). Ps = 4 2 -> Disable Nation Replacement Character sets (DEC- NRCM). Ps = 4 4 -> Turn Off Margin Bell. Ps = 4 5 -> No Reverse-wraparound Mode. Ps = 4 6 -> Stop Logging. (This is normally disabled by a compile-time option). Ps = 4 7 -> Use Normal Screen Buffer. Ps = 6 6 -> Numeric keypad (DECNKM). Ps = 6 7 -> Backarrow key sends delete (DECBKM). Ps = 1 0 0 0 -> Don't send Mouse X & Y on button press and release. See the section Mouse Tracking. Ps = 1 0 0 1 -> Don't use Hilite Mouse Tracking. Ps = 1 0 0 2 -> Don't use Cell Motion Mouse Tracking. Ps = 1 0 0 3 -> Don't use All Motion Mouse Tracking. Ps = 1 0 0 4 -> Don't send FocusIn/FocusOut events. Ps = 1 0 0 5 -> Disable Extended Mouse Mode. Ps = 1 0 1 0 -> Don't scroll to bottom on tty output (rxvt). Ps = 1 0 1 1 -> Don't scroll to bottom on key press (rxvt). Ps = 1 0 3 4 -> Don't interpret "meta" key. (This disables the eightBitInput resource). Ps = 1 0 3 5 -> Disable special modifiers for Alt and Num- Lock keys. (This disables the numLock resource). Ps = 1 0 3 6 -> Don't send ESC when Meta modifies a key. (This disables the metaSendsEscape resource). Ps = 1 0 3 7 -> Send VT220 Remove from the editing-keypad Delete key. Ps = 1 0 3 9 -> Don't send ESC when Alt modifies a key. (This disables the altSendsEscape resource). Ps = 1 0 4 0 -> Do not keep selection when not highlighted. (This disables the keepSelection resource). Ps = 1 0 4 1 -> Use the PRIMARY selection. (This disables the selectToClipboard resource). Ps = 1 0 4 2 -> Disable Urgency window manager hint when Control-G is received. (This disables the bellIsUrgent resource). Ps = 1 0 4 3 -> Disable raising of the window when Control- G is received. (This disables the popOnBell resource). Ps = 1 0 4 7 -> Use Normal Screen Buffer, clearing screen first if in the Alternate Screen. (This may be disabled by the titeInhibit resource). Ps = 1 0 4 8 -> Restore cursor as in DECRC. (This may be disabled by the titeInhibit resource). Ps = 1 0 4 9 -> Use Normal Screen Buffer and restore cursor as in DECRC. (This may be disabled by the titeInhibit resource). This combines the effects of the 1 0 4 7 and 1 0 4 8 modes. Use this with terminfo-based applications rather than the 4 7 mode. Ps = 1 0 5 0 -> Reset terminfo/termcap function-key mode. Ps = 1 0 5 1 -> Reset Sun function-key mode. Ps = 1 0 5 2 -> Reset HP function-key mode. Ps = 1 0 5 3 -> Reset SCO function-key mode. Ps = 1 0 6 0 -> Reset legacy keyboard emulation (X11R6). Ps = 1 0 6 1 -> Reset keyboard emulation to Sun/PC style. Ps = 2 0 0 4 -> Reset bracketed paste mode. `` ` ``

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="resettitlemodes"></a>

###  resetTitleModes

▸ **resetTitleModes**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:934](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L934)*

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

▸ **response**(name: *`string`*, text: *`string`*, callback: *`Function`*, noBypass?: *`undefined` \| `false` \| `true`*): `boolean`

▸ **response**(name: *`string`*, callback?: *`Function`*): `boolean`

*Defined in [blessed.d.ts:280](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L280)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| text | `string` |
| callback | `Function` |
| `Optional` noBypass | `undefined` \| `false` \| `true` |

**Returns:** `boolean`

*Defined in [blessed.d.ts:281](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L281)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| name | `string` |
| `Optional` callback | `Function` |

**Returns:** `boolean`

___
<a id="restorecursor"></a>

###  restoreCursor

▸ **restoreCursor**(key?: *`undefined` \| `string`*, hide?: *`undefined` \| `false` \| `true`*): `boolean`

*Defined in [blessed.d.ts:370](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L370)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` key | `undefined` \| `string` |
| `Optional` hide | `undefined` \| `false` \| `true` |

**Returns:** `boolean`

___
<a id="restorecursora"></a>

###  restoreCursorA

▸ **restoreCursorA**(): `boolean`

*Defined in [blessed.d.ts:895](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L895)*

```
CSI u
Restore cursor (ANSI.SYS).
```

**Returns:** `boolean`

___
<a id="restoreprivatevalues"></a>

###  restorePrivateValues

▸ **restorePrivateValues**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1053](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1053)*

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

*Defined in [blessed.d.ts:349](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L349)*

**Returns:** `boolean`

___
<a id="reverse"></a>

###  reverse

▸ **reverse**(): `boolean`

*Defined in [blessed.d.ts:360](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L360)*

**Returns:** `boolean`

___
<a id="reverseattrinrectangle"></a>

###  reverseAttrInRectangle

▸ **reverseAttrInRectangle**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1139](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1139)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="reverseindex"></a>

###  reverseIndex

▸ **reverseIndex**(): `boolean`

*Defined in [blessed.d.ts:359](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L359)*

**Returns:** `boolean`

___
<a id="ri"></a>

###  ri

▸ **ri**(): `boolean`

*Defined in [blessed.d.ts:361](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L361)*

**Returns:** `boolean`

___
<a id="right"></a>

###  right

▸ **right**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:412](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L412)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="rm"></a>

###  rm

▸ **rm**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:834](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L834)*

*__see__*: resetMode

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="rmacs"></a>

###  rmacs

▸ **rmacs**(): `boolean`

*Defined in [blessed.d.ts:386](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L386)*

**Returns:** `boolean`

___
<a id="rmcup"></a>

###  rmcup

▸ **rmcup**(): `boolean`

*Defined in [blessed.d.ts:845](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L845)*

**Returns:** `boolean`

___
<a id="rmove"></a>

###  rmove

▸ **rmove**(x: *`number`*, y: *`number`*): `void`

*Defined in [blessed.d.ts:303](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L303)*

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

*Defined in [blessed.d.ts:987](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L987)*

**Returns:** `boolean`

___
<a id="rsetx"></a>

###  rsetx

▸ **rsetx**(x: *`number`*): `boolean`

*Defined in [blessed.d.ts:301](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L301)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| x | `number` |

**Returns:** `boolean`

___
<a id="rsety"></a>

###  rsety

▸ **rsety**(y: *`number`*): `boolean`

*Defined in [blessed.d.ts:302](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L302)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| y | `number` |

**Returns:** `boolean`

___
<a id="savecursor"></a>

###  saveCursor

▸ **saveCursor**(key: *`string`*): `boolean`

*Defined in [blessed.d.ts:367](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L367)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `boolean`

___
<a id="savecursora"></a>

###  saveCursorA

▸ **saveCursorA**(): `boolean`

*Defined in [blessed.d.ts:885](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L885)*

CSI s Save cursor (ANSI.SYS).

**Returns:** `boolean`

___
<a id="saveprivatevalues"></a>

###  savePrivateValues

▸ **savePrivateValues**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1069](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1069)*

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

*Defined in [blessed.d.ts:582](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L582)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `void`

___
<a id="sc"></a>

###  sc

▸ **sc**(key: *`string`*): `boolean`

*Defined in [blessed.d.ts:368](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L368)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `boolean`

___
<a id="sca"></a>

###  scA

▸ **scA**(): `boolean`

*Defined in [blessed.d.ts:887](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L887)*

*__see__*: saveCursorA

**Returns:** `boolean`

___
<a id="scrolldown"></a>

###  scrollDown

▸ **scrollDown**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:908](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L908)*

CSI Ps T Scroll down Ps lines (default = 1) (SD).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="scrollup"></a>

###  scrollUp

▸ **scrollUp**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:904](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L904)*

CSI Ps S Scroll up Ps lines (default = 1) (SU).

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="sd"></a>

###  sd

▸ **sd**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:910](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L910)*

*__see__*: scrollDown

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="seldata"></a>

###  selData

▸ **selData**(a: *`string`*, b: *`string`*): `boolean`

*Defined in [blessed.d.ts:400](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L400)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| a | `string` |
| b | `string` |

**Returns:** `boolean`

___
<a id="selectchangeextent"></a>

###  selectChangeExtent

▸ **selectChangeExtent**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:1219](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1219)*

`` ` ``

CSI Ps x Select Attribute Change Extent (DECSACE). Ps = 0 -> from start to end position, wrapped. Ps = 1 -> from start to end position, wrapped. Ps = 2 -> rectangle (exact). `` ` ``

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="selectiveeraserectangle"></a>

###  selectiveEraseRectangle

▸ **selectiveEraseRectangle**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1263](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1263)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="senddeviceattributes"></a>

###  sendDeviceAttributes

▸ **sendDeviceAttributes**(param?: *`undefined` \| `number`*, callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:625](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L625)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="setattrinrectangle"></a>

###  setAttrInRectangle

▸ **setAttrInRectangle**(Pt: *`number`*, Pl: *`number`*, Pb: *`number`*, Pr: *`number`*, Ps$: *`number`*): `boolean`

*Defined in [blessed.d.ts:1064](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1064)*

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

▸ **setBackground**(color: *`string`*, val?: *`undefined` \| `string`*): `boolean`

*Defined in [blessed.d.ts:540](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L540)*

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
| `Optional` val | `undefined` \| `string` |

**Returns:** `boolean`

___
<a id="setcharprotectionattr"></a>

###  setCharProtectionAttr

▸ **setCharProtectionAttr**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:1043](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1043)*

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
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="setconformancelevel"></a>

###  setConformanceLevel

▸ **setConformanceLevel**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:996](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L996)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="setcursorstyle"></a>

###  setCursorStyle

▸ **setCursorStyle**(cursor: *`0` \| `1` \| `2` \| `3` \| `4` \| "blinkingblock" \| "block" \| "steady block" \| "blinking underline" \| "underline" \| "steady underline" \| "blinking bar" \| "bar" \| "steady bar"*): `boolean`

*Defined in [blessed.d.ts:1013](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1013)*

```
CSI Ps SP q
Set cursor style (DECSCUSR, VT520).
Ps = 0  -> blinking block.
Ps = 1  -> blinking block (default).
Ps = 2  -> steady block.
Ps = 3  -> blinking underline.
Ps = 4  -> steady underline.
```

**Parameters:**

| Name | Type |
| ------ | ------ |
| cursor | `0` \| `1` \| `2` \| `3` \| `4` \| "blinkingblock" \| "block" \| "steady block" \| "blinking underline" \| "underline" \| "steady underline" \| "blinking bar" \| "bar" \| "steady bar" |

**Returns:** `boolean`

___
<a id="setforeground"></a>

###  setForeground

▸ **setForeground**(color: *`string`*, val?: *`undefined` \| `string`*): `boolean`

*Defined in [blessed.d.ts:523](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L523)*

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
| `Optional` val | `undefined` \| `string` |

**Returns:** `boolean`

___
<a id="setg"></a>

###  setG

▸ **setG**(val: *`number`*): `boolean`

*Defined in [blessed.d.ts:388](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L388)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| val | `number` |

**Returns:** `boolean`

___
<a id="setlocatorevents"></a>

###  setLocatorEvents

▸ **setLocatorEvents**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1260](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1260)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="setmarginbellvolume"></a>

###  setMarginBellVolume

▸ **setMarginBellVolume**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:1157](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1157)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="setmaxlisteners"></a>

###  setMaxListeners

▸ **setMaxListeners**(n: *`number`*): `this`

*Inherited from EventEmitter.setMaxListeners*

*Overrides EventEmitter.setMaxListeners*

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:18*

**Parameters:**

| Name | Type |
| ------ | ------ |
| n | `number` |

**Returns:** `this`

___
<a id="setmode"></a>

###  setMode

▸ **setMode**(args: *`string`*, callback: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:733](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L733)*

```
CSI Pm h  Set Mode (SM).
Ps = 2  -> Keyboard Action Mode (AM).
Ps = 4  -> Insert Mode (IRM).
Ps = 1 2  -> Send/receive (SRM).
Ps = 2 0  -> Automatic Newline (LNM).
CSI ? Pm h
DEC Private Mode Set (DECSET).
Ps = 1  -> Application Cursor Keys (DECCKM).
Ps = 2  -> Designate USASCII for character sets G0-G3
(DECANM), and set VT100 mode.
Ps = 3  -> 132 Column Mode (DECCOLM).
Ps = 4  -> Smooth (Slow) Scroll (DECSCLM).
Ps = 5  -> Reverse Video (DECSCNM).
Ps = 6  -> Origin Mode (DECOM).
Ps = 7  -> Wraparound Mode (DECAWM).
Ps = 8  -> Auto-repeat Keys (DECARM).
Ps = 9  -> Send Mouse X & Y on button press.  See the sec-
tion Mouse Tracking.
Ps = 1 0  -> Show toolbar (rxvt).
Ps = 1 2  -> Start Blinking Cursor (att610).
Ps = 1 8  -> Print form feed (DECPFF).
Ps = 1 9  -> Set print extent to full screen (DECPEX).
Ps = 2 5  -> Show Cursor (DECTCEM).
Ps = 3 0  -> Show scrollbar (rxvt).
Ps = 3 5  -> Enable font-shifting functions (rxvt).
Ps = 3 8  -> Enter Tektronix Mode (DECTEK).
Ps = 4 0  -> Allow 80 -> 132 Mode.
Ps = 4 1  -> more(1) fix (see curses resource).
Ps = 4 2  -> Enable Nation Replacement Character sets (DECN-
RCM).
Ps = 4 4  -> Turn On Margin Bell.
Ps = 4 5  -> Reverse-wraparound Mode.
Ps = 4 6  -> Start Logging.  This is normally disabled by a
compile-time option.
Ps = 4 7  -> Use Alternate Screen Buffer.  (This may be dis-
abled by the titeInhibit resource).
Ps = 6 6  -> Application keypad (DECNKM).
Ps = 6 7  -> Backarrow key sends backspace (DECBKM).
Ps = 1 0 0 0  -> Send Mouse X & Y on button press and
release.  See the section Mouse Tracking.
Ps = 1 0 0 1  -> Use Hilite Mouse Tracking.
Ps = 1 0 0 2  -> Use Cell Motion Mouse Tracking.
Ps = 1 0 0 3  -> Use All Motion Mouse Tracking.
Ps = 1 0 0 4  -> Send FocusIn/FocusOut events.
Ps = 1 0 0 5  -> Enable Extended Mouse Mode.
Ps = 1 0 1 0  -> Scroll to bottom on tty output (rxvt).
Ps = 1 0 1 1  -> Scroll to bottom on key press (rxvt).
Ps = 1 0 3 4  -> Interpret "meta" key, sets eighth bit.
(enables the eightBitInput resource).
Ps = 1 0 3 5  -> Enable special modifiers for Alt and Num-
Lock keys.  (This enables the numLock resource).
Ps = 1 0 3 6  -> Send ESC   when Meta modifies a key.  (This
enables the metaSendsEscape resource).
Ps = 1 0 3 7  -> Send DEL from the editing-keypad Delete
key.
Ps = 1 0 3 9  -> Send ESC  when Alt modifies a key.  (This
enables the altSendsEscape resource).
Ps = 1 0 4 0  -> Keep selection even if not highlighted.
(This enables the keepSelection resource).
Ps = 1 0 4 1  -> Use the CLIPBOARD selection.  (This enables
the selectToClipboard resource).
Ps = 1 0 4 2  -> Enable Urgency window manager hint when
Control-G is received.  (This enables the bellIsUrgent
resource).
Ps = 1 0 4 3  -> Enable raising of the window when Control-G
is received.  (enables the popOnBell resource).
Ps = 1 0 4 7  -> Use Alternate Screen Buffer.  (This may be
disabled by the titeInhibit resource).
Ps = 1 0 4 8  -> Save cursor as in DECSC.  (This may be dis-
abled by the titeInhibit resource).
Ps = 1 0 4 9  -> Save cursor as in DECSC and use Alternate
Screen Buffer, clearing it first.  (This may be disabled by
the titeInhibit resource).  This combines the effects of the 1
0 4 7  and 1 0 4 8  modes.  Use this with terminfo-based
applications rather than the 4 7  mode.
Ps = 1 0 5 0  -> Set terminfo/termcap function-key mode.
Ps = 1 0 5 1  -> Set Sun function-key mode.
Ps = 1 0 5 2  -> Set HP function-key mode.
Ps = 1 0 5 3  -> Set SCO function-key mode.
Ps = 1 0 6 0  -> Set legacy keyboard emulation (X11R6).
Ps = 1 0 6 1  -> Set VT220 keyboard emulation.
Ps = 2 0 0 4  -> Set bracketed paste mode.
Modes:
http://vt100.net/docs/vt220-rm/chapter4.html
```

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

▸ **setMouse**(opt?: *`undefined` \| `object`*, enable?: *`undefined` \| `false` \| `true`*): `void`

*Defined in [blessed.d.ts:850](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L850)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` opt | `undefined` \| `object` |
| `Optional` enable | `undefined` \| `false` \| `true` |

**Returns:** `void`

___
<a id="setpointermode"></a>

###  setPointerMode

▸ **setPointerMode**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:984](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L984)*

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

*Defined in [blessed.d.ts:966](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L966)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="setscrollregion"></a>

###  setScrollRegion

▸ **setScrollRegion**(top: *`number`*, bottom: *`number`*): `boolean`

*Defined in [blessed.d.ts:878](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L878)*

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

*Defined in [blessed.d.ts:260](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L260)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| terminal | `string` |

**Returns:** `void`

___
<a id="settitle"></a>

###  setTitle

▸ **setTitle**(title: *`string`*): `boolean`

*Defined in [blessed.d.ts:390](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L390)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| title | `string` |

**Returns:** `boolean`

___
<a id="settitlemodefeature"></a>

###  setTitleModeFeature

▸ **setTitleModeFeature**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:1152](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1152)*

`CSI > Ps; Ps t Set one or more features of the title modes. Each parameter enables a single feature. Ps = 0 -> Set window/icon labels using hexadecimal. Ps = 1 -> Query window/icon labels using hexadecimal. Ps = 2 -> Set window/icon labels using UTF-8. Ps = 3 -> Query window/icon labels using UTF-8. (See dis- cussion of "Title Modes") XXX VTE bizarelly echos this:`

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="setwarningbellvolume"></a>

###  setWarningBellVolume

▸ **setWarningBellVolume**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:1154](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1154)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="setupdump"></a>

###  setupDump

▸ **setupDump**(): `void`

*Defined in [blessed.d.ts:258](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L258)*

**Returns:** `void`

___
<a id="setuptput"></a>

###  setupTput

▸ **setupTput**(): `void`

*Defined in [blessed.d.ts:259](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L259)*

**Returns:** `void`

___
<a id="setx"></a>

###  setx

▸ **setx**(x: *`number`*): `boolean`

*Defined in [blessed.d.ts:297](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L297)*

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

*Defined in [blessed.d.ts:298](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L298)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| y | `number` |

**Returns:** `boolean`

___
<a id="shiftin"></a>

###  shiftIn

▸ **shiftIn**(): `boolean`

*Defined in [blessed.d.ts:347](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L347)*

**Returns:** `boolean`

___
<a id="shiftout"></a>

###  shiftOut

▸ **shiftOut**(): `boolean`

*Defined in [blessed.d.ts:346](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L346)*

**Returns:** `boolean`

___
<a id="showcursor"></a>

###  showCursor

▸ **showCursor**(): `boolean`

*Defined in [blessed.d.ts:742](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L742)*

Uses [setMode](api-classes-blessed-d-blessedprogram.md#setmode) 2 5 to show the cursor: NOTE: In xterm terminfo: cnorm stops blinking cursor cvvis starts blinking cursor

**Returns:** `boolean`

___
<a id="sigtstp"></a>

###  sigtstp

▸ **sigtstp**(callback?: *[ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback)*): `boolean`

*Defined in [blessed.d.ts:1342](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L1342)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` callback | [ProgramResponseCallback](api-modules-blessed-d-module.md#programresponsecallback) |

**Returns:** `boolean`

___
<a id="simpleinsert"></a>

###  simpleInsert

▸ **simpleInsert**(ch: *`string`*, i?: *`undefined` \| `number`*, attr?: *`undefined` \| `false` \| `true`*): `boolean`

*Defined in [blessed.d.ts:307](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L307)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ch | `string` |
| `Optional` i | `undefined` \| `number` |
| `Optional` attr | `undefined` \| `false` \| `true` |

**Returns:** `boolean`

___
<a id="sm"></a>

###  sm

▸ **sm**(...args: *`string`[]*): `boolean`

*Defined in [blessed.d.ts:735](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L735)*

*__see__*: setMode

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Rest` args | `string`[] |

**Returns:** `boolean`

___
<a id="smacs"></a>

###  smacs

▸ **smacs**(): `boolean`

*Defined in [blessed.d.ts:382](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L382)*

**Returns:** `boolean`

___
<a id="smcup"></a>

###  smcup

▸ **smcup**(): `boolean`

*Defined in [blessed.d.ts:745](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L745)*

**Returns:** `boolean`

___
<a id="softreset"></a>

###  softReset

▸ **softReset**(): `boolean`

*Defined in [blessed.d.ts:986](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L986)*

**Returns:** `boolean`

___
<a id="su"></a>

###  su

▸ **su**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:906](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L906)*

*__see__*: scrollUp

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="tab"></a>

###  tab

▸ **tab**(): `boolean`

*Defined in [blessed.d.ts:342](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L342)*

**Returns:** `boolean`

___
<a id="tabclear"></a>

###  tabClear

▸ **tabClear**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:944](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L944)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="tabset"></a>

###  tabSet

▸ **tabSet**(): `boolean`

*Defined in [blessed.d.ts:365](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L365)*

**Returns:** `boolean`

___
<a id="tbc"></a>

###  tbc

▸ **tbc**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:945](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L945)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="term"></a>

###  term

▸ **term**(is: *`string`*): `boolean`

*Defined in [blessed.d.ts:264](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L264)*

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

*Defined in [blessed.d.ts:272](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L272)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` \| `string`[] |
| l | [KeyEventListener](api-modules-blessed-d-widgets.md#keyeventlistener) |

**Returns:** `void`

___
<a id="up"></a>

###  up

▸ **up**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:404](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L404)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="vi"></a>

###  vi

▸ **vi**(): `boolean`

*Defined in [blessed.d.ts:840](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L840)*

**Returns:** `boolean`

___
<a id="vpa"></a>

###  vpa

▸ **vpa**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:629](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L629)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="vpr"></a>

###  vpr

▸ **vpr**(param?: *`undefined` \| `number`*): `boolean`

*Defined in [blessed.d.ts:632](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L632)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` param | `undefined` \| `number` |

**Returns:** `boolean`

___
<a id="vtab"></a>

###  vtab

▸ **vtab**(): `boolean`

*Defined in [blessed.d.ts:334](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L334)*

**Returns:** `boolean`

___
<a id="write"></a>

###  write

▸ **write**(text: *`string`*): `boolean`

▸ **write**(text: *`string`*, style: *`string`*): `boolean`

*Defined in [blessed.d.ts:283](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L283)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| text | `string` |

**Returns:** `boolean`

*Defined in [blessed.d.ts:288](https://github.com/cancerberoSgx/accursed/blob/7a42e78/src/declarations/blessed.d.ts#L288)*

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

*Defined in /Users/sebastiangurin/git/accursed/node_modules/@types/node/events.d.ts:7*

*__deprecated__*: since v4.0.0

**Parameters:**

| Name | Type |
| ------ | ------ |
| emitter | `EventEmitter` |
| event | `string` \| `symbol` |

**Returns:** `number`

___

