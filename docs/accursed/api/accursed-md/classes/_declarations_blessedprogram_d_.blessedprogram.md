[accursed](../README.md) › [Globals](../globals.md) › ["declarations/blessedProgram.d"](../modules/_declarations_blessedprogram_d_.md) › [BlessedProgram](_declarations_blessedprogram_d_.blessedprogram.md)

# Class: BlessedProgram

The Program instance manages the low level interaction with the terminal and is used by [Screen](_declarations_blessed_d_.widgets.screen.md) to read and write terminal, and access mouse, etc. Is responsible of reading / writing to the terminal using [Tput](_declarations_tput_d_.tput.md) and support mouse.

It has associated an [output](_declarations_blessedprogram_d_.blessedprogram.md#output) writable stream attribute which usually is stdout but could
could be configured by the user using [IBlessedProgramOptions](../interfaces/_declarations_blessedprogram_d_.iblessedprogramoptions.md). The same for an [input](_declarations_blessedprogram_d_.blessedprogram.md#input) Readable stream
from which the host terminal respond to the program requests.

The communication with the host system is mostly done writing  `tput` sequences to the [output](_declarations_blessedprogram_d_.blessedprogram.md#output) stream. It extends tput to add support for mouse and other devices.

The program is responsible of portability and supporting the same API through several terminal standards /
vendors

In general users don't have to use the program for develop their applications, however, it can be accessed
from the screen and its lower level api can be used along the application.

## Example 1

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

## Example 2:

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

## Example 3:

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

## Example 4

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
## Example 5

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

* [Tput](_declarations_tput_d_.tput.md)

  ↳ **BlessedProgram**

## Implements

* [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md)‹[TputsOptions](../interfaces/_declarations_tput_d_.tputsoptions.md)›
* [TputFeatures](../interfaces/_declarations_tput_d_.tputfeatures.md)
* EventEmitter

## Index

### Constructors

* [constructor](_declarations_blessedprogram_d_.blessedprogram.md#constructor)

### Properties

* [PCRomSet](_declarations_blessedprogram_d_.blessedprogram.md#pcromset)
* [_buf](_declarations_blessedprogram_d_.blessedprogram.md#_buf)
* [_terminal](_declarations_blessedprogram_d_.blessedprogram.md#_terminal)
* [_tputSetup](_declarations_blessedprogram_d_.blessedprogram.md#_tputsetup)
* [acsc](_declarations_blessedprogram_d_.blessedprogram.md#acsc)
* [acscr](_declarations_blessedprogram_d_.blessedprogram.md#acscr)
* [all](_declarations_blessedprogram_d_.blessedprogram.md#all)
* [am](_declarations_blessedprogram_d_.blessedprogram.md#am)
* [auto_left_margin](_declarations_blessedprogram_d_.blessedprogram.md#auto_left_margin)
* [auto_right_margin](_declarations_blessedprogram_d_.blessedprogram.md#auto_right_margin)
* [back_color_erase](_declarations_blessedprogram_d_.blessedprogram.md#back_color_erase)
* [backspace_delay](_declarations_blessedprogram_d_.blessedprogram.md#backspace_delay)
* [backspaces_with_bs](_declarations_blessedprogram_d_.blessedprogram.md#backspaces_with_bs)
* [bce](_declarations_blessedprogram_d_.blessedprogram.md#bce)
* [beehive_glitch](_declarations_blessedprogram_d_.blessedprogram.md#beehive_glitch)
* [bit_image_entwining](_declarations_blessedprogram_d_.blessedprogram.md#bit_image_entwining)
* [bit_image_type](_declarations_blessedprogram_d_.blessedprogram.md#bit_image_type)
* [bitwin](_declarations_blessedprogram_d_.blessedprogram.md#bitwin)
* [bitype](_declarations_blessedprogram_d_.blessedprogram.md#bitype)
* [bools](_declarations_blessedprogram_d_.blessedprogram.md#bools)
* [brokenACS](_declarations_blessedprogram_d_.blessedprogram.md#brokenacs)
* [btns](_declarations_blessedprogram_d_.blessedprogram.md#btns)
* [buffer_capacity](_declarations_blessedprogram_d_.blessedprogram.md#buffer_capacity)
* [bufsz](_declarations_blessedprogram_d_.blessedprogram.md#bufsz)
* [buttons](_declarations_blessedprogram_d_.blessedprogram.md#buttons)
* [bw](_declarations_blessedprogram_d_.blessedprogram.md#bw)
* [can_change](_declarations_blessedprogram_d_.blessedprogram.md#can_change)
* [carriage_return_delay](_declarations_blessedprogram_d_.blessedprogram.md#carriage_return_delay)
* [ccc](_declarations_blessedprogram_d_.blessedprogram.md#ccc)
* [ceol_standout_glitch](_declarations_blessedprogram_d_.blessedprogram.md#ceol_standout_glitch)
* [chts](_declarations_blessedprogram_d_.blessedprogram.md#chts)
* [col_addr_glitch](_declarations_blessedprogram_d_.blessedprogram.md#col_addr_glitch)
* [colors](_declarations_blessedprogram_d_.blessedprogram.md#colors)
* [cols](_declarations_blessedprogram_d_.blessedprogram.md#cols)
* [columns](_declarations_blessedprogram_d_.blessedprogram.md#columns)
* [cpi_changes_res](_declarations_blessedprogram_d_.blessedprogram.md#cpi_changes_res)
* [cpix](_declarations_blessedprogram_d_.blessedprogram.md#cpix)
* [cps](_declarations_blessedprogram_d_.blessedprogram.md#cps)
* [cr_cancels_micro_mode](_declarations_blessedprogram_d_.blessedprogram.md#cr_cancels_micro_mode)
* [crt_no_scrolling](_declarations_blessedprogram_d_.blessedprogram.md#crt_no_scrolling)
* [crxm](_declarations_blessedprogram_d_.blessedprogram.md#crxm)
* [cursorHidden](_declarations_blessedprogram_d_.blessedprogram.md#cursorhidden)
* [daisy](_declarations_blessedprogram_d_.blessedprogram.md#daisy)
* [db](_declarations_blessedprogram_d_.blessedprogram.md#db)
* [dest_tabs_magic_smso](_declarations_blessedprogram_d_.blessedprogram.md#dest_tabs_magic_smso)
* [dot_horz_spacing](_declarations_blessedprogram_d_.blessedprogram.md#dot_horz_spacing)
* [dot_vert_spacing](_declarations_blessedprogram_d_.blessedprogram.md#dot_vert_spacing)
* [eat_newline_glitch](_declarations_blessedprogram_d_.blessedprogram.md#eat_newline_glitch)
* [eo](_declarations_blessedprogram_d_.blessedprogram.md#eo)
* [erase_overstrike](_declarations_blessedprogram_d_.blessedprogram.md#erase_overstrike)
* [error](_declarations_blessedprogram_d_.blessedprogram.md#error)
* [eslok](_declarations_blessedprogram_d_.blessedprogram.md#eslok)
* [extended](_declarations_blessedprogram_d_.blessedprogram.md#extended)
* [features](_declarations_blessedprogram_d_.blessedprogram.md#features)
* [generic_type](_declarations_blessedprogram_d_.blessedprogram.md#generic_type)
* [gn](_declarations_blessedprogram_d_.blessedprogram.md#gn)
* [gnu_has_meta_key](_declarations_blessedprogram_d_.blessedprogram.md#gnu_has_meta_key)
* [gpm](_declarations_blessedprogram_d_.blessedprogram.md#optional-gpm)
* [hard_copy](_declarations_blessedprogram_d_.blessedprogram.md#hard_copy)
* [hard_cursor](_declarations_blessedprogram_d_.blessedprogram.md#hard_cursor)
* [has_hardware_tabs](_declarations_blessedprogram_d_.blessedprogram.md#has_hardware_tabs)
* [has_meta_key](_declarations_blessedprogram_d_.blessedprogram.md#has_meta_key)
* [has_print_wheel](_declarations_blessedprogram_d_.blessedprogram.md#has_print_wheel)
* [has_status_line](_declarations_blessedprogram_d_.blessedprogram.md#has_status_line)
* [hc](_declarations_blessedprogram_d_.blessedprogram.md#hc)
* [hls](_declarations_blessedprogram_d_.blessedprogram.md#hls)
* [horizontal_tab_delay](_declarations_blessedprogram_d_.blessedprogram.md#horizontal_tab_delay)
* [hs](_declarations_blessedprogram_d_.blessedprogram.md#hs)
* [hue_lightness_saturation](_declarations_blessedprogram_d_.blessedprogram.md#hue_lightness_saturation)
* [hz](_declarations_blessedprogram_d_.blessedprogram.md#hz)
* [in](_declarations_blessedprogram_d_.blessedprogram.md#in)
* [info](_declarations_blessedprogram_d_.blessedprogram.md#info)
* [init_tabs](_declarations_blessedprogram_d_.blessedprogram.md#init_tabs)
* [input](_declarations_blessedprogram_d_.blessedprogram.md#input)
* [insert_null_glitch](_declarations_blessedprogram_d_.blessedprogram.md#insert_null_glitch)
* [isAlt](_declarations_blessedprogram_d_.blessedprogram.md#isalt)
* [isLXDE](_declarations_blessedprogram_d_.blessedprogram.md#islxde)
* [isOSXTerm](_declarations_blessedprogram_d_.blessedprogram.md#isosxterm)
* [isRxvt](_declarations_blessedprogram_d_.blessedprogram.md#isrxvt)
* [isTerminator](_declarations_blessedprogram_d_.blessedprogram.md#isterminator)
* [isVTE](_declarations_blessedprogram_d_.blessedprogram.md#isvte)
* [isXFCE](_declarations_blessedprogram_d_.blessedprogram.md#isxfce)
* [isXterm](_declarations_blessedprogram_d_.blessedprogram.md#isxterm)
* [isiTerm2](_declarations_blessedprogram_d_.blessedprogram.md#isiterm2)
* [it](_declarations_blessedprogram_d_.blessedprogram.md#it)
* [kNXT6](_declarations_blessedprogram_d_.blessedprogram.md#knxt6)
* [kNXT7](_declarations_blessedprogram_d_.blessedprogram.md#knxt7)
* [km](_declarations_blessedprogram_d_.blessedprogram.md#km)
* [label_height](_declarations_blessedprogram_d_.blessedprogram.md#label_height)
* [label_width](_declarations_blessedprogram_d_.blessedprogram.md#label_width)
* [lh](_declarations_blessedprogram_d_.blessedprogram.md#lh)
* [linefeed_is_newline](_declarations_blessedprogram_d_.blessedprogram.md#linefeed_is_newline)
* [lines](_declarations_blessedprogram_d_.blessedprogram.md#lines)
* [lines_of_memory](_declarations_blessedprogram_d_.blessedprogram.md#lines_of_memory)
* [lm](_declarations_blessedprogram_d_.blessedprogram.md#lm)
* [lpi_changes_res](_declarations_blessedprogram_d_.blessedprogram.md#lpi_changes_res)
* [lpix](_declarations_blessedprogram_d_.blessedprogram.md#lpix)
* [lw](_declarations_blessedprogram_d_.blessedprogram.md#lw)
* [ma](_declarations_blessedprogram_d_.blessedprogram.md#ma)
* [maddr](_declarations_blessedprogram_d_.blessedprogram.md#maddr)
* [magicCookie](_declarations_blessedprogram_d_.blessedprogram.md#magiccookie)
* [magic_cookie_glitch](_declarations_blessedprogram_d_.blessedprogram.md#magic_cookie_glitch)
* [magic_cookie_glitch_ul](_declarations_blessedprogram_d_.blessedprogram.md#magic_cookie_glitch_ul)
* [max_attributes](_declarations_blessedprogram_d_.blessedprogram.md#max_attributes)
* [max_colors](_declarations_blessedprogram_d_.blessedprogram.md#max_colors)
* [max_micro_address](_declarations_blessedprogram_d_.blessedprogram.md#max_micro_address)
* [max_micro_jump](_declarations_blessedprogram_d_.blessedprogram.md#max_micro_jump)
* [max_pairs](_declarations_blessedprogram_d_.blessedprogram.md#max_pairs)
* [maximum_windows](_declarations_blessedprogram_d_.blessedprogram.md#maximum_windows)
* [mc5i](_declarations_blessedprogram_d_.blessedprogram.md#mc5i)
* [mcs](_declarations_blessedprogram_d_.blessedprogram.md#mcs)
* [memory_above](_declarations_blessedprogram_d_.blessedprogram.md#memory_above)
* [memory_below](_declarations_blessedprogram_d_.blessedprogram.md#memory_below)
* [methods](_declarations_blessedprogram_d_.blessedprogram.md#methods)
* [micro_char_size](_declarations_blessedprogram_d_.blessedprogram.md#micro_char_size)
* [micro_col_size](_declarations_blessedprogram_d_.blessedprogram.md#micro_col_size)
* [micro_line_size](_declarations_blessedprogram_d_.blessedprogram.md#micro_line_size)
* [mir](_declarations_blessedprogram_d_.blessedprogram.md#mir)
* [mjump](_declarations_blessedprogram_d_.blessedprogram.md#mjump)
* [mls](_declarations_blessedprogram_d_.blessedprogram.md#mls)
* [mouseEnabled](_declarations_blessedprogram_d_.blessedprogram.md#mouseenabled)
* [move_insert_mode](_declarations_blessedprogram_d_.blessedprogram.md#move_insert_mode)
* [move_standout_mode](_declarations_blessedprogram_d_.blessedprogram.md#move_standout_mode)
* [msgr](_declarations_blessedprogram_d_.blessedprogram.md#msgr)
* [mux](_declarations_blessedprogram_d_.blessedprogram.md#mux)
* [ncv](_declarations_blessedprogram_d_.blessedprogram.md#ncv)
* [ndscr](_declarations_blessedprogram_d_.blessedprogram.md#ndscr)
* [needs_xon_xoff](_declarations_blessedprogram_d_.blessedprogram.md#needs_xon_xoff)
* [new_line_delay](_declarations_blessedprogram_d_.blessedprogram.md#new_line_delay)
* [nlab](_declarations_blessedprogram_d_.blessedprogram.md#nlab)
* [no_color_video](_declarations_blessedprogram_d_.blessedprogram.md#no_color_video)
* [no_correctly_working_cr](_declarations_blessedprogram_d_.blessedprogram.md#no_correctly_working_cr)
* [no_esc_ctlc](_declarations_blessedprogram_d_.blessedprogram.md#no_esc_ctlc)
* [no_pad_char](_declarations_blessedprogram_d_.blessedprogram.md#no_pad_char)
* [non_dest_scroll_region](_declarations_blessedprogram_d_.blessedprogram.md#non_dest_scroll_region)
* [non_rev_rmcup](_declarations_blessedprogram_d_.blessedprogram.md#non_rev_rmcup)
* [npc](_declarations_blessedprogram_d_.blessedprogram.md#npc)
* [npins](_declarations_blessedprogram_d_.blessedprogram.md#npins)
* [nrrmc](_declarations_blessedprogram_d_.blessedprogram.md#nrrmc)
* [num_labels](_declarations_blessedprogram_d_.blessedprogram.md#num_labels)
* [number_of_function_keys](_declarations_blessedprogram_d_.blessedprogram.md#number_of_function_keys)
* [number_of_pins](_declarations_blessedprogram_d_.blessedprogram.md#number_of_pins)
* [numbers](_declarations_blessedprogram_d_.blessedprogram.md#numbers)
* [nxon](_declarations_blessedprogram_d_.blessedprogram.md#nxon)
* [options](_declarations_blessedprogram_d_.blessedprogram.md#options)
* [orc](_declarations_blessedprogram_d_.blessedprogram.md#orc)
* [orhi](_declarations_blessedprogram_d_.blessedprogram.md#orhi)
* [orl](_declarations_blessedprogram_d_.blessedprogram.md#orl)
* [orvi](_declarations_blessedprogram_d_.blessedprogram.md#orvi)
* [os](_declarations_blessedprogram_d_.blessedprogram.md#os)
* [output](_declarations_blessedprogram_d_.blessedprogram.md#output)
* [output_res_char](_declarations_blessedprogram_d_.blessedprogram.md#output_res_char)
* [output_res_horz_inch](_declarations_blessedprogram_d_.blessedprogram.md#output_res_horz_inch)
* [output_res_line](_declarations_blessedprogram_d_.blessedprogram.md#output_res_line)
* [output_res_vert_inch](_declarations_blessedprogram_d_.blessedprogram.md#output_res_vert_inch)
* [over_strike](_declarations_blessedprogram_d_.blessedprogram.md#over_strike)
* [padding](_declarations_blessedprogram_d_.blessedprogram.md#padding)
* [padding_baud_rate](_declarations_blessedprogram_d_.blessedprogram.md#padding_baud_rate)
* [pairs](_declarations_blessedprogram_d_.blessedprogram.md#pairs)
* [pb](_declarations_blessedprogram_d_.blessedprogram.md#pb)
* [print_rate](_declarations_blessedprogram_d_.blessedprogram.md#print_rate)
* [printf](_declarations_blessedprogram_d_.blessedprogram.md#printf)
* [prtr_silent](_declarations_blessedprogram_d_.blessedprogram.md#prtr_silent)
* [put](_declarations_blessedprogram_d_.blessedprogram.md#put)
* [restoreReportedCursor](_declarations_blessedprogram_d_.blessedprogram.md#restorereportedcursor)
* [resume](_declarations_blessedprogram_d_.blessedprogram.md#resume)
* [return_does_clr_eol](_declarations_blessedprogram_d_.blessedprogram.md#return_does_clr_eol)
* [row_addr_glitch](_declarations_blessedprogram_d_.blessedprogram.md#row_addr_glitch)
* [rows](_declarations_blessedprogram_d_.blessedprogram.md#rows)
* [sam](_declarations_blessedprogram_d_.blessedprogram.md#sam)
* [savedX](_declarations_blessedprogram_d_.blessedprogram.md#savedx)
* [savedY](_declarations_blessedprogram_d_.blessedprogram.md#savedy)
* [scrollBottom](_declarations_blessedprogram_d_.blessedprogram.md#scrollbottom)
* [scrollTop](_declarations_blessedprogram_d_.blessedprogram.md#scrolltop)
* [semi_auto_right_margin](_declarations_blessedprogram_d_.blessedprogram.md#semi_auto_right_margin)
* [setbuf](_declarations_blessedprogram_d_.blessedprogram.md#setbuf)
* [spinh](_declarations_blessedprogram_d_.blessedprogram.md#spinh)
* [spinv](_declarations_blessedprogram_d_.blessedprogram.md#spinv)
* [status_line_esc_ok](_declarations_blessedprogram_d_.blessedprogram.md#status_line_esc_ok)
* [strings](_declarations_blessedprogram_d_.blessedprogram.md#strings)
* [teleray_glitch](_declarations_blessedprogram_d_.blessedprogram.md#teleray_glitch)
* [termcap](_declarations_blessedprogram_d_.blessedprogram.md#termcap)
* [termcapFile](_declarations_blessedprogram_d_.blessedprogram.md#termcapfile)
* [terminal](_declarations_blessedprogram_d_.blessedprogram.md#terminal)
* [terminfoFile](_declarations_blessedprogram_d_.blessedprogram.md#terminfofile)
* [terminfoPrefix](_declarations_blessedprogram_d_.blessedprogram.md#terminfoprefix)
* [tilde_glitch](_declarations_blessedprogram_d_.blessedprogram.md#tilde_glitch)
* [tmux](_declarations_blessedprogram_d_.blessedprogram.md#tmux)
* [tmuxVersion](_declarations_blessedprogram_d_.blessedprogram.md#tmuxversion)
* [tput](_declarations_blessedprogram_d_.blessedprogram.md#tput)
* [transparent_underline](_declarations_blessedprogram_d_.blessedprogram.md#transparent_underline)
* [type](_declarations_blessedprogram_d_.blessedprogram.md#type)
* [ul](_declarations_blessedprogram_d_.blessedprogram.md#ul)
* [unicode](_declarations_blessedprogram_d_.blessedprogram.md#unicode)
* [useBuffer](_declarations_blessedprogram_d_.blessedprogram.md#usebuffer)
* [virtual_terminal](_declarations_blessedprogram_d_.blessedprogram.md#virtual_terminal)
* [vt](_declarations_blessedprogram_d_.blessedprogram.md#vt)
* [widcs](_declarations_blessedprogram_d_.blessedprogram.md#widcs)
* [wide_char_size](_declarations_blessedprogram_d_.blessedprogram.md#wide_char_size)
* [width_status_line](_declarations_blessedprogram_d_.blessedprogram.md#width_status_line)
* [wnum](_declarations_blessedprogram_d_.blessedprogram.md#wnum)
* [wsl](_declarations_blessedprogram_d_.blessedprogram.md#wsl)
* [x](_declarations_blessedprogram_d_.blessedprogram.md#x)
* [xenl](_declarations_blessedprogram_d_.blessedprogram.md#xenl)
* [xhp](_declarations_blessedprogram_d_.blessedprogram.md#xhp)
* [xhpa](_declarations_blessedprogram_d_.blessedprogram.md#xhpa)
* [xmc](_declarations_blessedprogram_d_.blessedprogram.md#xmc)
* [xon](_declarations_blessedprogram_d_.blessedprogram.md#xon)
* [xon_xoff](_declarations_blessedprogram_d_.blessedprogram.md#xon_xoff)
* [xsb](_declarations_blessedprogram_d_.blessedprogram.md#xsb)
* [xt](_declarations_blessedprogram_d_.blessedprogram.md#xt)
* [xvpa](_declarations_blessedprogram_d_.blessedprogram.md#xvpa)
* [y](_declarations_blessedprogram_d_.blessedprogram.md#y)
* [zero](_declarations_blessedprogram_d_.blessedprogram.md#zero)
* [instances](_declarations_blessedprogram_d_.blessedprogram.md#static-instances)

### Methods

* [HPositionRelative](_declarations_blessedprogram_d_.blessedprogram.md#hpositionrelative)
* [HVPosition](_declarations_blessedprogram_d_.blessedprogram.md#hvposition)
* [VPositionRelative](_declarations_blessedprogram_d_.blessedprogram.md#vpositionrelative)
* [_attr](_declarations_blessedprogram_d_.blessedprogram.md#_attr)
* [_ncoords](_declarations_blessedprogram_d_.blessedprogram.md#_ncoords)
* [_write](_declarations_blessedprogram_d_.blessedprogram.md#_write)
* [acs_btee](_declarations_blessedprogram_d_.blessedprogram.md#acs_btee)
* [acs_chars](_declarations_blessedprogram_d_.blessedprogram.md#acs_chars)
* [acs_hline](_declarations_blessedprogram_d_.blessedprogram.md#acs_hline)
* [acs_llcorner](_declarations_blessedprogram_d_.blessedprogram.md#acs_llcorner)
* [acs_lrcorner](_declarations_blessedprogram_d_.blessedprogram.md#acs_lrcorner)
* [acs_ltee](_declarations_blessedprogram_d_.blessedprogram.md#acs_ltee)
* [acs_plus](_declarations_blessedprogram_d_.blessedprogram.md#acs_plus)
* [acs_rtee](_declarations_blessedprogram_d_.blessedprogram.md#acs_rtee)
* [acs_ttee](_declarations_blessedprogram_d_.blessedprogram.md#acs_ttee)
* [acs_ulcorner](_declarations_blessedprogram_d_.blessedprogram.md#acs_ulcorner)
* [acs_urcorner](_declarations_blessedprogram_d_.blessedprogram.md#acs_urcorner)
* [acs_vline](_declarations_blessedprogram_d_.blessedprogram.md#acs_vline)
* [addListener](_declarations_blessedprogram_d_.blessedprogram.md#addlistener)
* [ae](_declarations_blessedprogram_d_.blessedprogram.md#ae)
* [alt_scancode_esc](_declarations_blessedprogram_d_.blessedprogram.md#alt_scancode_esc)
* [alternate](_declarations_blessedprogram_d_.blessedprogram.md#alternate)
* [alternateBuffer](_declarations_blessedprogram_d_.blessedprogram.md#alternatebuffer)
* [arrow_key_map](_declarations_blessedprogram_d_.blessedprogram.md#arrow_key_map)
* [as](_declarations_blessedprogram_d_.blessedprogram.md#as)
* [back](_declarations_blessedprogram_d_.blessedprogram.md#back)
* [back_tab](_declarations_blessedprogram_d_.blessedprogram.md#back_tab)
* [backspace](_declarations_blessedprogram_d_.blessedprogram.md#backspace)
* [backspace_if_not_bs](_declarations_blessedprogram_d_.blessedprogram.md#backspace_if_not_bs)
* [bel](_declarations_blessedprogram_d_.blessedprogram.md#bel)
* [bell](_declarations_blessedprogram_d_.blessedprogram.md#bell)
* [bg](_declarations_blessedprogram_d_.blessedprogram.md#bg)
* [bicr](_declarations_blessedprogram_d_.blessedprogram.md#bicr)
* [bindMouse](_declarations_blessedprogram_d_.blessedprogram.md#bindmouse)
* [bindResponse](_declarations_blessedprogram_d_.blessedprogram.md#bindresponse)
* [binel](_declarations_blessedprogram_d_.blessedprogram.md#binel)
* [birep](_declarations_blessedprogram_d_.blessedprogram.md#birep)
* [bit_image_carriage_return](_declarations_blessedprogram_d_.blessedprogram.md#bit_image_carriage_return)
* [bit_image_newline](_declarations_blessedprogram_d_.blessedprogram.md#bit_image_newline)
* [bit_image_repeat](_declarations_blessedprogram_d_.blessedprogram.md#bit_image_repeat)
* [blink](_declarations_blessedprogram_d_.blessedprogram.md#blink)
* [bold](_declarations_blessedprogram_d_.blessedprogram.md#bold)
* [box_chars_1](_declarations_blessedprogram_d_.blessedprogram.md#box_chars_1)
* [carriage_return](_declarations_blessedprogram_d_.blessedprogram.md#carriage_return)
* [cbt](_declarations_blessedprogram_d_.blessedprogram.md#cbt)
* [cha](_declarations_blessedprogram_d_.blessedprogram.md#cha)
* [change_char_pitch](_declarations_blessedprogram_d_.blessedprogram.md#change_char_pitch)
* [change_line_pitch](_declarations_blessedprogram_d_.blessedprogram.md#change_line_pitch)
* [change_res_horz](_declarations_blessedprogram_d_.blessedprogram.md#change_res_horz)
* [change_res_vert](_declarations_blessedprogram_d_.blessedprogram.md#change_res_vert)
* [change_scroll_region](_declarations_blessedprogram_d_.blessedprogram.md#change_scroll_region)
* [charAttributes](_declarations_blessedprogram_d_.blessedprogram.md#charattributes)
* [charPosAbsolute](_declarations_blessedprogram_d_.blessedprogram.md#charposabsolute)
* [char_padding](_declarations_blessedprogram_d_.blessedprogram.md#char_padding)
* [char_set_names](_declarations_blessedprogram_d_.blessedprogram.md#char_set_names)
* [charset](_declarations_blessedprogram_d_.blessedprogram.md#charset)
* [chr](_declarations_blessedprogram_d_.blessedprogram.md#chr)
* [cht](_declarations_blessedprogram_d_.blessedprogram.md#cht)
* [civis](_declarations_blessedprogram_d_.blessedprogram.md#civis)
* [clear](_declarations_blessedprogram_d_.blessedprogram.md#clear)
* [clear_all_tabs](_declarations_blessedprogram_d_.blessedprogram.md#clear_all_tabs)
* [clear_margins](_declarations_blessedprogram_d_.blessedprogram.md#clear_margins)
* [clear_screen](_declarations_blessedprogram_d_.blessedprogram.md#clear_screen)
* [clr_bol](_declarations_blessedprogram_d_.blessedprogram.md#clr_bol)
* [clr_eol](_declarations_blessedprogram_d_.blessedprogram.md#clr_eol)
* [clr_eos](_declarations_blessedprogram_d_.blessedprogram.md#clr_eos)
* [cmdch](_declarations_blessedprogram_d_.blessedprogram.md#cmdch)
* [cnl](_declarations_blessedprogram_d_.blessedprogram.md#cnl)
* [cnorm](_declarations_blessedprogram_d_.blessedprogram.md#cnorm)
* [code_set_init](_declarations_blessedprogram_d_.blessedprogram.md#code_set_init)
* [color_names](_declarations_blessedprogram_d_.blessedprogram.md#color_names)
* [colornm](_declarations_blessedprogram_d_.blessedprogram.md#colornm)
* [column_address](_declarations_blessedprogram_d_.blessedprogram.md#column_address)
* [command_character](_declarations_blessedprogram_d_.blessedprogram.md#command_character)
* [copyRectangle](_declarations_blessedprogram_d_.blessedprogram.md#copyrectangle)
* [copyToClipboard](_declarations_blessedprogram_d_.blessedprogram.md#copytoclipboard)
* [cpi](_declarations_blessedprogram_d_.blessedprogram.md#cpi)
* [cpl](_declarations_blessedprogram_d_.blessedprogram.md#cpl)
* [cr](_declarations_blessedprogram_d_.blessedprogram.md#cr)
* [create_window](_declarations_blessedprogram_d_.blessedprogram.md#create_window)
* [csin](_declarations_blessedprogram_d_.blessedprogram.md#csin)
* [csnm](_declarations_blessedprogram_d_.blessedprogram.md#csnm)
* [csr](_declarations_blessedprogram_d_.blessedprogram.md#csr)
* [cub](_declarations_blessedprogram_d_.blessedprogram.md#cub)
* [cub1](_declarations_blessedprogram_d_.blessedprogram.md#cub1)
* [cud](_declarations_blessedprogram_d_.blessedprogram.md#cud)
* [cud1](_declarations_blessedprogram_d_.blessedprogram.md#cud1)
* [cuf](_declarations_blessedprogram_d_.blessedprogram.md#cuf)
* [cuf1](_declarations_blessedprogram_d_.blessedprogram.md#cuf1)
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
* [cursor_address](_declarations_blessedprogram_d_.blessedprogram.md#cursor_address)
* [cursor_down](_declarations_blessedprogram_d_.blessedprogram.md#cursor_down)
* [cursor_home](_declarations_blessedprogram_d_.blessedprogram.md#cursor_home)
* [cursor_invisible](_declarations_blessedprogram_d_.blessedprogram.md#cursor_invisible)
* [cursor_left](_declarations_blessedprogram_d_.blessedprogram.md#cursor_left)
* [cursor_mem_address](_declarations_blessedprogram_d_.blessedprogram.md#cursor_mem_address)
* [cursor_normal](_declarations_blessedprogram_d_.blessedprogram.md#cursor_normal)
* [cursor_right](_declarations_blessedprogram_d_.blessedprogram.md#cursor_right)
* [cursor_to_ll](_declarations_blessedprogram_d_.blessedprogram.md#cursor_to_ll)
* [cursor_up](_declarations_blessedprogram_d_.blessedprogram.md#cursor_up)
* [cursor_visible](_declarations_blessedprogram_d_.blessedprogram.md#cursor_visible)
* [cuu](_declarations_blessedprogram_d_.blessedprogram.md#cuu)
* [cuu1](_declarations_blessedprogram_d_.blessedprogram.md#cuu1)
* [cvr](_declarations_blessedprogram_d_.blessedprogram.md#cvr)
* [cvvis](_declarations_blessedprogram_d_.blessedprogram.md#cvvis)
* [cwin](_declarations_blessedprogram_d_.blessedprogram.md#cwin)
* [da](_declarations_blessedprogram_d_.blessedprogram.md#da)
* [dch](_declarations_blessedprogram_d_.blessedprogram.md#dch)
* [dch1](_declarations_blessedprogram_d_.blessedprogram.md#dch1)
* [dclk](_declarations_blessedprogram_d_.blessedprogram.md#dclk)
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
* [defbi](_declarations_blessedprogram_d_.blessedprogram.md#defbi)
* [defc](_declarations_blessedprogram_d_.blessedprogram.md#defc)
* [define_bit_image_region](_declarations_blessedprogram_d_.blessedprogram.md#define_bit_image_region)
* [define_char](_declarations_blessedprogram_d_.blessedprogram.md#define_char)
* [deleteChars](_declarations_blessedprogram_d_.blessedprogram.md#deletechars)
* [deleteColumns](_declarations_blessedprogram_d_.blessedprogram.md#deletecolumns)
* [deleteLines](_declarations_blessedprogram_d_.blessedprogram.md#deletelines)
* [delete_character](_declarations_blessedprogram_d_.blessedprogram.md#delete_character)
* [delete_line](_declarations_blessedprogram_d_.blessedprogram.md#delete_line)
* [destroy](_declarations_blessedprogram_d_.blessedprogram.md#destroy)
* [deviceStatus](_declarations_blessedprogram_d_.blessedprogram.md#devicestatus)
* [device_type](_declarations_blessedprogram_d_.blessedprogram.md#device_type)
* [devt](_declarations_blessedprogram_d_.blessedprogram.md#devt)
* [dial](_declarations_blessedprogram_d_.blessedprogram.md#dial)
* [dial_phone](_declarations_blessedprogram_d_.blessedprogram.md#dial_phone)
* [dim](_declarations_blessedprogram_d_.blessedprogram.md#dim)
* [dis_status_line](_declarations_blessedprogram_d_.blessedprogram.md#dis_status_line)
* [disableGpm](_declarations_blessedprogram_d_.blessedprogram.md#disablegpm)
* [disableModifieres](_declarations_blessedprogram_d_.blessedprogram.md#disablemodifieres)
* [disableMouse](_declarations_blessedprogram_d_.blessedprogram.md#disablemouse)
* [dispc](_declarations_blessedprogram_d_.blessedprogram.md#dispc)
* [display_clock](_declarations_blessedprogram_d_.blessedprogram.md#display_clock)
* [display_pc_char](_declarations_blessedprogram_d_.blessedprogram.md#display_pc_char)
* [dl](_declarations_blessedprogram_d_.blessedprogram.md#dl)
* [dl1](_declarations_blessedprogram_d_.blessedprogram.md#dl1)
* [docr](_declarations_blessedprogram_d_.blessedprogram.md#docr)
* [down](_declarations_blessedprogram_d_.blessedprogram.md#down)
* [down_half_line](_declarations_blessedprogram_d_.blessedprogram.md#down_half_line)
* [dsl](_declarations_blessedprogram_d_.blessedprogram.md#dsl)
* [dsr](_declarations_blessedprogram_d_.blessedprogram.md#dsr)
* [dynamicColors](_declarations_blessedprogram_d_.blessedprogram.md#dynamiccolors)
* [ech](_declarations_blessedprogram_d_.blessedprogram.md#ech)
* [echo](_declarations_blessedprogram_d_.blessedprogram.md#echo)
* [ed](_declarations_blessedprogram_d_.blessedprogram.md#ed)
* [ehhlm](_declarations_blessedprogram_d_.blessedprogram.md#ehhlm)
* [el](_declarations_blessedprogram_d_.blessedprogram.md#el)
* [el1](_declarations_blessedprogram_d_.blessedprogram.md#el1)
* [elhlm](_declarations_blessedprogram_d_.blessedprogram.md#elhlm)
* [elohlm](_declarations_blessedprogram_d_.blessedprogram.md#elohlm)
* [emit](_declarations_blessedprogram_d_.blessedprogram.md#emit)
* [ena_acs](_declarations_blessedprogram_d_.blessedprogram.md#ena_acs)
* [enableFilterRectangle](_declarations_blessedprogram_d_.blessedprogram.md#enablefilterrectangle)
* [enableGpm](_declarations_blessedprogram_d_.blessedprogram.md#enablegpm)
* [enableLocatorReporting](_declarations_blessedprogram_d_.blessedprogram.md#enablelocatorreporting)
* [enableMouse](_declarations_blessedprogram_d_.blessedprogram.md#enablemouse)
* [enacs](_declarations_blessedprogram_d_.blessedprogram.md#enacs)
* [end_bit_image_region](_declarations_blessedprogram_d_.blessedprogram.md#end_bit_image_region)
* [endbi](_declarations_blessedprogram_d_.blessedprogram.md#endbi)
* [enter_alt_charset_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_alt_charset_mode)
* [enter_am_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_am_mode)
* [enter_blink_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_blink_mode)
* [enter_bold_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_bold_mode)
* [enter_ca_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_ca_mode)
* [enter_delete_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_delete_mode)
* [enter_dim_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_dim_mode)
* [enter_doublewide_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_doublewide_mode)
* [enter_draft_quality](_declarations_blessedprogram_d_.blessedprogram.md#enter_draft_quality)
* [enter_horizontal_hl_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_horizontal_hl_mode)
* [enter_insert_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_insert_mode)
* [enter_italics_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_italics_mode)
* [enter_left_hl_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_left_hl_mode)
* [enter_leftward_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_leftward_mode)
* [enter_low_hl_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_low_hl_mode)
* [enter_micro_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_micro_mode)
* [enter_near_letter_quality](_declarations_blessedprogram_d_.blessedprogram.md#enter_near_letter_quality)
* [enter_normal_quality](_declarations_blessedprogram_d_.blessedprogram.md#enter_normal_quality)
* [enter_pc_charset_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_pc_charset_mode)
* [enter_protected_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_protected_mode)
* [enter_reverse_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_reverse_mode)
* [enter_right_hl_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_right_hl_mode)
* [enter_scancode_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_scancode_mode)
* [enter_secure_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_secure_mode)
* [enter_shadow_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_shadow_mode)
* [enter_standout_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_standout_mode)
* [enter_subscript_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_subscript_mode)
* [enter_superscript_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_superscript_mode)
* [enter_top_hl_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_top_hl_mode)
* [enter_underline_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_underline_mode)
* [enter_upward_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_upward_mode)
* [enter_vertical_hl_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_vertical_hl_mode)
* [enter_xon_mode](_declarations_blessedprogram_d_.blessedprogram.md#enter_xon_mode)
* [eraseChars](_declarations_blessedprogram_d_.blessedprogram.md#erasechars)
* [eraseInDisplay](_declarations_blessedprogram_d_.blessedprogram.md#eraseindisplay)
* [eraseInLine](_declarations_blessedprogram_d_.blessedprogram.md#eraseinline)
* [eraseRectangle](_declarations_blessedprogram_d_.blessedprogram.md#eraserectangle)
* [erase_chars](_declarations_blessedprogram_d_.blessedprogram.md#erase_chars)
* [erhlm](_declarations_blessedprogram_d_.blessedprogram.md#erhlm)
* [ethlm](_declarations_blessedprogram_d_.blessedprogram.md#ethlm)
* [eventNames](_declarations_blessedprogram_d_.blessedprogram.md#eventnames)
* [evhlm](_declarations_blessedprogram_d_.blessedprogram.md#evhlm)
* [exit_alt_charset_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_alt_charset_mode)
* [exit_am_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_am_mode)
* [exit_attribute_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_attribute_mode)
* [exit_ca_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_ca_mode)
* [exit_delete_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_delete_mode)
* [exit_doublewide_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_doublewide_mode)
* [exit_insert_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_insert_mode)
* [exit_italics_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_italics_mode)
* [exit_leftward_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_leftward_mode)
* [exit_micro_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_micro_mode)
* [exit_pc_charset_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_pc_charset_mode)
* [exit_scancode_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_scancode_mode)
* [exit_shadow_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_shadow_mode)
* [exit_standout_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_standout_mode)
* [exit_subscript_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_subscript_mode)
* [exit_superscript_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_superscript_mode)
* [exit_underline_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_underline_mode)
* [exit_upward_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_upward_mode)
* [exit_xon_mode](_declarations_blessedprogram_d_.blessedprogram.md#exit_xon_mode)
* [feed](_declarations_blessedprogram_d_.blessedprogram.md#feed)
* [ff](_declarations_blessedprogram_d_.blessedprogram.md#ff)
* [fg](_declarations_blessedprogram_d_.blessedprogram.md#fg)
* [fillRectangle](_declarations_blessedprogram_d_.blessedprogram.md#fillrectangle)
* [fixed_pause](_declarations_blessedprogram_d_.blessedprogram.md#fixed_pause)
* [flash](_declarations_blessedprogram_d_.blessedprogram.md#flash)
* [flash_hook](_declarations_blessedprogram_d_.blessedprogram.md#flash_hook)
* [flash_screen](_declarations_blessedprogram_d_.blessedprogram.md#flash_screen)
* [fln](_declarations_blessedprogram_d_.blessedprogram.md#fln)
* [flush](_declarations_blessedprogram_d_.blessedprogram.md#flush)
* [form](_declarations_blessedprogram_d_.blessedprogram.md#form)
* [form_feed](_declarations_blessedprogram_d_.blessedprogram.md#form_feed)
* [forward](_declarations_blessedprogram_d_.blessedprogram.md#forward)
* [from_status_line](_declarations_blessedprogram_d_.blessedprogram.md#from_status_line)
* [fsl](_declarations_blessedprogram_d_.blessedprogram.md#fsl)
* [getCursor](_declarations_blessedprogram_d_.blessedprogram.md#getcursor)
* [getCursorColor](_declarations_blessedprogram_d_.blessedprogram.md#getcursorcolor)
* [getMaxListeners](_declarations_blessedprogram_d_.blessedprogram.md#getmaxlisteners)
* [getTextParams](_declarations_blessedprogram_d_.blessedprogram.md#gettextparams)
* [getWindowSize](_declarations_blessedprogram_d_.blessedprogram.md#getwindowsize)
* [get_mouse](_declarations_blessedprogram_d_.blessedprogram.md#get_mouse)
* [getm](_declarations_blessedprogram_d_.blessedprogram.md#getm)
* [goto_window](_declarations_blessedprogram_d_.blessedprogram.md#goto_window)
* [hangup](_declarations_blessedprogram_d_.blessedprogram.md#hangup)
* [has](_declarations_blessedprogram_d_.blessedprogram.md#has)
* [hd](_declarations_blessedprogram_d_.blessedprogram.md#hd)
* [hideCursor](_declarations_blessedprogram_d_.blessedprogram.md#hidecursor)
* [home](_declarations_blessedprogram_d_.blessedprogram.md#home)
* [hook](_declarations_blessedprogram_d_.blessedprogram.md#hook)
* [hpa](_declarations_blessedprogram_d_.blessedprogram.md#hpa)
* [ht](_declarations_blessedprogram_d_.blessedprogram.md#ht)
* [hts](_declarations_blessedprogram_d_.blessedprogram.md#hts)
* [hu](_declarations_blessedprogram_d_.blessedprogram.md#hu)
* [hup](_declarations_blessedprogram_d_.blessedprogram.md#hup)
* [hvp](_declarations_blessedprogram_d_.blessedprogram.md#hvp)
* [ich](_declarations_blessedprogram_d_.blessedprogram.md#ich)
* [ich1](_declarations_blessedprogram_d_.blessedprogram.md#ich1)
* [if](_declarations_blessedprogram_d_.blessedprogram.md#if)
* [il](_declarations_blessedprogram_d_.blessedprogram.md#il)
* [il1](_declarations_blessedprogram_d_.blessedprogram.md#il1)
* [ind](_declarations_blessedprogram_d_.blessedprogram.md#ind)
* [index](_declarations_blessedprogram_d_.blessedprogram.md#index)
* [indn](_declarations_blessedprogram_d_.blessedprogram.md#indn)
* [initMouseTracking](_declarations_blessedprogram_d_.blessedprogram.md#initmousetracking)
* [init_1string](_declarations_blessedprogram_d_.blessedprogram.md#init_1string)
* [init_2string](_declarations_blessedprogram_d_.blessedprogram.md#init_2string)
* [init_3string](_declarations_blessedprogram_d_.blessedprogram.md#init_3string)
* [init_file](_declarations_blessedprogram_d_.blessedprogram.md#init_file)
* [init_prog](_declarations_blessedprogram_d_.blessedprogram.md#init_prog)
* [initc](_declarations_blessedprogram_d_.blessedprogram.md#initc)
* [initialize_color](_declarations_blessedprogram_d_.blessedprogram.md#initialize_color)
* [initialize_pair](_declarations_blessedprogram_d_.blessedprogram.md#initialize_pair)
* [initp](_declarations_blessedprogram_d_.blessedprogram.md#initp)
* [insertChars](_declarations_blessedprogram_d_.blessedprogram.md#insertchars)
* [insertColumns](_declarations_blessedprogram_d_.blessedprogram.md#insertcolumns)
* [insertLines](_declarations_blessedprogram_d_.blessedprogram.md#insertlines)
* [insert_character](_declarations_blessedprogram_d_.blessedprogram.md#insert_character)
* [insert_line](_declarations_blessedprogram_d_.blessedprogram.md#insert_line)
* [insert_padding](_declarations_blessedprogram_d_.blessedprogram.md#insert_padding)
* [invis](_declarations_blessedprogram_d_.blessedprogram.md#invis)
* [ip](_declarations_blessedprogram_d_.blessedprogram.md#ip)
* [iprog](_declarations_blessedprogram_d_.blessedprogram.md#iprog)
* [is1](_declarations_blessedprogram_d_.blessedprogram.md#is1)
* [is2](_declarations_blessedprogram_d_.blessedprogram.md#is2)
* [is3](_declarations_blessedprogram_d_.blessedprogram.md#is3)
* [kBEG](_declarations_blessedprogram_d_.blessedprogram.md#kbeg)
* [kCAN](_declarations_blessedprogram_d_.blessedprogram.md#kcan)
* [kCMD](_declarations_blessedprogram_d_.blessedprogram.md#kcmd)
* [kCPY](_declarations_blessedprogram_d_.blessedprogram.md#kcpy)
* [kCRT](_declarations_blessedprogram_d_.blessedprogram.md#kcrt)
* [kDC](_declarations_blessedprogram_d_.blessedprogram.md#kdc)
* [kDL](_declarations_blessedprogram_d_.blessedprogram.md#kdl)
* [kEND](_declarations_blessedprogram_d_.blessedprogram.md#kend)
* [kEOL](_declarations_blessedprogram_d_.blessedprogram.md#keol)
* [kEXT](_declarations_blessedprogram_d_.blessedprogram.md#kext)
* [kFND](_declarations_blessedprogram_d_.blessedprogram.md#kfnd)
* [kHLP](_declarations_blessedprogram_d_.blessedprogram.md#khlp)
* [kHOM](_declarations_blessedprogram_d_.blessedprogram.md#khom)
* [kIC](_declarations_blessedprogram_d_.blessedprogram.md#kic)
* [kLFT](_declarations_blessedprogram_d_.blessedprogram.md#klft)
* [kMOV](_declarations_blessedprogram_d_.blessedprogram.md#kmov)
* [kMSG](_declarations_blessedprogram_d_.blessedprogram.md#kmsg)
* [kNXT](_declarations_blessedprogram_d_.blessedprogram.md#knxt)
* [kOPT](_declarations_blessedprogram_d_.blessedprogram.md#kopt)
* [kPRT](_declarations_blessedprogram_d_.blessedprogram.md#kprt)
* [kPRV](_declarations_blessedprogram_d_.blessedprogram.md#kprv)
* [kRDO](_declarations_blessedprogram_d_.blessedprogram.md#krdo)
* [kRES](_declarations_blessedprogram_d_.blessedprogram.md#kres)
* [kRIT](_declarations_blessedprogram_d_.blessedprogram.md#krit)
* [kRPL](_declarations_blessedprogram_d_.blessedprogram.md#krpl)
* [kSAV](_declarations_blessedprogram_d_.blessedprogram.md#ksav)
* [kSPD](_declarations_blessedprogram_d_.blessedprogram.md#kspd)
* [kUND](_declarations_blessedprogram_d_.blessedprogram.md#kund)
* [ka1](_declarations_blessedprogram_d_.blessedprogram.md#ka1)
* [ka3](_declarations_blessedprogram_d_.blessedprogram.md#ka3)
* [kb2](_declarations_blessedprogram_d_.blessedprogram.md#kb2)
* [kbeg](_declarations_blessedprogram_d_.blessedprogram.md#kbeg)
* [kbs](_declarations_blessedprogram_d_.blessedprogram.md#kbs)
* [kc1](_declarations_blessedprogram_d_.blessedprogram.md#kc1)
* [kc3](_declarations_blessedprogram_d_.blessedprogram.md#kc3)
* [kcan](_declarations_blessedprogram_d_.blessedprogram.md#kcan)
* [kcbt](_declarations_blessedprogram_d_.blessedprogram.md#kcbt)
* [kclo](_declarations_blessedprogram_d_.blessedprogram.md#kclo)
* [kclr](_declarations_blessedprogram_d_.blessedprogram.md#kclr)
* [kcmd](_declarations_blessedprogram_d_.blessedprogram.md#kcmd)
* [kcpy](_declarations_blessedprogram_d_.blessedprogram.md#kcpy)
* [kcrt](_declarations_blessedprogram_d_.blessedprogram.md#kcrt)
* [kctab](_declarations_blessedprogram_d_.blessedprogram.md#kctab)
* [kcub1](_declarations_blessedprogram_d_.blessedprogram.md#kcub1)
* [kcud1](_declarations_blessedprogram_d_.blessedprogram.md#kcud1)
* [kcuf1](_declarations_blessedprogram_d_.blessedprogram.md#kcuf1)
* [kcuu1](_declarations_blessedprogram_d_.blessedprogram.md#kcuu1)
* [kdch1](_declarations_blessedprogram_d_.blessedprogram.md#kdch1)
* [kdl1](_declarations_blessedprogram_d_.blessedprogram.md#kdl1)
* [ked](_declarations_blessedprogram_d_.blessedprogram.md#ked)
* [kel](_declarations_blessedprogram_d_.blessedprogram.md#kel)
* [kend](_declarations_blessedprogram_d_.blessedprogram.md#kend)
* [kent](_declarations_blessedprogram_d_.blessedprogram.md#kent)
* [kext](_declarations_blessedprogram_d_.blessedprogram.md#kext)
* [key](_declarations_blessedprogram_d_.blessedprogram.md#key)
* [key_a1](_declarations_blessedprogram_d_.blessedprogram.md#key_a1)
* [key_a3](_declarations_blessedprogram_d_.blessedprogram.md#key_a3)
* [key_b2](_declarations_blessedprogram_d_.blessedprogram.md#key_b2)
* [key_backspace](_declarations_blessedprogram_d_.blessedprogram.md#key_backspace)
* [key_beg](_declarations_blessedprogram_d_.blessedprogram.md#key_beg)
* [key_btab](_declarations_blessedprogram_d_.blessedprogram.md#key_btab)
* [key_c1](_declarations_blessedprogram_d_.blessedprogram.md#key_c1)
* [key_c3](_declarations_blessedprogram_d_.blessedprogram.md#key_c3)
* [key_cancel](_declarations_blessedprogram_d_.blessedprogram.md#key_cancel)
* [key_catab](_declarations_blessedprogram_d_.blessedprogram.md#key_catab)
* [key_clear](_declarations_blessedprogram_d_.blessedprogram.md#key_clear)
* [key_close](_declarations_blessedprogram_d_.blessedprogram.md#key_close)
* [key_command](_declarations_blessedprogram_d_.blessedprogram.md#key_command)
* [key_copy](_declarations_blessedprogram_d_.blessedprogram.md#key_copy)
* [key_create](_declarations_blessedprogram_d_.blessedprogram.md#key_create)
* [key_ctab](_declarations_blessedprogram_d_.blessedprogram.md#key_ctab)
* [key_dc](_declarations_blessedprogram_d_.blessedprogram.md#key_dc)
* [key_dl](_declarations_blessedprogram_d_.blessedprogram.md#key_dl)
* [key_down](_declarations_blessedprogram_d_.blessedprogram.md#key_down)
* [key_eic](_declarations_blessedprogram_d_.blessedprogram.md#key_eic)
* [key_end](_declarations_blessedprogram_d_.blessedprogram.md#key_end)
* [key_enter](_declarations_blessedprogram_d_.blessedprogram.md#key_enter)
* [key_eol](_declarations_blessedprogram_d_.blessedprogram.md#key_eol)
* [key_eos](_declarations_blessedprogram_d_.blessedprogram.md#key_eos)
* [key_exit](_declarations_blessedprogram_d_.blessedprogram.md#key_exit)
* [key_f0](_declarations_blessedprogram_d_.blessedprogram.md#key_f0)
* [key_f1](_declarations_blessedprogram_d_.blessedprogram.md#key_f1)
* [key_f10](_declarations_blessedprogram_d_.blessedprogram.md#key_f10)
* [key_f11](_declarations_blessedprogram_d_.blessedprogram.md#key_f11)
* [key_f12](_declarations_blessedprogram_d_.blessedprogram.md#key_f12)
* [key_f13](_declarations_blessedprogram_d_.blessedprogram.md#key_f13)
* [key_f14](_declarations_blessedprogram_d_.blessedprogram.md#key_f14)
* [key_f15](_declarations_blessedprogram_d_.blessedprogram.md#key_f15)
* [key_f16](_declarations_blessedprogram_d_.blessedprogram.md#key_f16)
* [key_f17](_declarations_blessedprogram_d_.blessedprogram.md#key_f17)
* [key_f18](_declarations_blessedprogram_d_.blessedprogram.md#key_f18)
* [key_f19](_declarations_blessedprogram_d_.blessedprogram.md#key_f19)
* [key_f2](_declarations_blessedprogram_d_.blessedprogram.md#key_f2)
* [key_f20](_declarations_blessedprogram_d_.blessedprogram.md#key_f20)
* [key_f21](_declarations_blessedprogram_d_.blessedprogram.md#key_f21)
* [key_f22](_declarations_blessedprogram_d_.blessedprogram.md#key_f22)
* [key_f23](_declarations_blessedprogram_d_.blessedprogram.md#key_f23)
* [key_f24](_declarations_blessedprogram_d_.blessedprogram.md#key_f24)
* [key_f25](_declarations_blessedprogram_d_.blessedprogram.md#key_f25)
* [key_f26](_declarations_blessedprogram_d_.blessedprogram.md#key_f26)
* [key_f27](_declarations_blessedprogram_d_.blessedprogram.md#key_f27)
* [key_f28](_declarations_blessedprogram_d_.blessedprogram.md#key_f28)
* [key_f29](_declarations_blessedprogram_d_.blessedprogram.md#key_f29)
* [key_f3](_declarations_blessedprogram_d_.blessedprogram.md#key_f3)
* [key_f30](_declarations_blessedprogram_d_.blessedprogram.md#key_f30)
* [key_f31](_declarations_blessedprogram_d_.blessedprogram.md#key_f31)
* [key_f32](_declarations_blessedprogram_d_.blessedprogram.md#key_f32)
* [key_f33](_declarations_blessedprogram_d_.blessedprogram.md#key_f33)
* [key_f34](_declarations_blessedprogram_d_.blessedprogram.md#key_f34)
* [key_f35](_declarations_blessedprogram_d_.blessedprogram.md#key_f35)
* [key_f36](_declarations_blessedprogram_d_.blessedprogram.md#key_f36)
* [key_f37](_declarations_blessedprogram_d_.blessedprogram.md#key_f37)
* [key_f38](_declarations_blessedprogram_d_.blessedprogram.md#key_f38)
* [key_f39](_declarations_blessedprogram_d_.blessedprogram.md#key_f39)
* [key_f4](_declarations_blessedprogram_d_.blessedprogram.md#key_f4)
* [key_f40](_declarations_blessedprogram_d_.blessedprogram.md#key_f40)
* [key_f41](_declarations_blessedprogram_d_.blessedprogram.md#key_f41)
* [key_f42](_declarations_blessedprogram_d_.blessedprogram.md#key_f42)
* [key_f43](_declarations_blessedprogram_d_.blessedprogram.md#key_f43)
* [key_f44](_declarations_blessedprogram_d_.blessedprogram.md#key_f44)
* [key_f45](_declarations_blessedprogram_d_.blessedprogram.md#key_f45)
* [key_f46](_declarations_blessedprogram_d_.blessedprogram.md#key_f46)
* [key_f47](_declarations_blessedprogram_d_.blessedprogram.md#key_f47)
* [key_f48](_declarations_blessedprogram_d_.blessedprogram.md#key_f48)
* [key_f49](_declarations_blessedprogram_d_.blessedprogram.md#key_f49)
* [key_f5](_declarations_blessedprogram_d_.blessedprogram.md#key_f5)
* [key_f50](_declarations_blessedprogram_d_.blessedprogram.md#key_f50)
* [key_f51](_declarations_blessedprogram_d_.blessedprogram.md#key_f51)
* [key_f52](_declarations_blessedprogram_d_.blessedprogram.md#key_f52)
* [key_f53](_declarations_blessedprogram_d_.blessedprogram.md#key_f53)
* [key_f54](_declarations_blessedprogram_d_.blessedprogram.md#key_f54)
* [key_f55](_declarations_blessedprogram_d_.blessedprogram.md#key_f55)
* [key_f56](_declarations_blessedprogram_d_.blessedprogram.md#key_f56)
* [key_f57](_declarations_blessedprogram_d_.blessedprogram.md#key_f57)
* [key_f58](_declarations_blessedprogram_d_.blessedprogram.md#key_f58)
* [key_f59](_declarations_blessedprogram_d_.blessedprogram.md#key_f59)
* [key_f6](_declarations_blessedprogram_d_.blessedprogram.md#key_f6)
* [key_f60](_declarations_blessedprogram_d_.blessedprogram.md#key_f60)
* [key_f61](_declarations_blessedprogram_d_.blessedprogram.md#key_f61)
* [key_f62](_declarations_blessedprogram_d_.blessedprogram.md#key_f62)
* [key_f63](_declarations_blessedprogram_d_.blessedprogram.md#key_f63)
* [key_f7](_declarations_blessedprogram_d_.blessedprogram.md#key_f7)
* [key_f8](_declarations_blessedprogram_d_.blessedprogram.md#key_f8)
* [key_f9](_declarations_blessedprogram_d_.blessedprogram.md#key_f9)
* [key_find](_declarations_blessedprogram_d_.blessedprogram.md#key_find)
* [key_help](_declarations_blessedprogram_d_.blessedprogram.md#key_help)
* [key_home](_declarations_blessedprogram_d_.blessedprogram.md#key_home)
* [key_ic](_declarations_blessedprogram_d_.blessedprogram.md#key_ic)
* [key_il](_declarations_blessedprogram_d_.blessedprogram.md#key_il)
* [key_left](_declarations_blessedprogram_d_.blessedprogram.md#key_left)
* [key_ll](_declarations_blessedprogram_d_.blessedprogram.md#key_ll)
* [key_mark](_declarations_blessedprogram_d_.blessedprogram.md#key_mark)
* [key_message](_declarations_blessedprogram_d_.blessedprogram.md#key_message)
* [key_mouse](_declarations_blessedprogram_d_.blessedprogram.md#key_mouse)
* [key_move](_declarations_blessedprogram_d_.blessedprogram.md#key_move)
* [key_next](_declarations_blessedprogram_d_.blessedprogram.md#key_next)
* [key_npage](_declarations_blessedprogram_d_.blessedprogram.md#key_npage)
* [key_open](_declarations_blessedprogram_d_.blessedprogram.md#key_open)
* [key_options](_declarations_blessedprogram_d_.blessedprogram.md#key_options)
* [key_ppage](_declarations_blessedprogram_d_.blessedprogram.md#key_ppage)
* [key_previous](_declarations_blessedprogram_d_.blessedprogram.md#key_previous)
* [key_print](_declarations_blessedprogram_d_.blessedprogram.md#key_print)
* [key_redo](_declarations_blessedprogram_d_.blessedprogram.md#key_redo)
* [key_reference](_declarations_blessedprogram_d_.blessedprogram.md#key_reference)
* [key_refresh](_declarations_blessedprogram_d_.blessedprogram.md#key_refresh)
* [key_replace](_declarations_blessedprogram_d_.blessedprogram.md#key_replace)
* [key_restart](_declarations_blessedprogram_d_.blessedprogram.md#key_restart)
* [key_resume](_declarations_blessedprogram_d_.blessedprogram.md#key_resume)
* [key_right](_declarations_blessedprogram_d_.blessedprogram.md#key_right)
* [key_save](_declarations_blessedprogram_d_.blessedprogram.md#key_save)
* [key_sbeg](_declarations_blessedprogram_d_.blessedprogram.md#key_sbeg)
* [key_scancel](_declarations_blessedprogram_d_.blessedprogram.md#key_scancel)
* [key_scommand](_declarations_blessedprogram_d_.blessedprogram.md#key_scommand)
* [key_scopy](_declarations_blessedprogram_d_.blessedprogram.md#key_scopy)
* [key_screate](_declarations_blessedprogram_d_.blessedprogram.md#key_screate)
* [key_sdc](_declarations_blessedprogram_d_.blessedprogram.md#key_sdc)
* [key_sdl](_declarations_blessedprogram_d_.blessedprogram.md#key_sdl)
* [key_select](_declarations_blessedprogram_d_.blessedprogram.md#key_select)
* [key_send](_declarations_blessedprogram_d_.blessedprogram.md#key_send)
* [key_seol](_declarations_blessedprogram_d_.blessedprogram.md#key_seol)
* [key_sexit](_declarations_blessedprogram_d_.blessedprogram.md#key_sexit)
* [key_sf](_declarations_blessedprogram_d_.blessedprogram.md#key_sf)
* [key_sfind](_declarations_blessedprogram_d_.blessedprogram.md#key_sfind)
* [key_shelp](_declarations_blessedprogram_d_.blessedprogram.md#key_shelp)
* [key_shome](_declarations_blessedprogram_d_.blessedprogram.md#key_shome)
* [key_sic](_declarations_blessedprogram_d_.blessedprogram.md#key_sic)
* [key_sleft](_declarations_blessedprogram_d_.blessedprogram.md#key_sleft)
* [key_smessage](_declarations_blessedprogram_d_.blessedprogram.md#key_smessage)
* [key_smove](_declarations_blessedprogram_d_.blessedprogram.md#key_smove)
* [key_snext](_declarations_blessedprogram_d_.blessedprogram.md#key_snext)
* [key_soptions](_declarations_blessedprogram_d_.blessedprogram.md#key_soptions)
* [key_sprevious](_declarations_blessedprogram_d_.blessedprogram.md#key_sprevious)
* [key_sprint](_declarations_blessedprogram_d_.blessedprogram.md#key_sprint)
* [key_sr](_declarations_blessedprogram_d_.blessedprogram.md#key_sr)
* [key_sredo](_declarations_blessedprogram_d_.blessedprogram.md#key_sredo)
* [key_sreplace](_declarations_blessedprogram_d_.blessedprogram.md#key_sreplace)
* [key_sright](_declarations_blessedprogram_d_.blessedprogram.md#key_sright)
* [key_srsume](_declarations_blessedprogram_d_.blessedprogram.md#key_srsume)
* [key_ssave](_declarations_blessedprogram_d_.blessedprogram.md#key_ssave)
* [key_ssuspend](_declarations_blessedprogram_d_.blessedprogram.md#key_ssuspend)
* [key_stab](_declarations_blessedprogram_d_.blessedprogram.md#key_stab)
* [key_sundo](_declarations_blessedprogram_d_.blessedprogram.md#key_sundo)
* [key_suspend](_declarations_blessedprogram_d_.blessedprogram.md#key_suspend)
* [key_undo](_declarations_blessedprogram_d_.blessedprogram.md#key_undo)
* [key_up](_declarations_blessedprogram_d_.blessedprogram.md#key_up)
* [keypad_local](_declarations_blessedprogram_d_.blessedprogram.md#keypad_local)
* [keypad_xmit](_declarations_blessedprogram_d_.blessedprogram.md#keypad_xmit)
* [kf0](_declarations_blessedprogram_d_.blessedprogram.md#kf0)
* [kf1](_declarations_blessedprogram_d_.blessedprogram.md#kf1)
* [kf10](_declarations_blessedprogram_d_.blessedprogram.md#kf10)
* [kf11](_declarations_blessedprogram_d_.blessedprogram.md#kf11)
* [kf12](_declarations_blessedprogram_d_.blessedprogram.md#kf12)
* [kf13](_declarations_blessedprogram_d_.blessedprogram.md#kf13)
* [kf14](_declarations_blessedprogram_d_.blessedprogram.md#kf14)
* [kf15](_declarations_blessedprogram_d_.blessedprogram.md#kf15)
* [kf16](_declarations_blessedprogram_d_.blessedprogram.md#kf16)
* [kf17](_declarations_blessedprogram_d_.blessedprogram.md#kf17)
* [kf18](_declarations_blessedprogram_d_.blessedprogram.md#kf18)
* [kf19](_declarations_blessedprogram_d_.blessedprogram.md#kf19)
* [kf2](_declarations_blessedprogram_d_.blessedprogram.md#kf2)
* [kf20](_declarations_blessedprogram_d_.blessedprogram.md#kf20)
* [kf21](_declarations_blessedprogram_d_.blessedprogram.md#kf21)
* [kf22](_declarations_blessedprogram_d_.blessedprogram.md#kf22)
* [kf23](_declarations_blessedprogram_d_.blessedprogram.md#kf23)
* [kf24](_declarations_blessedprogram_d_.blessedprogram.md#kf24)
* [kf25](_declarations_blessedprogram_d_.blessedprogram.md#kf25)
* [kf26](_declarations_blessedprogram_d_.blessedprogram.md#kf26)
* [kf27](_declarations_blessedprogram_d_.blessedprogram.md#kf27)
* [kf28](_declarations_blessedprogram_d_.blessedprogram.md#kf28)
* [kf29](_declarations_blessedprogram_d_.blessedprogram.md#kf29)
* [kf3](_declarations_blessedprogram_d_.blessedprogram.md#kf3)
* [kf30](_declarations_blessedprogram_d_.blessedprogram.md#kf30)
* [kf31](_declarations_blessedprogram_d_.blessedprogram.md#kf31)
* [kf32](_declarations_blessedprogram_d_.blessedprogram.md#kf32)
* [kf33](_declarations_blessedprogram_d_.blessedprogram.md#kf33)
* [kf34](_declarations_blessedprogram_d_.blessedprogram.md#kf34)
* [kf35](_declarations_blessedprogram_d_.blessedprogram.md#kf35)
* [kf36](_declarations_blessedprogram_d_.blessedprogram.md#kf36)
* [kf37](_declarations_blessedprogram_d_.blessedprogram.md#kf37)
* [kf38](_declarations_blessedprogram_d_.blessedprogram.md#kf38)
* [kf39](_declarations_blessedprogram_d_.blessedprogram.md#kf39)
* [kf4](_declarations_blessedprogram_d_.blessedprogram.md#kf4)
* [kf40](_declarations_blessedprogram_d_.blessedprogram.md#kf40)
* [kf41](_declarations_blessedprogram_d_.blessedprogram.md#kf41)
* [kf42](_declarations_blessedprogram_d_.blessedprogram.md#kf42)
* [kf43](_declarations_blessedprogram_d_.blessedprogram.md#kf43)
* [kf44](_declarations_blessedprogram_d_.blessedprogram.md#kf44)
* [kf45](_declarations_blessedprogram_d_.blessedprogram.md#kf45)
* [kf46](_declarations_blessedprogram_d_.blessedprogram.md#kf46)
* [kf47](_declarations_blessedprogram_d_.blessedprogram.md#kf47)
* [kf48](_declarations_blessedprogram_d_.blessedprogram.md#kf48)
* [kf49](_declarations_blessedprogram_d_.blessedprogram.md#kf49)
* [kf5](_declarations_blessedprogram_d_.blessedprogram.md#kf5)
* [kf50](_declarations_blessedprogram_d_.blessedprogram.md#kf50)
* [kf51](_declarations_blessedprogram_d_.blessedprogram.md#kf51)
* [kf52](_declarations_blessedprogram_d_.blessedprogram.md#kf52)
* [kf53](_declarations_blessedprogram_d_.blessedprogram.md#kf53)
* [kf54](_declarations_blessedprogram_d_.blessedprogram.md#kf54)
* [kf55](_declarations_blessedprogram_d_.blessedprogram.md#kf55)
* [kf56](_declarations_blessedprogram_d_.blessedprogram.md#kf56)
* [kf57](_declarations_blessedprogram_d_.blessedprogram.md#kf57)
* [kf58](_declarations_blessedprogram_d_.blessedprogram.md#kf58)
* [kf59](_declarations_blessedprogram_d_.blessedprogram.md#kf59)
* [kf6](_declarations_blessedprogram_d_.blessedprogram.md#kf6)
* [kf60](_declarations_blessedprogram_d_.blessedprogram.md#kf60)
* [kf61](_declarations_blessedprogram_d_.blessedprogram.md#kf61)
* [kf62](_declarations_blessedprogram_d_.blessedprogram.md#kf62)
* [kf63](_declarations_blessedprogram_d_.blessedprogram.md#kf63)
* [kf7](_declarations_blessedprogram_d_.blessedprogram.md#kf7)
* [kf8](_declarations_blessedprogram_d_.blessedprogram.md#kf8)
* [kf9](_declarations_blessedprogram_d_.blessedprogram.md#kf9)
* [kfnd](_declarations_blessedprogram_d_.blessedprogram.md#kfnd)
* [khlp](_declarations_blessedprogram_d_.blessedprogram.md#khlp)
* [khome](_declarations_blessedprogram_d_.blessedprogram.md#khome)
* [khts](_declarations_blessedprogram_d_.blessedprogram.md#khts)
* [kich1](_declarations_blessedprogram_d_.blessedprogram.md#kich1)
* [kil1](_declarations_blessedprogram_d_.blessedprogram.md#kil1)
* [kind](_declarations_blessedprogram_d_.blessedprogram.md#kind)
* [kll](_declarations_blessedprogram_d_.blessedprogram.md#kll)
* [kmous](_declarations_blessedprogram_d_.blessedprogram.md#kmous)
* [kmov](_declarations_blessedprogram_d_.blessedprogram.md#kmov)
* [kmrk](_declarations_blessedprogram_d_.blessedprogram.md#kmrk)
* [kmsg](_declarations_blessedprogram_d_.blessedprogram.md#kmsg)
* [knp](_declarations_blessedprogram_d_.blessedprogram.md#knp)
* [knxt](_declarations_blessedprogram_d_.blessedprogram.md#knxt)
* [kopn](_declarations_blessedprogram_d_.blessedprogram.md#kopn)
* [kopt](_declarations_blessedprogram_d_.blessedprogram.md#kopt)
* [kpp](_declarations_blessedprogram_d_.blessedprogram.md#kpp)
* [kprt](_declarations_blessedprogram_d_.blessedprogram.md#kprt)
* [kprv](_declarations_blessedprogram_d_.blessedprogram.md#kprv)
* [krdo](_declarations_blessedprogram_d_.blessedprogram.md#krdo)
* [kref](_declarations_blessedprogram_d_.blessedprogram.md#kref)
* [kres](_declarations_blessedprogram_d_.blessedprogram.md#kres)
* [krfr](_declarations_blessedprogram_d_.blessedprogram.md#krfr)
* [kri](_declarations_blessedprogram_d_.blessedprogram.md#kri)
* [krmir](_declarations_blessedprogram_d_.blessedprogram.md#krmir)
* [krpl](_declarations_blessedprogram_d_.blessedprogram.md#krpl)
* [krst](_declarations_blessedprogram_d_.blessedprogram.md#krst)
* [ksav](_declarations_blessedprogram_d_.blessedprogram.md#ksav)
* [kslt](_declarations_blessedprogram_d_.blessedprogram.md#kslt)
* [kspd](_declarations_blessedprogram_d_.blessedprogram.md#kspd)
* [ktbc](_declarations_blessedprogram_d_.blessedprogram.md#ktbc)
* [kund](_declarations_blessedprogram_d_.blessedprogram.md#kund)
* [lab_f0](_declarations_blessedprogram_d_.blessedprogram.md#lab_f0)
* [lab_f1](_declarations_blessedprogram_d_.blessedprogram.md#lab_f1)
* [lab_f10](_declarations_blessedprogram_d_.blessedprogram.md#lab_f10)
* [lab_f2](_declarations_blessedprogram_d_.blessedprogram.md#lab_f2)
* [lab_f3](_declarations_blessedprogram_d_.blessedprogram.md#lab_f3)
* [lab_f4](_declarations_blessedprogram_d_.blessedprogram.md#lab_f4)
* [lab_f5](_declarations_blessedprogram_d_.blessedprogram.md#lab_f5)
* [lab_f6](_declarations_blessedprogram_d_.blessedprogram.md#lab_f6)
* [lab_f7](_declarations_blessedprogram_d_.blessedprogram.md#lab_f7)
* [lab_f8](_declarations_blessedprogram_d_.blessedprogram.md#lab_f8)
* [lab_f9](_declarations_blessedprogram_d_.blessedprogram.md#lab_f9)
* [label_format](_declarations_blessedprogram_d_.blessedprogram.md#label_format)
* [label_off](_declarations_blessedprogram_d_.blessedprogram.md#label_off)
* [label_on](_declarations_blessedprogram_d_.blessedprogram.md#label_on)
* [left](_declarations_blessedprogram_d_.blessedprogram.md#left)
* [lf0](_declarations_blessedprogram_d_.blessedprogram.md#lf0)
* [lf1](_declarations_blessedprogram_d_.blessedprogram.md#lf1)
* [lf10](_declarations_blessedprogram_d_.blessedprogram.md#lf10)
* [lf2](_declarations_blessedprogram_d_.blessedprogram.md#lf2)
* [lf3](_declarations_blessedprogram_d_.blessedprogram.md#lf3)
* [lf4](_declarations_blessedprogram_d_.blessedprogram.md#lf4)
* [lf5](_declarations_blessedprogram_d_.blessedprogram.md#lf5)
* [lf6](_declarations_blessedprogram_d_.blessedprogram.md#lf6)
* [lf7](_declarations_blessedprogram_d_.blessedprogram.md#lf7)
* [lf8](_declarations_blessedprogram_d_.blessedprogram.md#lf8)
* [lf9](_declarations_blessedprogram_d_.blessedprogram.md#lf9)
* [lineHeight](_declarations_blessedprogram_d_.blessedprogram.md#lineheight)
* [linePosAbsolute](_declarations_blessedprogram_d_.blessedprogram.md#lineposabsolute)
* [linefeed_if_not_lf](_declarations_blessedprogram_d_.blessedprogram.md#linefeed_if_not_lf)
* [listen](_declarations_blessedprogram_d_.blessedprogram.md#listen)
* [listenerCount](_declarations_blessedprogram_d_.blessedprogram.md#listenercount)
* [listeners](_declarations_blessedprogram_d_.blessedprogram.md#listeners)
* [ll](_declarations_blessedprogram_d_.blessedprogram.md#ll)
* [loadLEDs](_declarations_blessedprogram_d_.blessedprogram.md#loadleds)
* [log](_declarations_blessedprogram_d_.blessedprogram.md#log)
* [lpi](_declarations_blessedprogram_d_.blessedprogram.md#lpi)
* [lrestoreCursor](_declarations_blessedprogram_d_.blessedprogram.md#lrestorecursor)
* [lsaveCursor](_declarations_blessedprogram_d_.blessedprogram.md#lsavecursor)
* [manipulateWindow](_declarations_blessedprogram_d_.blessedprogram.md#manipulatewindow)
* [mc](_declarations_blessedprogram_d_.blessedprogram.md#mc)
* [mc0](_declarations_blessedprogram_d_.blessedprogram.md#mc0)
* [mc4](_declarations_blessedprogram_d_.blessedprogram.md#mc4)
* [mc5](_declarations_blessedprogram_d_.blessedprogram.md#mc5)
* [mc5p](_declarations_blessedprogram_d_.blessedprogram.md#mc5p)
* [mcub](_declarations_blessedprogram_d_.blessedprogram.md#mcub)
* [mcub1](_declarations_blessedprogram_d_.blessedprogram.md#mcub1)
* [mcud](_declarations_blessedprogram_d_.blessedprogram.md#mcud)
* [mcud1](_declarations_blessedprogram_d_.blessedprogram.md#mcud1)
* [mcuf](_declarations_blessedprogram_d_.blessedprogram.md#mcuf)
* [mcuf1](_declarations_blessedprogram_d_.blessedprogram.md#mcuf1)
* [mcuu](_declarations_blessedprogram_d_.blessedprogram.md#mcuu)
* [mcuu1](_declarations_blessedprogram_d_.blessedprogram.md#mcuu1)
* [mediaCopy](_declarations_blessedprogram_d_.blessedprogram.md#mediacopy)
* [memory_lock](_declarations_blessedprogram_d_.blessedprogram.md#memory_lock)
* [memory_unlock](_declarations_blessedprogram_d_.blessedprogram.md#memory_unlock)
* [meta_off](_declarations_blessedprogram_d_.blessedprogram.md#meta_off)
* [meta_on](_declarations_blessedprogram_d_.blessedprogram.md#meta_on)
* [mgc](_declarations_blessedprogram_d_.blessedprogram.md#mgc)
* [mhpa](_declarations_blessedprogram_d_.blessedprogram.md#mhpa)
* [micro_column_address](_declarations_blessedprogram_d_.blessedprogram.md#micro_column_address)
* [micro_down](_declarations_blessedprogram_d_.blessedprogram.md#micro_down)
* [micro_left](_declarations_blessedprogram_d_.blessedprogram.md#micro_left)
* [micro_right](_declarations_blessedprogram_d_.blessedprogram.md#micro_right)
* [micro_row_address](_declarations_blessedprogram_d_.blessedprogram.md#micro_row_address)
* [micro_up](_declarations_blessedprogram_d_.blessedprogram.md#micro_up)
* [minfo](_declarations_blessedprogram_d_.blessedprogram.md#minfo)
* [mouse_info](_declarations_blessedprogram_d_.blessedprogram.md#mouse_info)
* [move](_declarations_blessedprogram_d_.blessedprogram.md#move)
* [mrcup](_declarations_blessedprogram_d_.blessedprogram.md#mrcup)
* [mvpa](_declarations_blessedprogram_d_.blessedprogram.md#mvpa)
* [nel](_declarations_blessedprogram_d_.blessedprogram.md#nel)
* [newline](_declarations_blessedprogram_d_.blessedprogram.md#newline)
* [nextLine](_declarations_blessedprogram_d_.blessedprogram.md#nextline)
* [nl](_declarations_blessedprogram_d_.blessedprogram.md#nl)
* [normalBuffer](_declarations_blessedprogram_d_.blessedprogram.md#normalbuffer)
* [nul](_declarations_blessedprogram_d_.blessedprogram.md#nul)
* [oc](_declarations_blessedprogram_d_.blessedprogram.md#oc)
* [off](_declarations_blessedprogram_d_.blessedprogram.md#off)
* [omove](_declarations_blessedprogram_d_.blessedprogram.md#omove)
* [on](_declarations_blessedprogram_d_.blessedprogram.md#on)
* [once](_declarations_blessedprogram_d_.blessedprogram.md#once)
* [onceKey](_declarations_blessedprogram_d_.blessedprogram.md#oncekey)
* [op](_declarations_blessedprogram_d_.blessedprogram.md#op)
* [order_of_pins](_declarations_blessedprogram_d_.blessedprogram.md#order_of_pins)
* [orig_colors](_declarations_blessedprogram_d_.blessedprogram.md#orig_colors)
* [orig_pair](_declarations_blessedprogram_d_.blessedprogram.md#orig_pair)
* [other_non_function_keys](_declarations_blessedprogram_d_.blessedprogram.md#other_non_function_keys)
* [out](_declarations_blessedprogram_d_.blessedprogram.md#out)
* [p0](_declarations_blessedprogram_d_.blessedprogram.md#p0)
* [pad](_declarations_blessedprogram_d_.blessedprogram.md#pad)
* [pad_char](_declarations_blessedprogram_d_.blessedprogram.md#pad_char)
* [parm_dch](_declarations_blessedprogram_d_.blessedprogram.md#parm_dch)
* [parm_delete_line](_declarations_blessedprogram_d_.blessedprogram.md#parm_delete_line)
* [parm_down_cursor](_declarations_blessedprogram_d_.blessedprogram.md#parm_down_cursor)
* [parm_down_micro](_declarations_blessedprogram_d_.blessedprogram.md#parm_down_micro)
* [parm_ich](_declarations_blessedprogram_d_.blessedprogram.md#parm_ich)
* [parm_index](_declarations_blessedprogram_d_.blessedprogram.md#parm_index)
* [parm_insert_line](_declarations_blessedprogram_d_.blessedprogram.md#parm_insert_line)
* [parm_left_cursor](_declarations_blessedprogram_d_.blessedprogram.md#parm_left_cursor)
* [parm_left_micro](_declarations_blessedprogram_d_.blessedprogram.md#parm_left_micro)
* [parm_right_cursor](_declarations_blessedprogram_d_.blessedprogram.md#parm_right_cursor)
* [parm_right_micro](_declarations_blessedprogram_d_.blessedprogram.md#parm_right_micro)
* [parm_rindex](_declarations_blessedprogram_d_.blessedprogram.md#parm_rindex)
* [parm_up_cursor](_declarations_blessedprogram_d_.blessedprogram.md#parm_up_cursor)
* [parm_up_micro](_declarations_blessedprogram_d_.blessedprogram.md#parm_up_micro)
* [parseTerminfo](_declarations_blessedprogram_d_.blessedprogram.md#parseterminfo)
* [pause](_declarations_blessedprogram_d_.blessedprogram.md#pause)
* [pc_term_options](_declarations_blessedprogram_d_.blessedprogram.md#pc_term_options)
* [pctrm](_declarations_blessedprogram_d_.blessedprogram.md#pctrm)
* [pf](_declarations_blessedprogram_d_.blessedprogram.md#pf)
* [pfkey](_declarations_blessedprogram_d_.blessedprogram.md#pfkey)
* [pfloc](_declarations_blessedprogram_d_.blessedprogram.md#pfloc)
* [pfx](_declarations_blessedprogram_d_.blessedprogram.md#pfx)
* [pfxl](_declarations_blessedprogram_d_.blessedprogram.md#pfxl)
* [pkey_key](_declarations_blessedprogram_d_.blessedprogram.md#pkey_key)
* [pkey_local](_declarations_blessedprogram_d_.blessedprogram.md#pkey_local)
* [pkey_plab](_declarations_blessedprogram_d_.blessedprogram.md#pkey_plab)
* [pkey_xmit](_declarations_blessedprogram_d_.blessedprogram.md#pkey_xmit)
* [plab_norm](_declarations_blessedprogram_d_.blessedprogram.md#plab_norm)
* [pln](_declarations_blessedprogram_d_.blessedprogram.md#pln)
* [po](_declarations_blessedprogram_d_.blessedprogram.md#po)
* [porder](_declarations_blessedprogram_d_.blessedprogram.md#porder)
* [pos](_declarations_blessedprogram_d_.blessedprogram.md#pos)
* [prependListener](_declarations_blessedprogram_d_.blessedprogram.md#prependlistener)
* [prependOnceListener](_declarations_blessedprogram_d_.blessedprogram.md#prependoncelistener)
* [print](_declarations_blessedprogram_d_.blessedprogram.md#print)
* [print_screen](_declarations_blessedprogram_d_.blessedprogram.md#print_screen)
* [prot](_declarations_blessedprogram_d_.blessedprogram.md#prot)
* [prtr_non](_declarations_blessedprogram_d_.blessedprogram.md#prtr_non)
* [prtr_off](_declarations_blessedprogram_d_.blessedprogram.md#prtr_off)
* [prtr_on](_declarations_blessedprogram_d_.blessedprogram.md#prtr_on)
* [ps](_declarations_blessedprogram_d_.blessedprogram.md#ps)
* [pulse](_declarations_blessedprogram_d_.blessedprogram.md#pulse)
* [qdial](_declarations_blessedprogram_d_.blessedprogram.md#qdial)
* [quick_dial](_declarations_blessedprogram_d_.blessedprogram.md#quick_dial)
* [rawListeners](_declarations_blessedprogram_d_.blessedprogram.md#rawlisteners)
* [rbim](_declarations_blessedprogram_d_.blessedprogram.md#rbim)
* [rc](_declarations_blessedprogram_d_.blessedprogram.md#rc)
* [rcA](_declarations_blessedprogram_d_.blessedprogram.md#rca)
* [rcsd](_declarations_blessedprogram_d_.blessedprogram.md#rcsd)
* [readTerminfo](_declarations_blessedprogram_d_.blessedprogram.md#readterminfo)
* [removeAllListeners](_declarations_blessedprogram_d_.blessedprogram.md#removealllisteners)
* [removeKey](_declarations_blessedprogram_d_.blessedprogram.md#removekey)
* [removeListener](_declarations_blessedprogram_d_.blessedprogram.md#removelistener)
* [remove_clock](_declarations_blessedprogram_d_.blessedprogram.md#remove_clock)
* [rep](_declarations_blessedprogram_d_.blessedprogram.md#rep)
* [repeat](_declarations_blessedprogram_d_.blessedprogram.md#repeat)
* [repeatPrecedingCharacter](_declarations_blessedprogram_d_.blessedprogram.md#repeatprecedingcharacter)
* [repeat_char](_declarations_blessedprogram_d_.blessedprogram.md#repeat_char)
* [req_for_input](_declarations_blessedprogram_d_.blessedprogram.md#req_for_input)
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
* [reset_1string](_declarations_blessedprogram_d_.blessedprogram.md#reset_1string)
* [reset_2string](_declarations_blessedprogram_d_.blessedprogram.md#reset_2string)
* [reset_3string](_declarations_blessedprogram_d_.blessedprogram.md#reset_3string)
* [reset_file](_declarations_blessedprogram_d_.blessedprogram.md#reset_file)
* [response](_declarations_blessedprogram_d_.blessedprogram.md#response)
* [restoreCursor](_declarations_blessedprogram_d_.blessedprogram.md#restorecursor)
* [restoreCursorA](_declarations_blessedprogram_d_.blessedprogram.md#restorecursora)
* [restorePrivateValues](_declarations_blessedprogram_d_.blessedprogram.md#restoreprivatevalues)
* [restore_cursor](_declarations_blessedprogram_d_.blessedprogram.md#restore_cursor)
* [return](_declarations_blessedprogram_d_.blessedprogram.md#return)
* [rev](_declarations_blessedprogram_d_.blessedprogram.md#rev)
* [reverse](_declarations_blessedprogram_d_.blessedprogram.md#reverse)
* [reverseAttrInRectangle](_declarations_blessedprogram_d_.blessedprogram.md#reverseattrinrectangle)
* [reverseIndex](_declarations_blessedprogram_d_.blessedprogram.md#reverseindex)
* [rf](_declarations_blessedprogram_d_.blessedprogram.md#rf)
* [rfi](_declarations_blessedprogram_d_.blessedprogram.md#rfi)
* [ri](_declarations_blessedprogram_d_.blessedprogram.md#ri)
* [right](_declarations_blessedprogram_d_.blessedprogram.md#right)
* [rin](_declarations_blessedprogram_d_.blessedprogram.md#rin)
* [ritm](_declarations_blessedprogram_d_.blessedprogram.md#ritm)
* [rlm](_declarations_blessedprogram_d_.blessedprogram.md#rlm)
* [rm](_declarations_blessedprogram_d_.blessedprogram.md#rm)
* [rmacs](_declarations_blessedprogram_d_.blessedprogram.md#rmacs)
* [rmam](_declarations_blessedprogram_d_.blessedprogram.md#rmam)
* [rmclk](_declarations_blessedprogram_d_.blessedprogram.md#rmclk)
* [rmcup](_declarations_blessedprogram_d_.blessedprogram.md#rmcup)
* [rmdc](_declarations_blessedprogram_d_.blessedprogram.md#rmdc)
* [rmicm](_declarations_blessedprogram_d_.blessedprogram.md#rmicm)
* [rmir](_declarations_blessedprogram_d_.blessedprogram.md#rmir)
* [rmkx](_declarations_blessedprogram_d_.blessedprogram.md#rmkx)
* [rmln](_declarations_blessedprogram_d_.blessedprogram.md#rmln)
* [rmm](_declarations_blessedprogram_d_.blessedprogram.md#rmm)
* [rmove](_declarations_blessedprogram_d_.blessedprogram.md#rmove)
* [rmp](_declarations_blessedprogram_d_.blessedprogram.md#rmp)
* [rmpch](_declarations_blessedprogram_d_.blessedprogram.md#rmpch)
* [rmsc](_declarations_blessedprogram_d_.blessedprogram.md#rmsc)
* [rmso](_declarations_blessedprogram_d_.blessedprogram.md#rmso)
* [rmul](_declarations_blessedprogram_d_.blessedprogram.md#rmul)
* [rmxon](_declarations_blessedprogram_d_.blessedprogram.md#rmxon)
* [row_address](_declarations_blessedprogram_d_.blessedprogram.md#row_address)
* [rs1](_declarations_blessedprogram_d_.blessedprogram.md#rs1)
* [rs2](_declarations_blessedprogram_d_.blessedprogram.md#rs2)
* [rs3](_declarations_blessedprogram_d_.blessedprogram.md#rs3)
* [rsetx](_declarations_blessedprogram_d_.blessedprogram.md#rsetx)
* [rsety](_declarations_blessedprogram_d_.blessedprogram.md#rsety)
* [rshm](_declarations_blessedprogram_d_.blessedprogram.md#rshm)
* [rsubm](_declarations_blessedprogram_d_.blessedprogram.md#rsubm)
* [rsupm](_declarations_blessedprogram_d_.blessedprogram.md#rsupm)
* [rum](_declarations_blessedprogram_d_.blessedprogram.md#rum)
* [rwidm](_declarations_blessedprogram_d_.blessedprogram.md#rwidm)
* [s0ds](_declarations_blessedprogram_d_.blessedprogram.md#s0ds)
* [s1ds](_declarations_blessedprogram_d_.blessedprogram.md#s1ds)
* [s2ds](_declarations_blessedprogram_d_.blessedprogram.md#s2ds)
* [s3ds](_declarations_blessedprogram_d_.blessedprogram.md#s3ds)
* [saveCursor](_declarations_blessedprogram_d_.blessedprogram.md#savecursor)
* [saveCursorA](_declarations_blessedprogram_d_.blessedprogram.md#savecursora)
* [savePrivateValues](_declarations_blessedprogram_d_.blessedprogram.md#saveprivatevalues)
* [saveReportedCursor](_declarations_blessedprogram_d_.blessedprogram.md#savereportedcursor)
* [save_cursor](_declarations_blessedprogram_d_.blessedprogram.md#save_cursor)
* [sbim](_declarations_blessedprogram_d_.blessedprogram.md#sbim)
* [sc](_declarations_blessedprogram_d_.blessedprogram.md#sc)
* [scA](_declarations_blessedprogram_d_.blessedprogram.md#sca)
* [scancode_escape](_declarations_blessedprogram_d_.blessedprogram.md#scancode_escape)
* [scesa](_declarations_blessedprogram_d_.blessedprogram.md#scesa)
* [scesc](_declarations_blessedprogram_d_.blessedprogram.md#scesc)
* [sclk](_declarations_blessedprogram_d_.blessedprogram.md#sclk)
* [scp](_declarations_blessedprogram_d_.blessedprogram.md#scp)
* [scrollDown](_declarations_blessedprogram_d_.blessedprogram.md#scrolldown)
* [scrollUp](_declarations_blessedprogram_d_.blessedprogram.md#scrollup)
* [scroll_forward](_declarations_blessedprogram_d_.blessedprogram.md#scroll_forward)
* [scroll_reverse](_declarations_blessedprogram_d_.blessedprogram.md#scroll_reverse)
* [scs](_declarations_blessedprogram_d_.blessedprogram.md#scs)
* [scsd](_declarations_blessedprogram_d_.blessedprogram.md#scsd)
* [sd](_declarations_blessedprogram_d_.blessedprogram.md#sd)
* [sdrfq](_declarations_blessedprogram_d_.blessedprogram.md#sdrfq)
* [selData](_declarations_blessedprogram_d_.blessedprogram.md#seldata)
* [selectChangeExtent](_declarations_blessedprogram_d_.blessedprogram.md#selectchangeextent)
* [select_char_set](_declarations_blessedprogram_d_.blessedprogram.md#select_char_set)
* [selectiveEraseRectangle](_declarations_blessedprogram_d_.blessedprogram.md#selectiveeraserectangle)
* [sendDeviceAttributes](_declarations_blessedprogram_d_.blessedprogram.md#senddeviceattributes)
* [set0_des_seq](_declarations_blessedprogram_d_.blessedprogram.md#set0_des_seq)
* [set1_des_seq](_declarations_blessedprogram_d_.blessedprogram.md#set1_des_seq)
* [set2_des_seq](_declarations_blessedprogram_d_.blessedprogram.md#set2_des_seq)
* [set3_des_seq](_declarations_blessedprogram_d_.blessedprogram.md#set3_des_seq)
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
* [set_a_attributes](_declarations_blessedprogram_d_.blessedprogram.md#set_a_attributes)
* [set_a_background](_declarations_blessedprogram_d_.blessedprogram.md#set_a_background)
* [set_a_foreground](_declarations_blessedprogram_d_.blessedprogram.md#set_a_foreground)
* [set_attributes](_declarations_blessedprogram_d_.blessedprogram.md#set_attributes)
* [set_background](_declarations_blessedprogram_d_.blessedprogram.md#set_background)
* [set_bottom_margin](_declarations_blessedprogram_d_.blessedprogram.md#set_bottom_margin)
* [set_bottom_margin_parm](_declarations_blessedprogram_d_.blessedprogram.md#set_bottom_margin_parm)
* [set_clock](_declarations_blessedprogram_d_.blessedprogram.md#set_clock)
* [set_color_band](_declarations_blessedprogram_d_.blessedprogram.md#set_color_band)
* [set_color_pair](_declarations_blessedprogram_d_.blessedprogram.md#set_color_pair)
* [set_foreground](_declarations_blessedprogram_d_.blessedprogram.md#set_foreground)
* [set_left_margin](_declarations_blessedprogram_d_.blessedprogram.md#set_left_margin)
* [set_left_margin_parm](_declarations_blessedprogram_d_.blessedprogram.md#set_left_margin_parm)
* [set_lr_margin](_declarations_blessedprogram_d_.blessedprogram.md#set_lr_margin)
* [set_page_length](_declarations_blessedprogram_d_.blessedprogram.md#set_page_length)
* [set_pglen_inch](_declarations_blessedprogram_d_.blessedprogram.md#set_pglen_inch)
* [set_right_margin](_declarations_blessedprogram_d_.blessedprogram.md#set_right_margin)
* [set_right_margin_parm](_declarations_blessedprogram_d_.blessedprogram.md#set_right_margin_parm)
* [set_tab](_declarations_blessedprogram_d_.blessedprogram.md#set_tab)
* [set_tb_margin](_declarations_blessedprogram_d_.blessedprogram.md#set_tb_margin)
* [set_top_margin](_declarations_blessedprogram_d_.blessedprogram.md#set_top_margin)
* [set_top_margin_parm](_declarations_blessedprogram_d_.blessedprogram.md#set_top_margin_parm)
* [set_window](_declarations_blessedprogram_d_.blessedprogram.md#set_window)
* [setab](_declarations_blessedprogram_d_.blessedprogram.md#setab)
* [setaf](_declarations_blessedprogram_d_.blessedprogram.md#setaf)
* [setb](_declarations_blessedprogram_d_.blessedprogram.md#setb)
* [setcolor](_declarations_blessedprogram_d_.blessedprogram.md#setcolor)
* [setf](_declarations_blessedprogram_d_.blessedprogram.md#setf)
* [setup](_declarations_blessedprogram_d_.blessedprogram.md#setup)
* [setupDump](_declarations_blessedprogram_d_.blessedprogram.md#setupdump)
* [setupTput](_declarations_blessedprogram_d_.blessedprogram.md#setuptput)
* [setx](_declarations_blessedprogram_d_.blessedprogram.md#setx)
* [sety](_declarations_blessedprogram_d_.blessedprogram.md#sety)
* [sgr](_declarations_blessedprogram_d_.blessedprogram.md#sgr)
* [sgr0](_declarations_blessedprogram_d_.blessedprogram.md#sgr0)
* [sgr1](_declarations_blessedprogram_d_.blessedprogram.md#sgr1)
* [shiftIn](_declarations_blessedprogram_d_.blessedprogram.md#shiftin)
* [shiftOut](_declarations_blessedprogram_d_.blessedprogram.md#shiftout)
* [showCursor](_declarations_blessedprogram_d_.blessedprogram.md#showcursor)
* [sigtstp](_declarations_blessedprogram_d_.blessedprogram.md#sigtstp)
* [simpleInsert](_declarations_blessedprogram_d_.blessedprogram.md#simpleinsert)
* [sitm](_declarations_blessedprogram_d_.blessedprogram.md#sitm)
* [slength](_declarations_blessedprogram_d_.blessedprogram.md#slength)
* [slines](_declarations_blessedprogram_d_.blessedprogram.md#slines)
* [slm](_declarations_blessedprogram_d_.blessedprogram.md#slm)
* [sm](_declarations_blessedprogram_d_.blessedprogram.md#sm)
* [smacs](_declarations_blessedprogram_d_.blessedprogram.md#smacs)
* [smam](_declarations_blessedprogram_d_.blessedprogram.md#smam)
* [smcup](_declarations_blessedprogram_d_.blessedprogram.md#smcup)
* [smdc](_declarations_blessedprogram_d_.blessedprogram.md#smdc)
* [smgb](_declarations_blessedprogram_d_.blessedprogram.md#smgb)
* [smgbp](_declarations_blessedprogram_d_.blessedprogram.md#smgbp)
* [smgl](_declarations_blessedprogram_d_.blessedprogram.md#smgl)
* [smglp](_declarations_blessedprogram_d_.blessedprogram.md#smglp)
* [smglr](_declarations_blessedprogram_d_.blessedprogram.md#smglr)
* [smgr](_declarations_blessedprogram_d_.blessedprogram.md#smgr)
* [smgrp](_declarations_blessedprogram_d_.blessedprogram.md#smgrp)
* [smgt](_declarations_blessedprogram_d_.blessedprogram.md#smgt)
* [smgtb](_declarations_blessedprogram_d_.blessedprogram.md#smgtb)
* [smgtp](_declarations_blessedprogram_d_.blessedprogram.md#smgtp)
* [smicm](_declarations_blessedprogram_d_.blessedprogram.md#smicm)
* [smir](_declarations_blessedprogram_d_.blessedprogram.md#smir)
* [smkx](_declarations_blessedprogram_d_.blessedprogram.md#smkx)
* [smln](_declarations_blessedprogram_d_.blessedprogram.md#smln)
* [smm](_declarations_blessedprogram_d_.blessedprogram.md#smm)
* [smpch](_declarations_blessedprogram_d_.blessedprogram.md#smpch)
* [smsc](_declarations_blessedprogram_d_.blessedprogram.md#smsc)
* [smso](_declarations_blessedprogram_d_.blessedprogram.md#smso)
* [smul](_declarations_blessedprogram_d_.blessedprogram.md#smul)
* [smxon](_declarations_blessedprogram_d_.blessedprogram.md#smxon)
* [snlq](_declarations_blessedprogram_d_.blessedprogram.md#snlq)
* [snrmq](_declarations_blessedprogram_d_.blessedprogram.md#snrmq)
* [softReset](_declarations_blessedprogram_d_.blessedprogram.md#softreset)
* [sshm](_declarations_blessedprogram_d_.blessedprogram.md#sshm)
* [ssubm](_declarations_blessedprogram_d_.blessedprogram.md#ssubm)
* [ssupm](_declarations_blessedprogram_d_.blessedprogram.md#ssupm)
* [start_bit_image](_declarations_blessedprogram_d_.blessedprogram.md#start_bit_image)
* [start_char_set_def](_declarations_blessedprogram_d_.blessedprogram.md#start_char_set_def)
* [stop_bit_image](_declarations_blessedprogram_d_.blessedprogram.md#stop_bit_image)
* [stop_char_set_def](_declarations_blessedprogram_d_.blessedprogram.md#stop_char_set_def)
* [su](_declarations_blessedprogram_d_.blessedprogram.md#su)
* [subcs](_declarations_blessedprogram_d_.blessedprogram.md#subcs)
* [subscript_characters](_declarations_blessedprogram_d_.blessedprogram.md#subscript_characters)
* [sum](_declarations_blessedprogram_d_.blessedprogram.md#sum)
* [supcs](_declarations_blessedprogram_d_.blessedprogram.md#supcs)
* [superscript_characters](_declarations_blessedprogram_d_.blessedprogram.md#superscript_characters)
* [swidm](_declarations_blessedprogram_d_.blessedprogram.md#swidm)
* [tab](_declarations_blessedprogram_d_.blessedprogram.md#tab)
* [tabClear](_declarations_blessedprogram_d_.blessedprogram.md#tabclear)
* [tabSet](_declarations_blessedprogram_d_.blessedprogram.md#tabset)
* [tbc](_declarations_blessedprogram_d_.blessedprogram.md#tbc)
* [term](_declarations_blessedprogram_d_.blessedprogram.md#term)
* [termcap_init2](_declarations_blessedprogram_d_.blessedprogram.md#termcap_init2)
* [termcap_reset](_declarations_blessedprogram_d_.blessedprogram.md#termcap_reset)
* [these_cause_cr](_declarations_blessedprogram_d_.blessedprogram.md#these_cause_cr)
* [to_status_line](_declarations_blessedprogram_d_.blessedprogram.md#to_status_line)
* [tone](_declarations_blessedprogram_d_.blessedprogram.md#tone)
* [tsl](_declarations_blessedprogram_d_.blessedprogram.md#tsl)
* [u0](_declarations_blessedprogram_d_.blessedprogram.md#u0)
* [u1](_declarations_blessedprogram_d_.blessedprogram.md#u1)
* [u2](_declarations_blessedprogram_d_.blessedprogram.md#u2)
* [u3](_declarations_blessedprogram_d_.blessedprogram.md#u3)
* [u4](_declarations_blessedprogram_d_.blessedprogram.md#u4)
* [u5](_declarations_blessedprogram_d_.blessedprogram.md#u5)
* [u6](_declarations_blessedprogram_d_.blessedprogram.md#u6)
* [u7](_declarations_blessedprogram_d_.blessedprogram.md#u7)
* [u8](_declarations_blessedprogram_d_.blessedprogram.md#u8)
* [u9](_declarations_blessedprogram_d_.blessedprogram.md#u9)
* [uc](_declarations_blessedprogram_d_.blessedprogram.md#uc)
* [unKey](_declarations_blessedprogram_d_.blessedprogram.md#unkey)
* [underline_char](_declarations_blessedprogram_d_.blessedprogram.md#underline_char)
* [up](_declarations_blessedprogram_d_.blessedprogram.md#up)
* [up_half_line](_declarations_blessedprogram_d_.blessedprogram.md#up_half_line)
* [user0](_declarations_blessedprogram_d_.blessedprogram.md#user0)
* [user1](_declarations_blessedprogram_d_.blessedprogram.md#user1)
* [user2](_declarations_blessedprogram_d_.blessedprogram.md#user2)
* [user3](_declarations_blessedprogram_d_.blessedprogram.md#user3)
* [user4](_declarations_blessedprogram_d_.blessedprogram.md#user4)
* [user5](_declarations_blessedprogram_d_.blessedprogram.md#user5)
* [user6](_declarations_blessedprogram_d_.blessedprogram.md#user6)
* [user7](_declarations_blessedprogram_d_.blessedprogram.md#user7)
* [user8](_declarations_blessedprogram_d_.blessedprogram.md#user8)
* [user9](_declarations_blessedprogram_d_.blessedprogram.md#user9)
* [vi](_declarations_blessedprogram_d_.blessedprogram.md#vi)
* [vpa](_declarations_blessedprogram_d_.blessedprogram.md#vpa)
* [vpr](_declarations_blessedprogram_d_.blessedprogram.md#vpr)
* [vtab](_declarations_blessedprogram_d_.blessedprogram.md#vtab)
* [wait](_declarations_blessedprogram_d_.blessedprogram.md#wait)
* [wait_tone](_declarations_blessedprogram_d_.blessedprogram.md#wait_tone)
* [wind](_declarations_blessedprogram_d_.blessedprogram.md#wind)
* [wingo](_declarations_blessedprogram_d_.blessedprogram.md#wingo)
* [write](_declarations_blessedprogram_d_.blessedprogram.md#write)
* [xoff_character](_declarations_blessedprogram_d_.blessedprogram.md#xoff_character)
* [xoffc](_declarations_blessedprogram_d_.blessedprogram.md#xoffc)
* [xon_character](_declarations_blessedprogram_d_.blessedprogram.md#xon_character)
* [xonc](_declarations_blessedprogram_d_.blessedprogram.md#xonc)
* [zero_motion](_declarations_blessedprogram_d_.blessedprogram.md#zero_motion)
* [zerom](_declarations_blessedprogram_d_.blessedprogram.md#zerom)

## Constructors

###  constructor

\+ **new BlessedProgram**(`options?`: [IBlessedProgramOptions](../interfaces/_declarations_blessedprogram_d_.iblessedprogramoptions.md)): *[BlessedProgram](_declarations_blessedprogram_d_.blessedprogram.md)*

*Overrides [Tput](_declarations_tput_d_.tput.md).[constructor](_declarations_tput_d_.tput.md#constructor)*

*Defined in [declarations/blessedProgram.d.ts:456](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L456)*

**Parameters:**

Name | Type |
------ | ------ |
`options?` | [IBlessedProgramOptions](../interfaces/_declarations_blessedprogram_d_.iblessedprogramoptions.md) |

**Returns:** *[BlessedProgram](_declarations_blessedprogram_d_.blessedprogram.md)*

## Properties

###  PCRomSet

• **PCRomSet**: *boolean*

*Implementation of [TputFeatures](../interfaces/_declarations_tput_d_.tputfeatures.md).[PCRomSet](../interfaces/_declarations_tput_d_.tputfeatures.md#pcromset)*

*Overrides [Tput](_declarations_tput_d_.tput.md).[PCRomSet](_declarations_tput_d_.tput.md#pcromset)*

*Defined in [declarations/blessedProgram.d.ts:378](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L378)*

___

###  _buf

• **_buf**: *string*

*Defined in [declarations/blessedProgram.d.ts:382](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L382)*

___

###  _terminal

• **_terminal**: *string*

*Defined in [declarations/blessedProgram.d.ts:381](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L381)*

___

###  _tputSetup

• **_tputSetup**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:293](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L293)*

___

###  acsc

• **acsc**: *object*

*Implementation of [TputFeatures](../interfaces/_declarations_tput_d_.tputfeatures.md).[acsc](../interfaces/_declarations_tput_d_.tputfeatures.md#acsc)*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[acsc](_declarations_tput_d_.tput.md#acsc)*

*Defined in [declarations/tput.d.ts:162](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L162)*

#### Type declaration:

* \[ **c**: *string*\]: string

___

###  acscr

• **acscr**: *object*

*Implementation of [TputFeatures](../interfaces/_declarations_tput_d_.tputfeatures.md).[acscr](../interfaces/_declarations_tput_d_.tputfeatures.md#acscr)*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[acscr](_declarations_tput_d_.tput.md#acscr)*

*Defined in [declarations/tput.d.ts:163](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L163)*

#### Type declaration:

* \[ **c**: *string*\]: string

___

###  all

• **all**: *object*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[all](_declarations_tput_d_.tput.md#all)*

*Defined in [declarations/tput.d.ts:241](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L241)*

#### Type declaration:

* \[ **cap**: *string*\]: any

___

###  am

• **am**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[am](_declarations_tput_d_.tput.md#am)*

*Defined in [declarations/blessedProgram.d.ts:339](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L339)*

___

###  auto_left_margin

• **auto_left_margin**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[auto_left_margin](_declarations_tput_d_.tput.md#auto_left_margin)*

*Defined in [declarations/blessedProgram.d.ts:294](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L294)*

___

###  auto_right_margin

• **auto_right_margin**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[auto_right_margin](_declarations_tput_d_.tput.md#auto_right_margin)*

*Defined in [declarations/blessedProgram.d.ts:295](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L295)*

___

###  back_color_erase

• **back_color_erase**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[back_color_erase](_declarations_tput_d_.tput.md#back_color_erase)*

*Defined in [declarations/blessedProgram.d.ts:322](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L322)*

___

###  backspace_delay

• **backspace_delay**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[backspace_delay](_declarations_tput_d_.tput.md#backspace_delay)*

*Defined in [declarations/blessedProgram.d.ts:421](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L421)*

___

###  backspaces_with_bs

• **backspaces_with_bs**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[backspaces_with_bs](_declarations_tput_d_.tput.md#backspaces_with_bs)*

*Defined in [declarations/blessedProgram.d.ts:331](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L331)*

___

###  bce

• **bce**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[bce](_declarations_tput_d_.tput.md#bce)*

*Defined in [declarations/blessedProgram.d.ts:367](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L367)*

___

###  beehive_glitch

• **beehive_glitch**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[beehive_glitch](_declarations_tput_d_.tput.md#beehive_glitch)*

*Defined in [declarations/blessedProgram.d.ts:341](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L341)*

___

###  bit_image_entwining

• **bit_image_entwining**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[bit_image_entwining](_declarations_tput_d_.tput.md#bit_image_entwining)*

*Defined in [declarations/blessedProgram.d.ts:416](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L416)*

___

###  bit_image_type

• **bit_image_type**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[bit_image_type](_declarations_tput_d_.tput.md#bit_image_type)*

*Defined in [declarations/blessedProgram.d.ts:417](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L417)*

___

###  bitwin

• **bitwin**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[bitwin](_declarations_tput_d_.tput.md#bitwin)*

*Defined in [declarations/blessedProgram.d.ts:455](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L455)*

___

###  bitype

• **bitype**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[bitype](_declarations_tput_d_.tput.md#bitype)*

*Defined in [declarations/blessedProgram.d.ts:456](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L456)*

___

###  bools

• **bools**: *object*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[bools](_declarations_tput_d_.tput.md#bools)*

*Defined in [declarations/tput.d.ts:243](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L243)*

#### Type declaration:

* \[ **cap**: *string*\]: any

___

###  brokenACS

• **brokenACS**: *boolean*

*Implementation of [TputFeatures](../interfaces/_declarations_tput_d_.tputfeatures.md).[brokenACS](../interfaces/_declarations_tput_d_.tputfeatures.md#brokenacs)*

*Overrides [Tput](_declarations_tput_d_.tput.md).[brokenACS](_declarations_tput_d_.tput.md#brokenacs)*

*Defined in [declarations/blessedProgram.d.ts:377](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L377)*

___

###  btns

• **btns**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[btns](_declarations_tput_d_.tput.md#btns)*

*Defined in [declarations/blessedProgram.d.ts:454](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L454)*

___

###  buffer_capacity

• **buffer_capacity**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[buffer_capacity](_declarations_tput_d_.tput.md#buffer_capacity)*

*Defined in [declarations/blessedProgram.d.ts:401](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L401)*

___

###  bufsz

• **bufsz**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[bufsz](_declarations_tput_d_.tput.md#bufsz)*

*Defined in [declarations/blessedProgram.d.ts:439](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L439)*

___

###  buttons

• **buttons**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[buttons](_declarations_tput_d_.tput.md#buttons)*

*Defined in [declarations/blessedProgram.d.ts:415](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L415)*

___

###  bw

• **bw**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[bw](_declarations_tput_d_.tput.md#bw)*

*Defined in [declarations/blessedProgram.d.ts:338](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L338)*

___

###  can_change

• **can_change**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[can_change](_declarations_tput_d_.tput.md#can_change)*

*Defined in [declarations/blessedProgram.d.ts:321](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L321)*

___

###  carriage_return_delay

• **carriage_return_delay**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[carriage_return_delay](_declarations_tput_d_.tput.md#carriage_return_delay)*

*Defined in [declarations/blessedProgram.d.ts:419](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L419)*

___

###  ccc

• **ccc**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[ccc](_declarations_tput_d_.tput.md#ccc)*

*Defined in [declarations/blessedProgram.d.ts:366](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L366)*

___

###  ceol_standout_glitch

• **ceol_standout_glitch**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[ceol_standout_glitch](_declarations_tput_d_.tput.md#ceol_standout_glitch)*

*Defined in [declarations/blessedProgram.d.ts:297](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L297)*

___

###  chts

• **chts**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[chts](_declarations_tput_d_.tput.md#chts)*

*Defined in [declarations/blessedProgram.d.ts:362](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L362)*

___

###  col_addr_glitch

• **col_addr_glitch**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[col_addr_glitch](_declarations_tput_d_.tput.md#col_addr_glitch)*

*Defined in [declarations/blessedProgram.d.ts:324](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L324)*

___

###  colors

• **colors**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[colors](_declarations_tput_d_.tput.md#colors)*

*Defined in [declarations/blessedProgram.d.ts:436](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L436)*

___

###  cols

• **cols**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[cols](_declarations_tput_d_.tput.md#cols)*

*Defined in [declarations/blessedProgram.d.ts:276](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L276)*

___

###  columns

• **columns**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[columns](_declarations_tput_d_.tput.md#columns)*

*Defined in [declarations/blessedProgram.d.ts:383](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L383)*

___

###  cpi_changes_res

• **cpi_changes_res**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[cpi_changes_res](_declarations_tput_d_.tput.md#cpi_changes_res)*

*Defined in [declarations/blessedProgram.d.ts:329](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L329)*

___

###  cpix

• **cpix**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[cpix](_declarations_tput_d_.tput.md#cpix)*

*Defined in [declarations/blessedProgram.d.ts:374](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L374)*

___

###  cps

• **cps**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[cps](_declarations_tput_d_.tput.md#cps)*

*Defined in [declarations/blessedProgram.d.ts:452](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L452)*

___

###  cr_cancels_micro_mode

• **cr_cancels_micro_mode**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[cr_cancels_micro_mode](_declarations_tput_d_.tput.md#cr_cancels_micro_mode)*

*Defined in [declarations/blessedProgram.d.ts:325](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L325)*

___

###  crt_no_scrolling

• **crt_no_scrolling**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[crt_no_scrolling](_declarations_tput_d_.tput.md#crt_no_scrolling)*

*Defined in [declarations/blessedProgram.d.ts:332](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L332)*

___

###  crxm

• **crxm**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[crxm](_declarations_tput_d_.tput.md#crxm)*

*Defined in [declarations/blessedProgram.d.ts:370](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L370)*

___

###  cursorHidden

• **cursorHidden**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:1550](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1550)*

___

###  daisy

• **daisy**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[daisy](_declarations_tput_d_.tput.md#daisy)*

*Defined in [declarations/blessedProgram.d.ts:371](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L371)*

___

###  db

• **db**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[db](_declarations_tput_d_.tput.md#db)*

*Defined in [declarations/blessedProgram.d.ts:350](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L350)*

___

###  dest_tabs_magic_smso

• **dest_tabs_magic_smso**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[dest_tabs_magic_smso](_declarations_tput_d_.tput.md#dest_tabs_magic_smso)*

*Defined in [declarations/blessedProgram.d.ts:311](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L311)*

___

###  dot_horz_spacing

• **dot_horz_spacing**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[dot_horz_spacing](_declarations_tput_d_.tput.md#dot_horz_spacing)*

*Defined in [declarations/blessedProgram.d.ts:403](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L403)*

___

###  dot_vert_spacing

• **dot_vert_spacing**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[dot_vert_spacing](_declarations_tput_d_.tput.md#dot_vert_spacing)*

*Defined in [declarations/blessedProgram.d.ts:402](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L402)*

___

###  eat_newline_glitch

• **eat_newline_glitch**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[eat_newline_glitch](_declarations_tput_d_.tput.md#eat_newline_glitch)*

*Defined in [declarations/blessedProgram.d.ts:298](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L298)*

___

###  eo

• **eo**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[eo](_declarations_tput_d_.tput.md#eo)*

*Defined in [declarations/blessedProgram.d.ts:344](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L344)*

___

###  erase_overstrike

• **erase_overstrike**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[erase_overstrike](_declarations_tput_d_.tput.md#erase_overstrike)*

*Defined in [declarations/blessedProgram.d.ts:299](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L299)*

___

###  error

• **error**: *Error*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[error](_declarations_tput_d_.tput.md#error)*

*Defined in [declarations/tput.d.ts:254](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L254)*

___

###  eslok

• **eslok**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[eslok](_declarations_tput_d_.tput.md#eslok)*

*Defined in [declarations/blessedProgram.d.ts:354](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L354)*

___

###  extended

• **extended**: *boolean*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[extended](_declarations_tput_d_.tput.md#extended)*

*Defined in [declarations/tput.d.ts:69](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L69)*

___

###  features

• **features**: *[TputFeatures](../interfaces/_declarations_tput_d_.tputfeatures.md)*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[features](_declarations_tput_d_.tput.md#features)*

*Defined in [declarations/tput.d.ts:246](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L246)*

___

###  generic_type

• **generic_type**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[generic_type](_declarations_tput_d_.tput.md#generic_type)*

*Defined in [declarations/blessedProgram.d.ts:300](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L300)*

___

###  gn

• **gn**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[gn](_declarations_tput_d_.tput.md#gn)*

*Defined in [declarations/blessedProgram.d.ts:345](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L345)*

___

###  gnu_has_meta_key

• **gnu_has_meta_key**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[gnu_has_meta_key](_declarations_tput_d_.tput.md#gnu_has_meta_key)*

*Defined in [declarations/blessedProgram.d.ts:334](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L334)*

___

### `Optional` gpm

• **gpm**? : *[GpmClient](../interfaces/_declarations_blessedprogram_d_.gpmclient.md)*

*Defined in [declarations/blessedProgram.d.ts:262](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L262)*

**`internal`** 

___

###  hard_copy

• **hard_copy**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[hard_copy](_declarations_tput_d_.tput.md#hard_copy)*

*Defined in [declarations/blessedProgram.d.ts:301](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L301)*

___

###  hard_cursor

• **hard_cursor**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[hard_cursor](_declarations_tput_d_.tput.md#hard_cursor)*

*Defined in [declarations/blessedProgram.d.ts:317](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L317)*

___

###  has_hardware_tabs

• **has_hardware_tabs**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[has_hardware_tabs](_declarations_tput_d_.tput.md#has_hardware_tabs)*

*Defined in [declarations/blessedProgram.d.ts:336](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L336)*

___

###  has_meta_key

• **has_meta_key**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[has_meta_key](_declarations_tput_d_.tput.md#has_meta_key)*

*Defined in [declarations/blessedProgram.d.ts:302](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L302)*

___

###  has_print_wheel

• **has_print_wheel**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[has_print_wheel](_declarations_tput_d_.tput.md#has_print_wheel)*

*Defined in [declarations/blessedProgram.d.ts:326](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L326)*

___

###  has_status_line

• **has_status_line**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[has_status_line](_declarations_tput_d_.tput.md#has_status_line)*

*Defined in [declarations/blessedProgram.d.ts:303](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L303)*

___

###  hc

• **hc**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[hc](_declarations_tput_d_.tput.md#hc)*

*Defined in [declarations/blessedProgram.d.ts:346](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L346)*

___

###  hls

• **hls**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[hls](_declarations_tput_d_.tput.md#hls)*

*Defined in [declarations/blessedProgram.d.ts:368](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L368)*

___

###  horizontal_tab_delay

• **horizontal_tab_delay**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[horizontal_tab_delay](_declarations_tput_d_.tput.md#horizontal_tab_delay)*

*Defined in [declarations/blessedProgram.d.ts:422](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L422)*

___

###  hs

• **hs**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[hs](_declarations_tput_d_.tput.md#hs)*

*Defined in [declarations/blessedProgram.d.ts:348](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L348)*

___

###  hue_lightness_saturation

• **hue_lightness_saturation**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[hue_lightness_saturation](_declarations_tput_d_.tput.md#hue_lightness_saturation)*

*Defined in [declarations/blessedProgram.d.ts:323](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L323)*

___

###  hz

• **hz**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[hz](_declarations_tput_d_.tput.md#hz)*

*Defined in [declarations/blessedProgram.d.ts:357](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L357)*

___

###  in

• **in**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[in](_declarations_tput_d_.tput.md#in)*

*Defined in [declarations/blessedProgram.d.ts:349](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L349)*

___

###  info

• **info**: *[TputInfo](../interfaces/_declarations_tput_d_.tputinfo.md)*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[info](_declarations_tput_d_.tput.md#info)*

*Defined in [declarations/tput.d.ts:240](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L240)*

___

###  init_tabs

• **init_tabs**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[init_tabs](_declarations_tput_d_.tput.md#init_tabs)*

*Defined in [declarations/blessedProgram.d.ts:384](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L384)*

___

###  input

• **input**: *Readable*

*Defined in [declarations/blessedProgram.d.ts:265](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L265)*

___

###  insert_null_glitch

• **insert_null_glitch**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[insert_null_glitch](_declarations_tput_d_.tput.md#insert_null_glitch)*

*Defined in [declarations/blessedProgram.d.ts:304](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L304)*

___

###  isAlt

• **isAlt**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:291](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L291)*

___

###  isLXDE

• **isLXDE**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:285](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L285)*

___

###  isOSXTerm

• **isOSXTerm**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:281](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L281)*

___

###  isRxvt

• **isRxvt**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:287](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L287)*

___

###  isTerminator

• **isTerminator**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:284](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L284)*

___

###  isVTE

• **isVTE**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:286](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L286)*

___

###  isXFCE

• **isXFCE**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:283](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L283)*

___

###  isXterm

• **isXterm**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:288](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L288)*

___

###  isiTerm2

• **isiTerm2**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:282](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L282)*

___

###  it

• **it**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[it](_declarations_tput_d_.tput.md#it)*

*Defined in [declarations/blessedProgram.d.ts:425](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L425)*

___

###  kNXT6

• **kNXT6**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[kNXT6](_declarations_tput_d_.tput.md#knxt6)*

*Defined in [declarations/blessedProgram.d.ts:398](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L398)*

___

###  kNXT7

• **kNXT7**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[kNXT7](_declarations_tput_d_.tput.md#knxt7)*

*Defined in [declarations/blessedProgram.d.ts:399](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L399)*

___

###  km

• **km**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[km](_declarations_tput_d_.tput.md#km)*

*Defined in [declarations/blessedProgram.d.ts:347](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L347)*

___

###  label_height

• **label_height**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[label_height](_declarations_tput_d_.tput.md#label_height)*

*Defined in [declarations/blessedProgram.d.ts:392](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L392)*

___

###  label_width

• **label_width**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[label_width](_declarations_tput_d_.tput.md#label_width)*

*Defined in [declarations/blessedProgram.d.ts:393](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L393)*

___

###  lh

• **lh**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[lh](_declarations_tput_d_.tput.md#lh)*

*Defined in [declarations/blessedProgram.d.ts:432](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L432)*

___

###  linefeed_is_newline

• **linefeed_is_newline**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[linefeed_is_newline](_declarations_tput_d_.tput.md#linefeed_is_newline)*

*Defined in [declarations/blessedProgram.d.ts:335](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L335)*

___

###  lines

• **lines**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[lines](_declarations_tput_d_.tput.md#lines)*

*Defined in [declarations/blessedProgram.d.ts:385](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L385)*

___

###  lines_of_memory

• **lines_of_memory**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[lines_of_memory](_declarations_tput_d_.tput.md#lines_of_memory)*

*Defined in [declarations/blessedProgram.d.ts:386](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L386)*

___

###  lm

• **lm**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[lm](_declarations_tput_d_.tput.md#lm)*

*Defined in [declarations/blessedProgram.d.ts:426](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L426)*

___

###  lpi_changes_res

• **lpi_changes_res**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[lpi_changes_res](_declarations_tput_d_.tput.md#lpi_changes_res)*

*Defined in [declarations/blessedProgram.d.ts:330](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L330)*

___

###  lpix

• **lpix**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[lpix](_declarations_tput_d_.tput.md#lpix)*

*Defined in [declarations/blessedProgram.d.ts:375](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L375)*

___

###  lw

• **lw**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[lw](_declarations_tput_d_.tput.md#lw)*

*Defined in [declarations/blessedProgram.d.ts:433](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L433)*

___

###  ma

• **ma**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[ma](_declarations_tput_d_.tput.md#ma)*

*Defined in [declarations/blessedProgram.d.ts:434](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L434)*

___

###  maddr

• **maddr**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[maddr](_declarations_tput_d_.tput.md#maddr)*

*Defined in [declarations/blessedProgram.d.ts:442](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L442)*

___

###  magicCookie

• **magicCookie**: *boolean*

*Implementation of [TputFeatures](../interfaces/_declarations_tput_d_.tputfeatures.md).[magicCookie](../interfaces/_declarations_tput_d_.tputfeatures.md#magiccookie)*

*Overrides [Tput](_declarations_tput_d_.tput.md).[magicCookie](_declarations_tput_d_.tput.md#magiccookie)*

*Defined in [declarations/blessedProgram.d.ts:379](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L379)*

___

###  magic_cookie_glitch

• **magic_cookie_glitch**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[magic_cookie_glitch](_declarations_tput_d_.tput.md#magic_cookie_glitch)*

*Defined in [declarations/blessedProgram.d.ts:387](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L387)*

___

###  magic_cookie_glitch_ul

• **magic_cookie_glitch_ul**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[magic_cookie_glitch_ul](_declarations_tput_d_.tput.md#magic_cookie_glitch_ul)*

*Defined in [declarations/blessedProgram.d.ts:418](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L418)*

___

###  max_attributes

• **max_attributes**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[max_attributes](_declarations_tput_d_.tput.md#max_attributes)*

*Defined in [declarations/blessedProgram.d.ts:394](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L394)*

___

###  max_colors

• **max_colors**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[max_colors](_declarations_tput_d_.tput.md#max_colors)*

*Defined in [declarations/blessedProgram.d.ts:396](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L396)*

___

###  max_micro_address

• **max_micro_address**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[max_micro_address](_declarations_tput_d_.tput.md#max_micro_address)*

*Defined in [declarations/blessedProgram.d.ts:404](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L404)*

___

###  max_micro_jump

• **max_micro_jump**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[max_micro_jump](_declarations_tput_d_.tput.md#max_micro_jump)*

*Defined in [declarations/blessedProgram.d.ts:405](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L405)*

___

###  max_pairs

• **max_pairs**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[max_pairs](_declarations_tput_d_.tput.md#max_pairs)*

*Defined in [declarations/blessedProgram.d.ts:397](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L397)*

___

###  maximum_windows

• **maximum_windows**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[maximum_windows](_declarations_tput_d_.tput.md#maximum_windows)*

*Defined in [declarations/blessedProgram.d.ts:395](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L395)*

___

###  mc5i

• **mc5i**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[mc5i](_declarations_tput_d_.tput.md#mc5i)*

*Defined in [declarations/blessedProgram.d.ts:361](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L361)*

___

###  mcs

• **mcs**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[mcs](_declarations_tput_d_.tput.md#mcs)*

*Defined in [declarations/blessedProgram.d.ts:444](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L444)*

___

###  memory_above

• **memory_above**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[memory_above](_declarations_tput_d_.tput.md#memory_above)*

*Defined in [declarations/blessedProgram.d.ts:305](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L305)*

___

###  memory_below

• **memory_below**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[memory_below](_declarations_tput_d_.tput.md#memory_below)*

*Defined in [declarations/blessedProgram.d.ts:306](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L306)*

___

###  methods

• **methods**: *object*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[methods](_declarations_tput_d_.tput.md#methods)*

*Defined in [declarations/tput.d.ts:242](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L242)*

#### Type declaration:

* \[ **cap**: *string*\]: any

___

###  micro_char_size

• **micro_char_size**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[micro_char_size](_declarations_tput_d_.tput.md#micro_char_size)*

*Defined in [declarations/blessedProgram.d.ts:445](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L445)*

___

###  micro_col_size

• **micro_col_size**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[micro_col_size](_declarations_tput_d_.tput.md#micro_col_size)*

*Defined in [declarations/blessedProgram.d.ts:406](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L406)*

___

###  micro_line_size

• **micro_line_size**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[micro_line_size](_declarations_tput_d_.tput.md#micro_line_size)*

*Defined in [declarations/blessedProgram.d.ts:407](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L407)*

___

###  mir

• **mir**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[mir](_declarations_tput_d_.tput.md#mir)*

*Defined in [declarations/blessedProgram.d.ts:351](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L351)*

___

###  mjump

• **mjump**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[mjump](_declarations_tput_d_.tput.md#mjump)*

*Defined in [declarations/blessedProgram.d.ts:443](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L443)*

___

###  mls

• **mls**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[mls](_declarations_tput_d_.tput.md#mls)*

*Defined in [declarations/blessedProgram.d.ts:446](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L446)*

___

###  mouseEnabled

• **mouseEnabled**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:1551](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1551)*

___

###  move_insert_mode

• **move_insert_mode**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[move_insert_mode](_declarations_tput_d_.tput.md#move_insert_mode)*

*Defined in [declarations/blessedProgram.d.ts:307](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L307)*

___

###  move_standout_mode

• **move_standout_mode**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[move_standout_mode](_declarations_tput_d_.tput.md#move_standout_mode)*

*Defined in [declarations/blessedProgram.d.ts:308](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L308)*

___

###  msgr

• **msgr**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[msgr](_declarations_tput_d_.tput.md#msgr)*

*Defined in [declarations/blessedProgram.d.ts:352](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L352)*

___

###  mux

• **mux**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:289](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L289)*

___

###  ncv

• **ncv**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[ncv](_declarations_tput_d_.tput.md#ncv)*

*Defined in [declarations/blessedProgram.d.ts:438](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L438)*

___

###  ndscr

• **ndscr**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[ndscr](_declarations_tput_d_.tput.md#ndscr)*

*Defined in [declarations/blessedProgram.d.ts:365](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L365)*

___

###  needs_xon_xoff

• **needs_xon_xoff**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[needs_xon_xoff](_declarations_tput_d_.tput.md#needs_xon_xoff)*

*Defined in [declarations/blessedProgram.d.ts:315](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L315)*

___

###  new_line_delay

• **new_line_delay**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[new_line_delay](_declarations_tput_d_.tput.md#new_line_delay)*

*Defined in [declarations/blessedProgram.d.ts:420](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L420)*

___

###  nlab

• **nlab**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[nlab](_declarations_tput_d_.tput.md#nlab)*

*Defined in [declarations/blessedProgram.d.ts:431](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L431)*

___

###  no_color_video

• **no_color_video**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[no_color_video](_declarations_tput_d_.tput.md#no_color_video)*

*Defined in [declarations/blessedProgram.d.ts:400](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L400)*

___

###  no_correctly_working_cr

• **no_correctly_working_cr**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[no_correctly_working_cr](_declarations_tput_d_.tput.md#no_correctly_working_cr)*

*Defined in [declarations/blessedProgram.d.ts:333](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L333)*

___

###  no_esc_ctlc

• **no_esc_ctlc**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[no_esc_ctlc](_declarations_tput_d_.tput.md#no_esc_ctlc)*

*Defined in [declarations/blessedProgram.d.ts:296](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L296)*

___

###  no_pad_char

• **no_pad_char**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[no_pad_char](_declarations_tput_d_.tput.md#no_pad_char)*

*Defined in [declarations/blessedProgram.d.ts:319](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L319)*

___

###  non_dest_scroll_region

• **non_dest_scroll_region**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[non_dest_scroll_region](_declarations_tput_d_.tput.md#non_dest_scroll_region)*

*Defined in [declarations/blessedProgram.d.ts:320](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L320)*

___

###  non_rev_rmcup

• **non_rev_rmcup**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[non_rev_rmcup](_declarations_tput_d_.tput.md#non_rev_rmcup)*

*Defined in [declarations/blessedProgram.d.ts:318](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L318)*

___

###  npc

• **npc**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[npc](_declarations_tput_d_.tput.md#npc)*

*Defined in [declarations/blessedProgram.d.ts:364](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L364)*

___

###  npins

• **npins**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[npins](_declarations_tput_d_.tput.md#npins)*

*Defined in [declarations/blessedProgram.d.ts:447](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L447)*

___

###  nrrmc

• **nrrmc**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[nrrmc](_declarations_tput_d_.tput.md#nrrmc)*

*Defined in [declarations/blessedProgram.d.ts:363](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L363)*

___

###  num_labels

• **num_labels**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[num_labels](_declarations_tput_d_.tput.md#num_labels)*

*Defined in [declarations/blessedProgram.d.ts:391](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L391)*

___

###  number_of_function_keys

• **number_of_function_keys**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[number_of_function_keys](_declarations_tput_d_.tput.md#number_of_function_keys)*

*Defined in [declarations/blessedProgram.d.ts:423](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L423)*

___

###  number_of_pins

• **number_of_pins**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[number_of_pins](_declarations_tput_d_.tput.md#number_of_pins)*

*Defined in [declarations/blessedProgram.d.ts:408](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L408)*

___

###  numbers

• **numbers**: *object*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[numbers](_declarations_tput_d_.tput.md#numbers)*

*Defined in [declarations/tput.d.ts:244](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L244)*

#### Type declaration:

* \[ **cap**: *string*\]: any

___

###  nxon

• **nxon**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[nxon](_declarations_tput_d_.tput.md#nxon)*

*Defined in [declarations/blessedProgram.d.ts:360](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L360)*

___

###  options

• **options**: *[IBlessedProgramOptions](../interfaces/_declarations_blessedprogram_d_.iblessedprogramoptions.md)*

*Implementation of [IHasOptions](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md).[options](../interfaces/_declarations_blessed_d_.widgets.ihasoptions.md#options)*

*Overrides [Tput](_declarations_tput_d_.tput.md).[options](_declarations_tput_d_.tput.md#options)*

*Defined in [declarations/blessedProgram.d.ts:264](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L264)*

___

###  orc

• **orc**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[orc](_declarations_tput_d_.tput.md#orc)*

*Defined in [declarations/blessedProgram.d.ts:448](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L448)*

___

###  orhi

• **orhi**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[orhi](_declarations_tput_d_.tput.md#orhi)*

*Defined in [declarations/blessedProgram.d.ts:450](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L450)*

___

###  orl

• **orl**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[orl](_declarations_tput_d_.tput.md#orl)*

*Defined in [declarations/blessedProgram.d.ts:449](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L449)*

___

###  orvi

• **orvi**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[orvi](_declarations_tput_d_.tput.md#orvi)*

*Defined in [declarations/blessedProgram.d.ts:451](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L451)*

___

###  os

• **os**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[os](_declarations_tput_d_.tput.md#os)*

*Defined in [declarations/blessedProgram.d.ts:353](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L353)*

___

###  output

• **output**: *Writable*

*Defined in [declarations/blessedProgram.d.ts:266](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L266)*

___

###  output_res_char

• **output_res_char**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[output_res_char](_declarations_tput_d_.tput.md#output_res_char)*

*Defined in [declarations/blessedProgram.d.ts:409](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L409)*

___

###  output_res_horz_inch

• **output_res_horz_inch**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[output_res_horz_inch](_declarations_tput_d_.tput.md#output_res_horz_inch)*

*Defined in [declarations/blessedProgram.d.ts:411](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L411)*

___

###  output_res_line

• **output_res_line**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[output_res_line](_declarations_tput_d_.tput.md#output_res_line)*

*Defined in [declarations/blessedProgram.d.ts:410](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L410)*

___

###  output_res_vert_inch

• **output_res_vert_inch**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[output_res_vert_inch](_declarations_tput_d_.tput.md#output_res_vert_inch)*

*Defined in [declarations/blessedProgram.d.ts:412](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L412)*

___

###  over_strike

• **over_strike**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[over_strike](_declarations_tput_d_.tput.md#over_strike)*

*Defined in [declarations/blessedProgram.d.ts:309](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L309)*

___

###  padding

• **padding**: *boolean*

*Implementation of [TputFeatures](../interfaces/_declarations_tput_d_.tputfeatures.md).[padding](../interfaces/_declarations_tput_d_.tputfeatures.md#padding)*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[padding](_declarations_tput_d_.tput.md#padding)*

*Defined in [declarations/tput.d.ts:249](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L249)*

___

###  padding_baud_rate

• **padding_baud_rate**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[padding_baud_rate](_declarations_tput_d_.tput.md#padding_baud_rate)*

*Defined in [declarations/blessedProgram.d.ts:388](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L388)*

___

###  pairs

• **pairs**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[pairs](_declarations_tput_d_.tput.md#pairs)*

*Defined in [declarations/blessedProgram.d.ts:437](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L437)*

___

###  pb

• **pb**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[pb](_declarations_tput_d_.tput.md#pb)*

*Defined in [declarations/blessedProgram.d.ts:428](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L428)*

___

###  print_rate

• **print_rate**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[print_rate](_declarations_tput_d_.tput.md#print_rate)*

*Defined in [declarations/blessedProgram.d.ts:413](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L413)*

___

###  printf

• **printf**: *boolean*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[printf](_declarations_tput_d_.tput.md#printf)*

*Defined in [declarations/tput.d.ts:250](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L250)*

___

###  prtr_silent

• **prtr_silent**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[prtr_silent](_declarations_tput_d_.tput.md#prtr_silent)*

*Defined in [declarations/blessedProgram.d.ts:316](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L316)*

___

###  put

• **put**: *object*

*Defined in [declarations/blessedProgram.d.ts:1549](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1549)*

it contains all tput operations bind to [input](_declarations_blessedprogram_d_.blessedprogram.md#input) so automatically call [_write](_declarations_blessedprogram_d_.blessedprogram.md#_write)  using the return value. Example:
`this.put.pad()` is the equivalent to `this._write(this.tput.pad())`.

#### Type declaration:

* \[ **s**: *string*\]: function

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

___

###  restoreReportedCursor

• **restoreReportedCursor**: *function*

*Defined in [declarations/blessedProgram.d.ts:893](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L893)*

#### Type declaration:

▸ (): *boolean*

___

###  resume

• **resume**: *function*

*Defined in [declarations/blessedProgram.d.ts:1629](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1629)*

#### Type declaration:

▸ (): *void*

___

###  return_does_clr_eol

• **return_does_clr_eol**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[return_does_clr_eol](_declarations_tput_d_.tput.md#return_does_clr_eol)*

*Defined in [declarations/blessedProgram.d.ts:337](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L337)*

___

###  row_addr_glitch

• **row_addr_glitch**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[row_addr_glitch](_declarations_tput_d_.tput.md#row_addr_glitch)*

*Defined in [declarations/blessedProgram.d.ts:327](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L327)*

___

###  rows

• **rows**: *number*

*Defined in [declarations/blessedProgram.d.ts:277](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L277)*

___

###  sam

• **sam**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[sam](_declarations_tput_d_.tput.md#sam)*

*Defined in [declarations/blessedProgram.d.ts:373](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L373)*

___

###  savedX

• **savedX**: *number*

*Defined in [declarations/blessedProgram.d.ts:274](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L274)*

___

###  savedY

• **savedY**: *number*

*Defined in [declarations/blessedProgram.d.ts:275](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L275)*

___

###  scrollBottom

• **scrollBottom**: *number*

*Defined in [declarations/blessedProgram.d.ts:280](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L280)*

___

###  scrollTop

• **scrollTop**: *number*

*Defined in [declarations/blessedProgram.d.ts:279](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L279)*

___

###  semi_auto_right_margin

• **semi_auto_right_margin**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[semi_auto_right_margin](_declarations_tput_d_.tput.md#semi_auto_right_margin)*

*Defined in [declarations/blessedProgram.d.ts:328](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L328)*

___

###  setbuf

• **setbuf**: *boolean*

*Implementation of [TputFeatures](../interfaces/_declarations_tput_d_.tputfeatures.md).[setbuf](../interfaces/_declarations_tput_d_.tputfeatures.md#setbuf)*

*Overrides [Tput](_declarations_tput_d_.tput.md).[setbuf](_declarations_tput_d_.tput.md#setbuf)*

*Defined in [declarations/blessedProgram.d.ts:380](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L380)*

___

###  spinh

• **spinh**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[spinh](_declarations_tput_d_.tput.md#spinh)*

*Defined in [declarations/blessedProgram.d.ts:441](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L441)*

___

###  spinv

• **spinv**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[spinv](_declarations_tput_d_.tput.md#spinv)*

*Defined in [declarations/blessedProgram.d.ts:440](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L440)*

___

###  status_line_esc_ok

• **status_line_esc_ok**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[status_line_esc_ok](_declarations_tput_d_.tput.md#status_line_esc_ok)*

*Defined in [declarations/blessedProgram.d.ts:310](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L310)*

___

###  strings

• **strings**: *object*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[strings](_declarations_tput_d_.tput.md#strings)*

*Defined in [declarations/tput.d.ts:245](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L245)*

#### Type declaration:

* \[ **cap**: *string*\]: any

___

###  teleray_glitch

• **teleray_glitch**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[teleray_glitch](_declarations_tput_d_.tput.md#teleray_glitch)*

*Defined in [declarations/blessedProgram.d.ts:356](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L356)*

___

###  termcap

• **termcap**: *boolean*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[termcap](_declarations_tput_d_.tput.md#termcap)*

*Defined in [declarations/tput.d.ts:70](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L70)*

___

###  termcapFile

• **termcapFile**: *string*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[termcapFile](_declarations_tput_d_.tput.md#termcapfile)*

*Defined in [declarations/tput.d.ts:253](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L253)*

___

###  terminal

• **terminal**: *string*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[terminal](_declarations_tput_d_.tput.md#terminal)*

*Defined in [declarations/tput.d.ts:160](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L160)*

___

###  terminfoFile

• **terminfoFile**: *string*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[terminfoFile](_declarations_tput_d_.tput.md#terminfofile)*

*Defined in [declarations/tput.d.ts:252](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L252)*

___

###  terminfoPrefix

• **terminfoPrefix**: *string*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[terminfoPrefix](_declarations_tput_d_.tput.md#terminfoprefix)*

*Defined in [declarations/tput.d.ts:251](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L251)*

___

###  tilde_glitch

• **tilde_glitch**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[tilde_glitch](_declarations_tput_d_.tput.md#tilde_glitch)*

*Defined in [declarations/blessedProgram.d.ts:312](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L312)*

___

###  tmux

• **tmux**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:292](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L292)*

___

###  tmuxVersion

• **tmuxVersion**: *number*

*Defined in [declarations/blessedProgram.d.ts:290](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L290)*

___

###  tput

• **tput**: *[Tput](_declarations_tput_d_.tput.md)*

*Defined in [declarations/blessedProgram.d.ts:278](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L278)*

___

###  transparent_underline

• **transparent_underline**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[transparent_underline](_declarations_tput_d_.tput.md#transparent_underline)*

*Defined in [declarations/blessedProgram.d.ts:313](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L313)*

___

###  type

• **type**: *string*

*Defined in [declarations/blessedProgram.d.ts:263](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L263)*

___

###  ul

• **ul**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[ul](_declarations_tput_d_.tput.md#ul)*

*Defined in [declarations/blessedProgram.d.ts:358](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L358)*

___

###  unicode

• **unicode**: *boolean*

*Implementation of [TputFeatures](../interfaces/_declarations_tput_d_.tputfeatures.md).[unicode](../interfaces/_declarations_tput_d_.tputfeatures.md#unicode)*

*Overrides [Tput](_declarations_tput_d_.tput.md).[unicode](_declarations_tput_d_.tput.md#unicode)*

*Defined in [declarations/blessedProgram.d.ts:376](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L376)*

___

###  useBuffer

• **useBuffer**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:271](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L271)*

___

###  virtual_terminal

• **virtual_terminal**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[virtual_terminal](_declarations_tput_d_.tput.md#virtual_terminal)*

*Defined in [declarations/blessedProgram.d.ts:389](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L389)*

___

###  vt

• **vt**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[vt](_declarations_tput_d_.tput.md#vt)*

*Defined in [declarations/blessedProgram.d.ts:429](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L429)*

___

###  widcs

• **widcs**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[widcs](_declarations_tput_d_.tput.md#widcs)*

*Defined in [declarations/blessedProgram.d.ts:453](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L453)*

___

###  wide_char_size

• **wide_char_size**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[wide_char_size](_declarations_tput_d_.tput.md#wide_char_size)*

*Defined in [declarations/blessedProgram.d.ts:414](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L414)*

___

###  width_status_line

• **width_status_line**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[width_status_line](_declarations_tput_d_.tput.md#width_status_line)*

*Defined in [declarations/blessedProgram.d.ts:390](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L390)*

___

###  wnum

• **wnum**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[wnum](_declarations_tput_d_.tput.md#wnum)*

*Defined in [declarations/blessedProgram.d.ts:435](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L435)*

___

###  wsl

• **wsl**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[wsl](_declarations_tput_d_.tput.md#wsl)*

*Defined in [declarations/blessedProgram.d.ts:430](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L430)*

___

###  x

• **x**: *number*

*Defined in [declarations/blessedProgram.d.ts:272](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L272)*

___

###  xenl

• **xenl**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[xenl](_declarations_tput_d_.tput.md#xenl)*

*Defined in [declarations/blessedProgram.d.ts:343](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L343)*

___

###  xhp

• **xhp**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[xhp](_declarations_tput_d_.tput.md#xhp)*

*Defined in [declarations/blessedProgram.d.ts:342](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L342)*

___

###  xhpa

• **xhpa**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[xhpa](_declarations_tput_d_.tput.md#xhpa)*

*Defined in [declarations/blessedProgram.d.ts:369](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L369)*

___

###  xmc

• **xmc**: *number*

*Overrides [Tput](_declarations_tput_d_.tput.md).[xmc](_declarations_tput_d_.tput.md#xmc)*

*Defined in [declarations/blessedProgram.d.ts:427](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L427)*

___

###  xon

• **xon**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[xon](_declarations_tput_d_.tput.md#xon)*

*Defined in [declarations/blessedProgram.d.ts:359](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L359)*

___

###  xon_xoff

• **xon_xoff**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[xon_xoff](_declarations_tput_d_.tput.md#xon_xoff)*

*Defined in [declarations/blessedProgram.d.ts:314](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L314)*

___

###  xsb

• **xsb**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[xsb](_declarations_tput_d_.tput.md#xsb)*

*Defined in [declarations/blessedProgram.d.ts:340](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L340)*

___

###  xt

• **xt**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[xt](_declarations_tput_d_.tput.md#xt)*

*Defined in [declarations/blessedProgram.d.ts:355](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L355)*

___

###  xvpa

• **xvpa**: *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[xvpa](_declarations_tput_d_.tput.md#xvpa)*

*Defined in [declarations/blessedProgram.d.ts:372](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L372)*

___

###  y

• **y**: *number*

*Defined in [declarations/blessedProgram.d.ts:273](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L273)*

___

###  zero

• **zero**: *boolean*

*Defined in [declarations/blessedProgram.d.ts:270](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L270)*

Is zero-based indexes for col, row values.

___

### `Static` instances

▪ **instances**: *[BlessedProgram](_declarations_blessedprogram_d_.blessedprogram.md)[]*

*Defined in [declarations/blessedProgram.d.ts:260](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L260)*

**`internal`** 

## Methods

###  HPositionRelative

▸ **HPositionRelative**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:926](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L926)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  HVPosition

▸ **HVPosition**(`row?`: number, `col?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:933](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L933)*

**Parameters:**

Name | Type |
------ | ------ |
`row?` | number |
`col?` | number |

**Returns:** *boolean*

___

###  VPositionRelative

▸ **VPositionRelative**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:931](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L931)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  _attr

▸ **_attr**(`attrs`: string | string[], `enable`: boolean): *string*

*Defined in [declarations/blessedProgram.d.ts:513](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L513)*

Returns the string with given attr enabled or disabled, for example:

```
program._write(program._attr('green fg', true) + 'GREEN' +
program._attr('green fg', false) + ' NORMAL')

program._write('\n\n' + program._attr(['yellow fg', 'bold', 'blue bg'], true) + 'bg, fg, bold' +
program._attr('default fg', true) + ' No FG ' +
program._attr('default bg', true) + ' No BG ' +
program._attr('bold', false) + ' No bold '
)
```

**Parameters:**

Name | Type |
------ | ------ |
`attrs` | string &#124; string[] |
`enable` | boolean |

**Returns:** *string*

___

###  _ncoords

▸ **_ncoords**(): *void*

*Defined in [declarations/blessedProgram.d.ts:635](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L635)*

**`internal`** 

**Returns:** *void*

___

###  _write

▸ **_write**(`text`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:498](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L498)*

Writes given string to [output](_declarations_blessedprogram_d_.blessedprogram.md#output) to the buffer.

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *boolean*

___

###  acs_btee

▸ **acs_btee**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[acs_btee](_declarations_tput_d_.tput.md#acs_btee)*

*Defined in [declarations/tput.d.ts:669](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L669)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  acs_chars

▸ **acs_chars**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[acs_chars](_declarations_tput_d_.tput.md#acs_chars)*

*Defined in [declarations/tput.d.ts:350](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L350)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  acs_hline

▸ **acs_hline**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[acs_hline](_declarations_tput_d_.tput.md#acs_hline)*

*Defined in [declarations/tput.d.ts:671](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L671)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  acs_llcorner

▸ **acs_llcorner**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[acs_llcorner](_declarations_tput_d_.tput.md#acs_llcorner)*

*Defined in [declarations/tput.d.ts:664](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L664)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  acs_lrcorner

▸ **acs_lrcorner**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[acs_lrcorner](_declarations_tput_d_.tput.md#acs_lrcorner)*

*Defined in [declarations/tput.d.ts:666](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L666)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  acs_ltee

▸ **acs_ltee**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[acs_ltee](_declarations_tput_d_.tput.md#acs_ltee)*

*Defined in [declarations/tput.d.ts:667](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L667)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  acs_plus

▸ **acs_plus**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[acs_plus](_declarations_tput_d_.tput.md#acs_plus)*

*Defined in [declarations/tput.d.ts:673](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L673)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  acs_rtee

▸ **acs_rtee**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[acs_rtee](_declarations_tput_d_.tput.md#acs_rtee)*

*Defined in [declarations/tput.d.ts:668](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L668)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  acs_ttee

▸ **acs_ttee**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[acs_ttee](_declarations_tput_d_.tput.md#acs_ttee)*

*Defined in [declarations/tput.d.ts:670](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L670)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  acs_ulcorner

▸ **acs_ulcorner**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[acs_ulcorner](_declarations_tput_d_.tput.md#acs_ulcorner)*

*Defined in [declarations/tput.d.ts:663](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L663)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  acs_urcorner

▸ **acs_urcorner**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[acs_urcorner](_declarations_tput_d_.tput.md#acs_urcorner)*

*Defined in [declarations/tput.d.ts:665](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L665)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  acs_vline

▸ **acs_vline**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[acs_vline](_declarations_tput_d_.tput.md#acs_vline)*

*Defined in [declarations/tput.d.ts:672](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L672)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  addListener

▸ **addListener**(`event`: string | symbol, `listener`: function): *this*

*Defined in [declarations/blessedProgram.d.ts:244](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L244)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  ae

▸ **ae**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:690](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L690)*

**Returns:** *boolean*

___

###  alt_scancode_esc

▸ **alt_scancode_esc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[alt_scancode_esc](_declarations_tput_d_.tput.md#alt_scancode_esc)*

*Defined in [declarations/tput.d.ts:648](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L648)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  alternate

▸ **alternate**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1045](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1045)*

**Returns:** *boolean*

___

###  alternateBuffer

▸ **alternateBuffer**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1043](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1043)*

**Returns:** *boolean*

___

###  arrow_key_map

▸ **arrow_key_map**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[arrow_key_map](_declarations_tput_d_.tput.md#arrow_key_map)*

*Defined in [declarations/tput.d.ts:662](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L662)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  as

▸ **as**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:687](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L687)*

**Returns:** *boolean*

___

###  back

▸ **back**(`n?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:734](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L734)*

**Parameters:**

Name | Type |
------ | ------ |
`n?` | number |

**Returns:** *boolean*

___

###  back_tab

▸ **back_tab**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[back_tab](_declarations_tput_d_.tput.md#back_tab)*

*Defined in [declarations/tput.d.ts:261](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L261)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  backspace

▸ **backspace**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:630](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L630)*

**Returns:** *boolean*

___

###  backspace_if_not_bs

▸ **backspace_if_not_bs**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[backspace_if_not_bs](_declarations_tput_d_.tput.md#backspace_if_not_bs)*

*Defined in [declarations/tput.d.ts:660](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L660)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  bel

▸ **bel**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[bel](_declarations_tput_d_.tput.md#bel)*

*Defined in [declarations/blessedProgram.d.ts:625](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L625)*

alias for [bell](_declarations_blessedprogram_d_.blessedprogram.md#bell)

**Returns:** *boolean*

___

###  bell

▸ **bell**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[bell](_declarations_tput_d_.tput.md#bell)*

*Defined in [declarations/blessedProgram.d.ts:623](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L623)*

Ring bell (beep)

**Returns:** *boolean*

___

###  bg

▸ **bg**(`color`: string, `val?`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:852](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L852)*

Alias for [setBackground](_declarations_blessedprogram_d_.blessedprogram.md#setbackground)

**Parameters:**

Name | Type |
------ | ------ |
`color` | string |
`val?` | string |

**Returns:** *boolean*

___

###  bicr

▸ **bicr**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[bicr](_declarations_tput_d_.tput.md#bicr)*

*Defined in [declarations/tput.d.ts:1044](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1044)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  bindMouse

▸ **bindMouse**(): *void*

*Defined in [declarations/blessedProgram.d.ts:479](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L479)*

**Returns:** *void*

___

###  bindResponse

▸ **bindResponse**(): *void*

*Defined in [declarations/blessedProgram.d.ts:488](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L488)*

**Returns:** *void*

___

###  binel

▸ **binel**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[binel](_declarations_tput_d_.tput.md#binel)*

*Defined in [declarations/tput.d.ts:1043](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1043)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  birep

▸ **birep**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[birep](_declarations_tput_d_.tput.md#birep)*

*Defined in [declarations/tput.d.ts:1042](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1042)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  bit_image_carriage_return

▸ **bit_image_carriage_return**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[bit_image_carriage_return](_declarations_tput_d_.tput.md#bit_image_carriage_return)*

*Defined in [declarations/tput.d.ts:635](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L635)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  bit_image_newline

▸ **bit_image_newline**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[bit_image_newline](_declarations_tput_d_.tput.md#bit_image_newline)*

*Defined in [declarations/tput.d.ts:634](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L634)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  bit_image_repeat

▸ **bit_image_repeat**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[bit_image_repeat](_declarations_tput_d_.tput.md#bit_image_repeat)*

*Defined in [declarations/tput.d.ts:633](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L633)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  blink

▸ **blink**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[blink](_declarations_tput_d_.tput.md#blink)*

*Defined in [declarations/tput.d.ts:696](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L696)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  bold

▸ **bold**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[bold](_declarations_tput_d_.tput.md#bold)*

*Defined in [declarations/tput.d.ts:697](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L697)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  box_chars_1

▸ **box_chars_1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[box_chars_1](_declarations_tput_d_.tput.md#box_chars_1)*

*Defined in [declarations/tput.d.ts:674](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L674)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  carriage_return

▸ **carriage_return**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[carriage_return](_declarations_tput_d_.tput.md#carriage_return)*

*Defined in [declarations/tput.d.ts:263](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L263)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cbt

▸ **cbt**(`param?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[cbt](_declarations_tput_d_.tput.md#cbt)*

*Defined in [declarations/blessedProgram.d.ts:1246](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1246)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  cha

▸ **cha**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:915](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L915)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  change_char_pitch

▸ **change_char_pitch**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[change_char_pitch](_declarations_tput_d_.tput.md#change_char_pitch)*

*Defined in [declarations/tput.d.ts:570](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L570)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  change_line_pitch

▸ **change_line_pitch**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[change_line_pitch](_declarations_tput_d_.tput.md#change_line_pitch)*

*Defined in [declarations/tput.d.ts:571](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L571)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  change_res_horz

▸ **change_res_horz**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[change_res_horz](_declarations_tput_d_.tput.md#change_res_horz)*

*Defined in [declarations/tput.d.ts:572](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L572)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  change_res_vert

▸ **change_res_vert**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[change_res_vert](_declarations_tput_d_.tput.md#change_res_vert)*

*Defined in [declarations/tput.d.ts:573](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L573)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  change_scroll_region

▸ **change_scroll_region**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[change_scroll_region](_declarations_tput_d_.tput.md#change_scroll_region)*

*Defined in [declarations/tput.d.ts:264](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L264)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  charAttributes

▸ **charAttributes**(`param`: string, `val?`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:818](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L818)*

```
CSI Pm m  Character Attributes (SGR).
Ps = 0  -> Normal (default).
Ps = 1  -> Bold.
Ps = 4  -> Underlined.
Ps = 5  -> Blink (appears as Bold).
Ps = 7  -> Inverse.
Ps = 8  -> Invisible, i.e., hidden (VT300).
Ps = 2 2  -> Normal (neither bold nor faint).
Ps = 2 4  -> Not underlined.
Ps = 2 5  -> Steady (not blinking).
Ps = 2 7  -> Positive (not inverse).
Ps = 2 8  -> Visible, i.e., not hidden (VT300).
Ps = 3 0  -> Set foreground color to Black.
Ps = 3 1  -> Set foreground color to Red.
Ps = 3 2  -> Set foreground color to Green.
Ps = 3 3  -> Set foreground color to Yellow.
Ps = 3 4  -> Set foreground color to Blue.
Ps = 3 5  -> Set foreground color to Magenta.
Ps = 3 6  -> Set foreground color to Cyan.
Ps = 3 7  -> Set foreground color to White.
Ps = 3 9  -> Set foreground color to default (original).
Ps = 4 0  -> Set background color to Black.
Ps = 4 1  -> Set background color to Red.
Ps = 4 2  -> Set background color to Green.
Ps = 4 3  -> Set background color to Yellow.
Ps = 4 4  -> Set background color to Blue.
Ps = 4 5  -> Set background color to Magenta.
Ps = 4 6  -> Set background color to Cyan.
Ps = 4 7  -> Set background color to White.
Ps = 4 9  -> Set background color to default (original).

If 16-color support is compiled, the following apply.  Assume
that xterm's resources are set so that the ISO color codes are
the first 8 of a set of 16.  Then the aixterm colors are the
bright versions of the ISO colors:
Ps = 9 0  -> Set foreground color to Black.
Ps = 9 1  -> Set foreground color to Red.
Ps = 9 2  -> Set foreground color to Green.
Ps = 9 3  -> Set foreground color to Yellow.
Ps = 9 4  -> Set foreground color to Blue.
Ps = 9 5  -> Set foreground color to Magenta.
Ps = 9 6  -> Set foreground color to Cyan.
Ps = 9 7  -> Set foreground color to White.
Ps = 1 0 0  -> Set background color to Black.
Ps = 1 0 1  -> Set background color to Red.
Ps = 1 0 2  -> Set background color to Green.
Ps = 1 0 3  -> Set background color to Yellow.
Ps = 1 0 4  -> Set background color to Blue.
Ps = 1 0 5  -> Set background color to Magenta.
Ps = 1 0 6  -> Set background color to Cyan.
Ps = 1 0 7  -> Set background color to White.

If xterm is compiled with the 16-color support disabled, it
supports the following, from rxvt:
Ps = 1 0 0  -> Set foreground and background color to
default.

If 88- or 256-color support is compiled, the following apply.
Ps = 3 8  ; 5  ; Ps -> Set foreground color to the second
Ps.
Ps = 4 8  ; 5  ; Ps -> Set background color to the second
Ps.
```

**Parameters:**

Name | Type |
------ | ------ |
`param` | string |
`val?` | string |

**Returns:** *boolean*

▸ **charAttributes**(`param`: string[], `val?`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:819](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L819)*

**Parameters:**

Name | Type |
------ | ------ |
`param` | string[] |
`val?` | string |

**Returns:** *boolean*

___

###  charPosAbsolute

▸ **charPosAbsolute**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:924](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L924)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  char_padding

▸ **char_padding**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[char_padding](_declarations_tput_d_.tput.md#char_padding)*

*Defined in [declarations/tput.d.ts:485](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L485)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  char_set_names

▸ **char_set_names**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[char_set_names](_declarations_tput_d_.tput.md#char_set_names)*

*Defined in [declarations/tput.d.ts:620](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L620)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  charset

▸ **charset**(`val?`: "scld" | "uk" | "us" | "dutch" | "finnish" | "french" | "frenchcanadian" | "german" | "italian" | "norwegiandanish" | "spanish" | "swedish" | "swiss", `level?`: 0 | 1 | 2 | 3): *boolean*

*Defined in [declarations/blessedProgram.d.ts:668](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L668)*

**Parameters:**

Name | Type |
------ | ------ |
`val?` | "scld" &#124; "uk" &#124; "us" &#124; "dutch" &#124; "finnish" &#124; "french" &#124; "frenchcanadian" &#124; "german" &#124; "italian" &#124; "norwegiandanish" &#124; "spanish" &#124; "swedish" &#124; "swiss" |
`level?` | 0 &#124; 1 &#124; 2 &#124; 3 |

**Returns:** *boolean*

___

###  chr

▸ **chr**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[chr](_declarations_tput_d_.tput.md#chr)*

*Defined in [declarations/tput.d.ts:981](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L981)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cht

▸ **cht**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1206](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1206)*

**`see`** [cursorForwardTab](_declarations_blessedprogram_d_.blessedprogram.md#cursorforwardtab)

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  civis

▸ **civis**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[civis](_declarations_tput_d_.tput.md#civis)*

*Defined in [declarations/blessedProgram.d.ts:1136](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1136)*

**Returns:** *boolean*

___

###  clear

▸ **clear**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[clear](_declarations_tput_d_.tput.md#clear)*

*Defined in [declarations/blessedProgram.d.ts:748](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L748)*

**Returns:** *boolean*

___

###  clear_all_tabs

▸ **clear_all_tabs**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[clear_all_tabs](_declarations_tput_d_.tput.md#clear_all_tabs)*

*Defined in [declarations/tput.d.ts:265](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L265)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  clear_margins

▸ **clear_margins**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[clear_margins](_declarations_tput_d_.tput.md#clear_margins)*

*Defined in [declarations/tput.d.ts:542](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L542)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  clear_screen

▸ **clear_screen**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[clear_screen](_declarations_tput_d_.tput.md#clear_screen)*

*Defined in [declarations/tput.d.ts:266](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L266)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  clr_bol

▸ **clr_bol**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[clr_bol](_declarations_tput_d_.tput.md#clr_bol)*

*Defined in [declarations/tput.d.ts:417](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L417)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  clr_eol

▸ **clr_eol**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[clr_eol](_declarations_tput_d_.tput.md#clr_eol)*

*Defined in [declarations/tput.d.ts:267](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L267)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  clr_eos

▸ **clr_eos**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[clr_eos](_declarations_tput_d_.tput.md#clr_eos)*

*Defined in [declarations/tput.d.ts:268](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L268)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cmdch

▸ **cmdch**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cmdch](_declarations_tput_d_.tput.md#cmdch)*

*Defined in [declarations/tput.d.ts:840](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L840)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cnl

▸ **cnl**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:909](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L909)*

**`cursornextline`** 

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  cnorm

▸ **cnorm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cnorm](_declarations_tput_d_.tput.md#cnorm)*

*Defined in [declarations/tput.d.ts:689](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L689)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  code_set_init

▸ **code_set_init**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[code_set_init](_declarations_tput_d_.tput.md#code_set_init)*

*Defined in [declarations/tput.d.ts:626](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L626)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  color_names

▸ **color_names**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[color_names](_declarations_tput_d_.tput.md#color_names)*

*Defined in [declarations/tput.d.ts:636](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L636)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  colornm

▸ **colornm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[colornm](_declarations_tput_d_.tput.md#colornm)*

*Defined in [declarations/tput.d.ts:1045](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1045)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  column_address

▸ **column_address**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[column_address](_declarations_tput_d_.tput.md#column_address)*

*Defined in [declarations/tput.d.ts:269](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L269)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  command_character

▸ **command_character**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[command_character](_declarations_tput_d_.tput.md#command_character)*

*Defined in [declarations/tput.d.ts:429](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L429)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  copyRectangle

▸ **copyRectangle**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1455](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1455)*

```
CSI Pt; Pl; Pb; Pr; Pp; Pt; Pl; Pp$ v
Copy Rectangular Area (DECCRA, VT400 and up).
Pt; Pl; Pb; Pr denotes the rectangle.
Pp denotes the source page.
Pt; Pl denotes the target location.
Pp denotes the target page.
NOTE: xterm doesn't enable this code by default.
```

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  copyToClipboard

▸ **copyToClipboard**(`text`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:585](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L585)*

Specific to iTerm2, but I think it's really cool.
Example:
```
if (!screen.copyToClipboard(text)) {
execClipboardProgram(text);
}
```

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *boolean*

___

###  cpi

▸ **cpi**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cpi](_declarations_tput_d_.tput.md#cpi)*

*Defined in [declarations/tput.d.ts:979](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L979)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cpl

▸ **cpl**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:912](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L912)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  cr

▸ **cr**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[cr](_declarations_tput_d_.tput.md#cr)*

*Defined in [declarations/blessedProgram.d.ts:639](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L639)*

**Returns:** *boolean*

___

###  create_window

▸ **create_window**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[create_window](_declarations_tput_d_.tput.md#create_window)*

*Defined in [declarations/tput.d.ts:549](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L549)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  csin

▸ **csin**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[csin](_declarations_tput_d_.tput.md#csin)*

*Defined in [declarations/tput.d.ts:1035](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1035)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  csnm

▸ **csnm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[csnm](_declarations_tput_d_.tput.md#csnm)*

*Defined in [declarations/tput.d.ts:1029](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1029)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  csr

▸ **csr**(`top`: number, `bottom`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[csr](_declarations_tput_d_.tput.md#csr)*

*Defined in [declarations/blessedProgram.d.ts:1176](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1176)*

**`see`** [setScrollRegion](_declarations_blessedprogram_d_.blessedprogram.md#setscrollregion)

**Parameters:**

Name | Type |
------ | ------ |
`top` | number |
`bottom` | number |

**Returns:** *boolean*

___

###  cub

▸ **cub**(`n?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[cub](_declarations_tput_d_.tput.md#cub)*

*Defined in [declarations/blessedProgram.d.ts:732](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L732)*

**Parameters:**

Name | Type |
------ | ------ |
`n?` | number |

**Returns:** *boolean*

___

###  cub1

▸ **cub1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cub1](_declarations_tput_d_.tput.md#cub1)*

*Defined in [declarations/tput.d.ts:688](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L688)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cud

▸ **cud**(`n?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[cud](_declarations_tput_d_.tput.md#cud)*

*Defined in [declarations/blessedProgram.d.ts:722](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L722)*

Alias for [cursorDown](_declarations_blessedprogram_d_.blessedprogram.md#cursordown)

**Parameters:**

Name | Type |
------ | ------ |
`n?` | number |

**Returns:** *boolean*

___

###  cud1

▸ **cud1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cud1](_declarations_tput_d_.tput.md#cud1)*

*Defined in [declarations/tput.d.ts:685](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L685)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cuf

▸ **cuf**(`n?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[cuf](_declarations_tput_d_.tput.md#cuf)*

*Defined in [declarations/blessedProgram.d.ts:727](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L727)*

**Parameters:**

Name | Type |
------ | ------ |
`n?` | number |

**Returns:** *boolean*

___

###  cuf1

▸ **cuf1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cuf1](_declarations_tput_d_.tput.md#cuf1)*

*Defined in [declarations/tput.d.ts:690](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L690)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cup

▸ **cup**(`row?`: number, `col?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[cup](_declarations_tput_d_.tput.md#cup)*

*Defined in [declarations/blessedProgram.d.ts:742](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L742)*

Alias for [cursorPos](_declarations_blessedprogram_d_.blessedprogram.md#cursorpos)

**Parameters:**

Name | Type |
------ | ------ |
`row?` | number |
`col?` | number |

**Returns:** *boolean*

___

###  cursorBackward

▸ **cursorBackward**(`n?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:731](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L731)*

**Parameters:**

Name | Type |
------ | ------ |
`n?` | number |

**Returns:** *boolean*

___

###  cursorBackwardTab

▸ **cursorBackwardTab**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1245](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1245)*

CSI Ps Z  Cursor Backward Tabulation Ps tab stops (default = 1) (CBT).

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  cursorCharAbsolute

▸ **cursorCharAbsolute**(`x`: number): *number*

*Defined in [declarations/blessedProgram.d.ts:564](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L564)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *number*

▸ **cursorCharAbsolute**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:914](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L914)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  cursorColor

▸ **cursorColor**(`color`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:594](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L594)*

set's cursor color.

**Parameters:**

Name | Type |
------ | ------ |
`color` | string |

**Returns:** *boolean*

___

###  cursorDown

▸ **cursorDown**(`n?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:720](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L720)*

Cursor Down `n` times, by default 1.

**Parameters:**

Name | Type |
------ | ------ |
`n?` | number |

**Returns:** *boolean*

___

###  cursorForward

▸ **cursorForward**(`n?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:726](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L726)*

**Parameters:**

Name | Type |
------ | ------ |
`n?` | number |

**Returns:** *boolean*

___

###  cursorForwardTab

▸ **cursorForwardTab**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1204](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1204)*

Cursor Forward Tabulation Ps tab stops (default = 1) (CHT).

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  cursorNextLine

▸ **cursorNextLine**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:907](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L907)*

```
CSI Ps E
Cursor Next Line Ps Times (default = 1) (CNL).
same as CSI Ps B ?
```

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  cursorPos

▸ **cursorPos**(`row?`: number, `col?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:740](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L740)*

CSI Ps ; Ps H
Cursor Position [ row;column ] (default = [ 1,1 ]) (CUP).

**Parameters:**

Name | Type |
------ | ------ |
`row?` | number |
`col?` | number |

**Returns:** *boolean*

___

###  cursorPrecedingLine

▸ **cursorPrecedingLine**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:911](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L911)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  cursorReset

▸ **cursorReset**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:599](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L599)*

Reset all tput current modes.

**Returns:** *boolean*

___

###  cursorShape

▸ **cursorShape**(`shape`: "block" | "underline" | "line", `blink?`: boolean): *boolean*

*Defined in [declarations/blessedProgram.d.ts:589](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L589)*

 Only XTerm and iTerm2

**Parameters:**

Name | Type |
------ | ------ |
`shape` | "block" &#124; "underline" &#124; "line" |
`blink?` | boolean |

**Returns:** *boolean*

___

###  cursorUp

▸ **cursorUp**(`n?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:711](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L711)*

Cursor up `n` times, by default 1.

**Parameters:**

Name | Type |
------ | ------ |
`n?` | number |

**Returns:** *boolean*

___

###  cursor_address

▸ **cursor_address**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cursor_address](_declarations_tput_d_.tput.md#cursor_address)*

*Defined in [declarations/tput.d.ts:270](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L270)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cursor_down

▸ **cursor_down**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cursor_down](_declarations_tput_d_.tput.md#cursor_down)*

*Defined in [declarations/tput.d.ts:271](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L271)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cursor_home

▸ **cursor_home**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cursor_home](_declarations_tput_d_.tput.md#cursor_home)*

*Defined in [declarations/tput.d.ts:272](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L272)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cursor_invisible

▸ **cursor_invisible**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[cursor_invisible](_declarations_tput_d_.tput.md#cursor_invisible)*

*Defined in [declarations/blessedProgram.d.ts:1138](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1138)*

**Returns:** *boolean*

___

###  cursor_left

▸ **cursor_left**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cursor_left](_declarations_tput_d_.tput.md#cursor_left)*

*Defined in [declarations/tput.d.ts:274](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L274)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cursor_mem_address

▸ **cursor_mem_address**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cursor_mem_address](_declarations_tput_d_.tput.md#cursor_mem_address)*

*Defined in [declarations/tput.d.ts:430](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L430)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cursor_normal

▸ **cursor_normal**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cursor_normal](_declarations_tput_d_.tput.md#cursor_normal)*

*Defined in [declarations/tput.d.ts:275](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L275)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cursor_right

▸ **cursor_right**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cursor_right](_declarations_tput_d_.tput.md#cursor_right)*

*Defined in [declarations/tput.d.ts:276](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L276)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cursor_to_ll

▸ **cursor_to_ll**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cursor_to_ll](_declarations_tput_d_.tput.md#cursor_to_ll)*

*Defined in [declarations/tput.d.ts:431](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L431)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cursor_up

▸ **cursor_up**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cursor_up](_declarations_tput_d_.tput.md#cursor_up)*

*Defined in [declarations/tput.d.ts:277](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L277)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cursor_visible

▸ **cursor_visible**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cursor_visible](_declarations_tput_d_.tput.md#cursor_visible)*

*Defined in [declarations/tput.d.ts:278](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L278)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cuu

▸ **cuu**(`param?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[cuu](_declarations_tput_d_.tput.md#cuu)*

*Defined in [declarations/blessedProgram.d.ts:713](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L713)*

alias for [cursorUp](_declarations_blessedprogram_d_.blessedprogram.md#cursorup)

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  cuu1

▸ **cuu1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cuu1](_declarations_tput_d_.tput.md#cuu1)*

*Defined in [declarations/tput.d.ts:691](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L691)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cvr

▸ **cvr**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cvr](_declarations_tput_d_.tput.md#cvr)*

*Defined in [declarations/tput.d.ts:982](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L982)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cvvis

▸ **cvvis**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cvvis](_declarations_tput_d_.tput.md#cvvis)*

*Defined in [declarations/tput.d.ts:692](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L692)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  cwin

▸ **cwin**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[cwin](_declarations_tput_d_.tput.md#cwin)*

*Defined in [declarations/tput.d.ts:960](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L960)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  da

▸ **da**(`param?`: number, `callback?`: Function): *boolean*

*Defined in [declarations/blessedProgram.d.ts:928](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L928)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |
`callback?` | Function |

**Returns:** *boolean*

___

###  dch

▸ **dch**(`param?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[dch](_declarations_tput_d_.tput.md#dch)*

*Defined in [declarations/blessedProgram.d.ts:921](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L921)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  dch1

▸ **dch1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[dch1](_declarations_tput_d_.tput.md#dch1)*

*Defined in [declarations/tput.d.ts:693](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L693)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  dclk

▸ **dclk**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[dclk](_declarations_tput_d_.tput.md#dclk)*

*Defined in [declarations/tput.d.ts:958](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L958)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  debug

▸ **debug**(`s`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:463](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L463)*

**Parameters:**

Name | Type |
------ | ------ |
`s` | string |

**Returns:** *boolean*

___

###  deccara

▸ **deccara**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1359](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1359)*

**`see`** [setAttrInRectangle](_declarations_blessedprogram_d_.blessedprogram.md#setattrinrectangle)

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  deccra

▸ **deccra**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1457](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1457)*

**`see`** [copyRectangle](_declarations_blessedprogram_d_.blessedprogram.md#copyrectangle)

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  decdc

▸ **decdc**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1625](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1625)*

**`see`** [deleteColumns](_declarations_blessedprogram_d_.blessedprogram.md#deletecolumns)

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  decefr

▸ **decefr**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1475](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1475)*

**`see`** [enableFilterRectangle](_declarations_blessedprogram_d_.blessedprogram.md#enablefilterrectangle)

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  decelr

▸ **decelr**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1537](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1537)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  decera

▸ **decera**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1539](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1539)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  decfra

▸ **decfra**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1517](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1517)*

**`see`** [fillRectangle](_declarations_blessedprogram_d_.blessedprogram.md#fillrectangle)

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  decic

▸ **decic**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1613](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1613)*

**`see`** [insertColumns](_declarations_blessedprogram_d_.blessedprogram.md#insertcolumns)

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  decll

▸ **decll**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1296](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1296)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  decrara

▸ **decrara**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1428](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1428)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  decreqtparm

▸ **decreqtparm**(`param`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1493](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1493)*

**`see`** [requestParameters](_declarations_blessedprogram_d_.blessedprogram.md#requestparameters)

**Parameters:**

Name | Type |
------ | ------ |
`param` | number |

**Returns:** *boolean*

___

###  decrqlp

▸ **decrqlp**(`param?`: string, `callback?`: [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1603](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1603)*

**`see`** [requestLocatorPosition](_declarations_blessedprogram_d_.blessedprogram.md#requestlocatorposition)

**Parameters:**

Name | Type |
------ | ------ |
`param?` | string |
`callback?` | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** *boolean*

___

###  decrqm

▸ **decrqm**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1290](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1290)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  decrqmp

▸ **decrqmp**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1292](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1292)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  decrst

▸ **decrst**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1134](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1134)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  decsace

▸ **decsace**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1505](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1505)*

**`see`** [selectChangeExtent](_declarations_blessedprogram_d_.blessedprogram.md#selectchangeextent)

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  decsca

▸ **decsca**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1339](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1339)*

**`see`** [setCharProtectionAttr](_declarations_blessedprogram_d_.blessedprogram.md#setcharprotectionattr)

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  decscl

▸ **decscl**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1294](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1294)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  decscursr

▸ **decscursr**(`cursor`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1326](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1326)*

see [setCursorStyle](_declarations_blessedprogram_d_.blessedprogram.md#setcursorstyle)

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | number |

**Returns:** *boolean*

___

###  decsera

▸ **decsera**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1543](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1543)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  decset

▸ **decset**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1034](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1034)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  decsle

▸ **decsle**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1541](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1541)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  decstbm

▸ **decstbm**(`top`: number, `bottom`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1178](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1178)*

**`see`** [setScrollRegion](_declarations_blessedprogram_d_.blessedprogram.md#setscrollregion)

**Parameters:**

Name | Type |
------ | ------ |
`top` | number |
`bottom` | number |

**Returns:** *boolean*

___

###  decstr

▸ **decstr**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1288](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1288)*

**Returns:** *boolean*

___

###  decswbv

▸ **decswbv**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1442](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1442)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  dectcemh

▸ **dectcemh**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1139](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1139)*

**Returns:** *boolean*

___

###  defbi

▸ **defbi**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[defbi](_declarations_tput_d_.tput.md#defbi)*

*Defined in [declarations/tput.d.ts:1046](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1046)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  defc

▸ **defc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[defc](_declarations_tput_d_.tput.md#defc)*

*Defined in [declarations/tput.d.ts:983](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L983)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  define_bit_image_region

▸ **define_bit_image_region**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[define_bit_image_region](_declarations_tput_d_.tput.md#define_bit_image_region)*

*Defined in [declarations/tput.d.ts:637](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L637)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  define_char

▸ **define_char**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[define_char](_declarations_tput_d_.tput.md#define_char)*

*Defined in [declarations/tput.d.ts:574](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L574)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  deleteChars

▸ **deleteChars**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:920](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L920)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  deleteColumns

▸ **deleteColumns**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1621](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1621)*

```
CSI P m SP ~
Delete P s Column(s) (default = 1) (DECDC), VT420 and up
NOTE: xterm doesn't enable this code by default.
```

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  deleteLines

▸ **deleteLines**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:918](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L918)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  delete_character

▸ **delete_character**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[delete_character](_declarations_tput_d_.tput.md#delete_character)*

*Defined in [declarations/tput.d.ts:279](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L279)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  delete_line

▸ **delete_line**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[delete_line](_declarations_tput_d_.tput.md#delete_line)*

*Defined in [declarations/tput.d.ts:280](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L280)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  destroy

▸ **destroy**(): *void*

*Defined in [declarations/blessedProgram.d.ts:474](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L474)*

**Returns:** *void*

___

###  deviceStatus

▸ **deviceStatus**(`param?`: string, `callback?`: [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback), `dec?`: boolean, `noBypass?`: boolean): *boolean*

*Defined in [declarations/blessedProgram.d.ts:878](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L878)*

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

Name | Type |
------ | ------ |
`param?` | string |
`callback?` | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |
`dec?` | boolean |
`noBypass?` | boolean |

**Returns:** *boolean*

___

###  device_type

▸ **device_type**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[device_type](_declarations_tput_d_.tput.md#device_type)*

*Defined in [declarations/tput.d.ts:625](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L625)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  devt

▸ **devt**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[devt](_declarations_tput_d_.tput.md#devt)*

*Defined in [declarations/tput.d.ts:1034](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1034)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  dial

▸ **dial**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[dial](_declarations_tput_d_.tput.md#dial)*

*Defined in [declarations/tput.d.ts:963](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L963)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  dial_phone

▸ **dial_phone**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[dial_phone](_declarations_tput_d_.tput.md#dial_phone)*

*Defined in [declarations/tput.d.ts:552](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L552)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  dim

▸ **dim**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[dim](_declarations_tput_d_.tput.md#dim)*

*Defined in [declarations/tput.d.ts:846](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L846)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  dis_status_line

▸ **dis_status_line**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[dis_status_line](_declarations_tput_d_.tput.md#dis_status_line)*

*Defined in [declarations/tput.d.ts:432](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L432)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  disableGpm

▸ **disableGpm**(): *void*

*Defined in [declarations/blessedProgram.d.ts:487](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L487)*

Disable GPM mouse support.

**Returns:** *void*

___

###  disableModifieres

▸ **disableModifieres**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1270](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1270)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  disableMouse

▸ **disableMouse**(): *void*

*Defined in [declarations/blessedProgram.d.ts:1144](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1144)*

**Returns:** *void*

___

###  dispc

▸ **dispc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[dispc](_declarations_tput_d_.tput.md#dispc)*

*Defined in [declarations/tput.d.ts:1050](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1050)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  display_clock

▸ **display_clock**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[display_clock](_declarations_tput_d_.tput.md#display_clock)*

*Defined in [declarations/tput.d.ts:547](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L547)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  display_pc_char

▸ **display_pc_char**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[display_pc_char](_declarations_tput_d_.tput.md#display_pc_char)*

*Defined in [declarations/tput.d.ts:641](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L641)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  dl

▸ **dl**(`param?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[dl](_declarations_tput_d_.tput.md#dl)*

*Defined in [declarations/blessedProgram.d.ts:919](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L919)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  dl1

▸ **dl1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[dl1](_declarations_tput_d_.tput.md#dl1)*

*Defined in [declarations/tput.d.ts:694](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L694)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  docr

▸ **docr**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[docr](_declarations_tput_d_.tput.md#docr)*

*Defined in [declarations/tput.d.ts:1027](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1027)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  down

▸ **down**(`n?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:724](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L724)*

Alias for [cursorDown](_declarations_blessedprogram_d_.blessedprogram.md#cursordown)

**Parameters:**

Name | Type |
------ | ------ |
`n?` | number |

**Returns:** *boolean*

___

###  down_half_line

▸ **down_half_line**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[down_half_line](_declarations_tput_d_.tput.md#down_half_line)*

*Defined in [declarations/tput.d.ts:433](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L433)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  dsl

▸ **dsl**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[dsl](_declarations_tput_d_.tput.md#dsl)*

*Defined in [declarations/tput.d.ts:843](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L843)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  dsr

▸ **dsr**(`param?`: string, `callback?`: Function, `dec?`: boolean, `noBypass?`: boolean): *boolean*

*Defined in [declarations/blessedProgram.d.ts:880](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L880)*

Alias for [deviceStatus](_declarations_blessedprogram_d_.blessedprogram.md#devicestatus)

**Parameters:**

Name | Type |
------ | ------ |
`param?` | string |
`callback?` | Function |
`dec?` | boolean |
`noBypass?` | boolean |

**Returns:** *boolean*

___

###  dynamicColors

▸ **dynamicColors**(`param?`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:705](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L705)*

OSC Ps ; Pt ST
OSC Ps ; Pt BEL
Change dynamic colors

**Parameters:**

Name | Type |
------ | ------ |
`param?` | string |

**Returns:** *boolean*

___

###  ech

▸ **ech**(`param?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[ech](_declarations_tput_d_.tput.md#ech)*

*Defined in [declarations/blessedProgram.d.ts:923](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L923)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  echo

▸ **echo**(`text`: string, `attr?`: boolean): *boolean*

*Defined in [declarations/blessedProgram.d.ts:531](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L531)*

Alias for [print](_declarations_blessedprogram_d_.blessedprogram.md#print)

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
`attr?` | boolean |

**Returns:** *boolean*

___

###  ed

▸ **ed**(`param?`: string): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[ed](_declarations_tput_d_.tput.md#ed)*

*Defined in [declarations/blessedProgram.d.ts:747](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L747)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | string |

**Returns:** *boolean*

___

###  ehhlm

▸ **ehhlm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[ehhlm](_declarations_tput_d_.tput.md#ehhlm)*

*Defined in [declarations/tput.d.ts:1058](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1058)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  el

▸ **el**(`param?`: string): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[el](_declarations_tput_d_.tput.md#el)*

*Defined in [declarations/blessedProgram.d.ts:750](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L750)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | string |

**Returns:** *boolean*

___

###  el1

▸ **el1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[el1](_declarations_tput_d_.tput.md#el1)*

*Defined in [declarations/tput.d.ts:830](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L830)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  elhlm

▸ **elhlm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[elhlm](_declarations_tput_d_.tput.md#elhlm)*

*Defined in [declarations/tput.d.ts:1059](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1059)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  elohlm

▸ **elohlm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[elohlm](_declarations_tput_d_.tput.md#elohlm)*

*Defined in [declarations/tput.d.ts:1060](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1060)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  emit

▸ **emit**(`event`: string | symbol, ...`args`: any[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:255](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L255)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |
`...args` | any[] |

**Returns:** *boolean*

___

###  ena_acs

▸ **ena_acs**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[ena_acs](_declarations_tput_d_.tput.md#ena_acs)*

*Defined in [declarations/tput.d.ts:491](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L491)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enableFilterRectangle

▸ **enableFilterRectangle**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1473](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1473)*

```
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
```

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  enableGpm

▸ **enableGpm**(): *void*

*Defined in [declarations/blessedProgram.d.ts:483](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L483)*

Enable GPM mouse support.

**Returns:** *void*

___

###  enableLocatorReporting

▸ **enableLocatorReporting**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1536](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1536)*

```

CSI Ps ; Pu ' z
Enable Locator Reporting (DECELR).
Valid values for the first parameter:
Ps = 0  -> Locator disabled (default).
Ps = 1  -> Locator enabled.
Ps = 2  -> Locator enabled for one report, then disabled.
The second parameter specifies the coordinate unit for locator
reports.
Valid values for the second parameter:
Pu = 0  <- or omitted -> default to character cells.
Pu = 1  <- device physical pixels.
Pu = 2  <- character cells.
```

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  enableMouse

▸ **enableMouse**(): *void*

*Defined in [declarations/blessedProgram.d.ts:1143](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1143)*

**Returns:** *void*

___

###  enacs

▸ **enacs**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enacs](_declarations_tput_d_.tput.md#enacs)*

*Defined in [declarations/tput.d.ts:902](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L902)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  end_bit_image_region

▸ **end_bit_image_region**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[end_bit_image_region](_declarations_tput_d_.tput.md#end_bit_image_region)*

*Defined in [declarations/tput.d.ts:638](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L638)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  endbi

▸ **endbi**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[endbi](_declarations_tput_d_.tput.md#endbi)*

*Defined in [declarations/tput.d.ts:1047](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1047)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_alt_charset_mode

▸ **enter_alt_charset_mode**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[enter_alt_charset_mode](_declarations_tput_d_.tput.md#enter_alt_charset_mode)*

*Defined in [declarations/blessedProgram.d.ts:686](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L686)*

**Returns:** *boolean*

___

###  enter_am_mode

▸ **enter_am_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_am_mode](_declarations_tput_d_.tput.md#enter_am_mode)*

*Defined in [declarations/tput.d.ts:352](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L352)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_blink_mode

▸ **enter_blink_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_blink_mode](_declarations_tput_d_.tput.md#enter_blink_mode)*

*Defined in [declarations/tput.d.ts:282](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L282)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_bold_mode

▸ **enter_bold_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_bold_mode](_declarations_tput_d_.tput.md#enter_bold_mode)*

*Defined in [declarations/tput.d.ts:283](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L283)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_ca_mode

▸ **enter_ca_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_ca_mode](_declarations_tput_d_.tput.md#enter_ca_mode)*

*Defined in [declarations/tput.d.ts:284](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L284)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_delete_mode

▸ **enter_delete_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_delete_mode](_declarations_tput_d_.tput.md#enter_delete_mode)*

*Defined in [declarations/tput.d.ts:434](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L434)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_dim_mode

▸ **enter_dim_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_dim_mode](_declarations_tput_d_.tput.md#enter_dim_mode)*

*Defined in [declarations/tput.d.ts:435](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L435)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_doublewide_mode

▸ **enter_doublewide_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_doublewide_mode](_declarations_tput_d_.tput.md#enter_doublewide_mode)*

*Defined in [declarations/tput.d.ts:575](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L575)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_draft_quality

▸ **enter_draft_quality**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_draft_quality](_declarations_tput_d_.tput.md#enter_draft_quality)*

*Defined in [declarations/tput.d.ts:576](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L576)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_horizontal_hl_mode

▸ **enter_horizontal_hl_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_horizontal_hl_mode](_declarations_tput_d_.tput.md#enter_horizontal_hl_mode)*

*Defined in [declarations/tput.d.ts:649](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L649)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_insert_mode

▸ **enter_insert_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_insert_mode](_declarations_tput_d_.tput.md#enter_insert_mode)*

*Defined in [declarations/tput.d.ts:285](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L285)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_italics_mode

▸ **enter_italics_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_italics_mode](_declarations_tput_d_.tput.md#enter_italics_mode)*

*Defined in [declarations/tput.d.ts:577](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L577)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_left_hl_mode

▸ **enter_left_hl_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_left_hl_mode](_declarations_tput_d_.tput.md#enter_left_hl_mode)*

*Defined in [declarations/tput.d.ts:650](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L650)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_leftward_mode

▸ **enter_leftward_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_leftward_mode](_declarations_tput_d_.tput.md#enter_leftward_mode)*

*Defined in [declarations/tput.d.ts:578](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L578)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_low_hl_mode

▸ **enter_low_hl_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_low_hl_mode](_declarations_tput_d_.tput.md#enter_low_hl_mode)*

*Defined in [declarations/tput.d.ts:651](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L651)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_micro_mode

▸ **enter_micro_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_micro_mode](_declarations_tput_d_.tput.md#enter_micro_mode)*

*Defined in [declarations/tput.d.ts:579](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L579)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_near_letter_quality

▸ **enter_near_letter_quality**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_near_letter_quality](_declarations_tput_d_.tput.md#enter_near_letter_quality)*

*Defined in [declarations/tput.d.ts:580](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L580)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_normal_quality

▸ **enter_normal_quality**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_normal_quality](_declarations_tput_d_.tput.md#enter_normal_quality)*

*Defined in [declarations/tput.d.ts:581](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L581)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_pc_charset_mode

▸ **enter_pc_charset_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_pc_charset_mode](_declarations_tput_d_.tput.md#enter_pc_charset_mode)*

*Defined in [declarations/tput.d.ts:642](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L642)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_protected_mode

▸ **enter_protected_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_protected_mode](_declarations_tput_d_.tput.md#enter_protected_mode)*

*Defined in [declarations/tput.d.ts:436](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L436)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_reverse_mode

▸ **enter_reverse_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_reverse_mode](_declarations_tput_d_.tput.md#enter_reverse_mode)*

*Defined in [declarations/tput.d.ts:287](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L287)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_right_hl_mode

▸ **enter_right_hl_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_right_hl_mode](_declarations_tput_d_.tput.md#enter_right_hl_mode)*

*Defined in [declarations/tput.d.ts:652](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L652)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_scancode_mode

▸ **enter_scancode_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_scancode_mode](_declarations_tput_d_.tput.md#enter_scancode_mode)*

*Defined in [declarations/tput.d.ts:644](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L644)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_secure_mode

▸ **enter_secure_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_secure_mode](_declarations_tput_d_.tput.md#enter_secure_mode)*

*Defined in [declarations/tput.d.ts:286](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L286)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_shadow_mode

▸ **enter_shadow_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_shadow_mode](_declarations_tput_d_.tput.md#enter_shadow_mode)*

*Defined in [declarations/tput.d.ts:582](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L582)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_standout_mode

▸ **enter_standout_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_standout_mode](_declarations_tput_d_.tput.md#enter_standout_mode)*

*Defined in [declarations/tput.d.ts:288](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L288)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_subscript_mode

▸ **enter_subscript_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_subscript_mode](_declarations_tput_d_.tput.md#enter_subscript_mode)*

*Defined in [declarations/tput.d.ts:583](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L583)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_superscript_mode

▸ **enter_superscript_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_superscript_mode](_declarations_tput_d_.tput.md#enter_superscript_mode)*

*Defined in [declarations/tput.d.ts:584](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L584)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_top_hl_mode

▸ **enter_top_hl_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_top_hl_mode](_declarations_tput_d_.tput.md#enter_top_hl_mode)*

*Defined in [declarations/tput.d.ts:653](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L653)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_underline_mode

▸ **enter_underline_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_underline_mode](_declarations_tput_d_.tput.md#enter_underline_mode)*

*Defined in [declarations/tput.d.ts:289](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L289)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_upward_mode

▸ **enter_upward_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_upward_mode](_declarations_tput_d_.tput.md#enter_upward_mode)*

*Defined in [declarations/tput.d.ts:585](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L585)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_vertical_hl_mode

▸ **enter_vertical_hl_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_vertical_hl_mode](_declarations_tput_d_.tput.md#enter_vertical_hl_mode)*

*Defined in [declarations/tput.d.ts:654](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L654)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  enter_xon_mode

▸ **enter_xon_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[enter_xon_mode](_declarations_tput_d_.tput.md#enter_xon_mode)*

*Defined in [declarations/tput.d.ts:487](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L487)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  eraseChars

▸ **eraseChars**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:922](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L922)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  eraseInDisplay

▸ **eraseInDisplay**(`param?`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:746](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L746)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | string |

**Returns:** *boolean*

___

###  eraseInLine

▸ **eraseInLine**(`param?`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:749](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L749)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | string |

**Returns:** *boolean*

___

###  eraseRectangle

▸ **eraseRectangle**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1538](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1538)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  erase_chars

▸ **erase_chars**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[erase_chars](_declarations_tput_d_.tput.md#erase_chars)*

*Defined in [declarations/tput.d.ts:290](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L290)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  erhlm

▸ **erhlm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[erhlm](_declarations_tput_d_.tput.md#erhlm)*

*Defined in [declarations/tput.d.ts:1061](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1061)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  ethlm

▸ **ethlm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[ethlm](_declarations_tput_d_.tput.md#ethlm)*

*Defined in [declarations/tput.d.ts:1062](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1062)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  eventNames

▸ **eventNames**(): *string | symbol[]*

*Defined in [declarations/blessedProgram.d.ts:256](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L256)*

**Returns:** *string | symbol[]*

___

###  evhlm

▸ **evhlm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[evhlm](_declarations_tput_d_.tput.md#evhlm)*

*Defined in [declarations/tput.d.ts:1063](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1063)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_alt_charset_mode

▸ **exit_alt_charset_mode**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[exit_alt_charset_mode](_declarations_tput_d_.tput.md#exit_alt_charset_mode)*

*Defined in [declarations/blessedProgram.d.ts:689](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L689)*

**Returns:** *boolean*

___

###  exit_am_mode

▸ **exit_am_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_am_mode](_declarations_tput_d_.tput.md#exit_am_mode)*

*Defined in [declarations/tput.d.ts:353](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L353)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_attribute_mode

▸ **exit_attribute_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_attribute_mode](_declarations_tput_d_.tput.md#exit_attribute_mode)*

*Defined in [declarations/tput.d.ts:292](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L292)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_ca_mode

▸ **exit_ca_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_ca_mode](_declarations_tput_d_.tput.md#exit_ca_mode)*

*Defined in [declarations/tput.d.ts:293](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L293)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_delete_mode

▸ **exit_delete_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_delete_mode](_declarations_tput_d_.tput.md#exit_delete_mode)*

*Defined in [declarations/tput.d.ts:437](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L437)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_doublewide_mode

▸ **exit_doublewide_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_doublewide_mode](_declarations_tput_d_.tput.md#exit_doublewide_mode)*

*Defined in [declarations/tput.d.ts:586](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L586)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_insert_mode

▸ **exit_insert_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_insert_mode](_declarations_tput_d_.tput.md#exit_insert_mode)*

*Defined in [declarations/tput.d.ts:294](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L294)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_italics_mode

▸ **exit_italics_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_italics_mode](_declarations_tput_d_.tput.md#exit_italics_mode)*

*Defined in [declarations/tput.d.ts:587](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L587)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_leftward_mode

▸ **exit_leftward_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_leftward_mode](_declarations_tput_d_.tput.md#exit_leftward_mode)*

*Defined in [declarations/tput.d.ts:588](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L588)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_micro_mode

▸ **exit_micro_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_micro_mode](_declarations_tput_d_.tput.md#exit_micro_mode)*

*Defined in [declarations/tput.d.ts:589](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L589)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_pc_charset_mode

▸ **exit_pc_charset_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_pc_charset_mode](_declarations_tput_d_.tput.md#exit_pc_charset_mode)*

*Defined in [declarations/tput.d.ts:643](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L643)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_scancode_mode

▸ **exit_scancode_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_scancode_mode](_declarations_tput_d_.tput.md#exit_scancode_mode)*

*Defined in [declarations/tput.d.ts:645](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L645)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_shadow_mode

▸ **exit_shadow_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_shadow_mode](_declarations_tput_d_.tput.md#exit_shadow_mode)*

*Defined in [declarations/tput.d.ts:590](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L590)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_standout_mode

▸ **exit_standout_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_standout_mode](_declarations_tput_d_.tput.md#exit_standout_mode)*

*Defined in [declarations/tput.d.ts:295](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L295)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_subscript_mode

▸ **exit_subscript_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_subscript_mode](_declarations_tput_d_.tput.md#exit_subscript_mode)*

*Defined in [declarations/tput.d.ts:591](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L591)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_superscript_mode

▸ **exit_superscript_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_superscript_mode](_declarations_tput_d_.tput.md#exit_superscript_mode)*

*Defined in [declarations/tput.d.ts:592](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L592)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_underline_mode

▸ **exit_underline_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_underline_mode](_declarations_tput_d_.tput.md#exit_underline_mode)*

*Defined in [declarations/tput.d.ts:296](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L296)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_upward_mode

▸ **exit_upward_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_upward_mode](_declarations_tput_d_.tput.md#exit_upward_mode)*

*Defined in [declarations/tput.d.ts:593](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L593)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  exit_xon_mode

▸ **exit_xon_mode**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[exit_xon_mode](_declarations_tput_d_.tput.md#exit_xon_mode)*

*Defined in [declarations/tput.d.ts:488](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L488)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  feed

▸ **feed**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:640](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L640)*

**Returns:** *boolean*

___

###  ff

▸ **ff**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[ff](_declarations_tput_d_.tput.md#ff)*

*Defined in [declarations/blessedProgram.d.ts:629](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L629)*

**Returns:** *boolean*

___

###  fg

▸ **fg**(`color`: string, `val?`: boolean): *string*

*Defined in [declarations/blessedProgram.d.ts:835](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L835)*

Alias for [setForeground](_declarations_blessedprogram_d_.blessedprogram.md#setforeground)

**Parameters:**

Name | Type |
------ | ------ |
`color` | string |
`val?` | boolean |

**Returns:** *string*

___

###  fillRectangle

▸ **fillRectangle**(`Pc`: string, `Pt`: number, `pl`: number, `pb`: number, `pr`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1515](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1515)*

```
CSI Pc; Pt; Pl; Pb; Pr$ x
Fill Rectangular Area (DECFRA), VT420 and up.
Pc is the character to use.
Pt; Pl; Pb; Pr denotes the rectangle.
NOTE: xterm doesn't enable this code by default.
```

**Parameters:**

Name | Type |
------ | ------ |
`Pc` | string |
`Pt` | number |
`pl` | number |
`pb` | number |
`pr` | number |

**Returns:** *boolean*

___

###  fixed_pause

▸ **fixed_pause**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[fixed_pause](_declarations_tput_d_.tput.md#fixed_pause)*

*Defined in [declarations/tput.d.ts:557](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L557)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  flash

▸ **flash**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[flash](_declarations_tput_d_.tput.md#flash)*

*Defined in [declarations/tput.d.ts:711](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L711)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  flash_hook

▸ **flash_hook**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[flash_hook](_declarations_tput_d_.tput.md#flash_hook)*

*Defined in [declarations/tput.d.ts:556](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L556)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  flash_screen

▸ **flash_screen**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[flash_screen](_declarations_tput_d_.tput.md#flash_screen)*

*Defined in [declarations/tput.d.ts:297](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L297)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  fln

▸ **fln**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[fln](_declarations_tput_d_.tput.md#fln)*

*Defined in [declarations/tput.d.ts:956](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L956)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  flush

▸ **flush**(): *void*

*Defined in [declarations/blessedProgram.d.ts:523](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L523)*

	Flushes the buffer.

**Returns:** *void*

___

###  form

▸ **form**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:628](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L628)*

**Returns:** *boolean*

___

###  form_feed

▸ **form_feed**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[form_feed](_declarations_tput_d_.tput.md#form_feed)*

*Defined in [declarations/tput.d.ts:438](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L438)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  forward

▸ **forward**(`n?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:729](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L729)*

**Parameters:**

Name | Type |
------ | ------ |
`n?` | number |

**Returns:** *boolean*

___

###  from_status_line

▸ **from_status_line**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[from_status_line](_declarations_tput_d_.tput.md#from_status_line)*

*Defined in [declarations/tput.d.ts:439](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L439)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  fsl

▸ **fsl**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[fsl](_declarations_tput_d_.tput.md#fsl)*

*Defined in [declarations/tput.d.ts:850](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L850)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  getCursor

▸ **getCursor**(`callback`: [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)): *boolean*

*Defined in [declarations/blessedProgram.d.ts:890](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L890)*

Example Call:
```
program.getCursor(function(err, data) {
program.log('getCursor', data);
});
```

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** *boolean*

___

###  getCursorColor

▸ **getCursorColor**(`callback`: Function): *boolean*

*Defined in [declarations/blessedProgram.d.ts:617](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L617)*

Get's the cursor color. Example call:

```
program.getCursor(function(err, data) {
program.log('getCursor', data);
program.write(util.inspect(data));
});
```

**Parameters:**

Name | Type |
------ | ------ |
`callback` | Function |

**Returns:** *boolean*

___

###  getMaxListeners

▸ **getMaxListeners**(): *number*

*Defined in [declarations/blessedProgram.d.ts:252](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L252)*

**Returns:** *number*

___

###  getTextParams

▸ **getTextParams**(`param`: string, `callback`: Function): *boolean*

*Defined in [declarations/blessedProgram.d.ts:606](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L606)*

**Parameters:**

Name | Type |
------ | ------ |
`param` | string |
`callback` | Function |

**Returns:** *boolean*

___

###  getWindowSize

▸ **getWindowSize**(`callback?`: [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1426](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1426)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** *boolean*

___

###  get_mouse

▸ **get_mouse**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[get_mouse](_declarations_tput_d_.tput.md#get_mouse)*

*Defined in [declarations/tput.d.ts:623](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L623)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  getm

▸ **getm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[getm](_declarations_tput_d_.tput.md#getm)*

*Defined in [declarations/tput.d.ts:1032](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1032)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  goto_window

▸ **goto_window**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[goto_window](_declarations_tput_d_.tput.md#goto_window)*

*Defined in [declarations/tput.d.ts:550](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L550)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  hangup

▸ **hangup**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[hangup](_declarations_tput_d_.tput.md#hangup)*

*Defined in [declarations/tput.d.ts:551](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L551)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  has

▸ **has**(`name`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:470](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L470)*

Queries whether the terminal has the capability `name`.

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |

**Returns:** *boolean*

___

###  hd

▸ **hd**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[hd](_declarations_tput_d_.tput.md#hd)*

*Defined in [declarations/tput.d.ts:844](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L844)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  hideCursor

▸ **hideCursor**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1135](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1135)*

**Returns:** *boolean*

___

###  home

▸ **home**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[home](_declarations_tput_d_.tput.md#home)*

*Defined in [declarations/tput.d.ts:686](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L686)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  hook

▸ **hook**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[hook](_declarations_tput_d_.tput.md#hook)*

*Defined in [declarations/tput.d.ts:965](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L965)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  hpa

▸ **hpa**(`param?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[hpa](_declarations_tput_d_.tput.md#hpa)*

*Defined in [declarations/blessedProgram.d.ts:925](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L925)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  ht

▸ **ht**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[ht](_declarations_tput_d_.tput.md#ht)*

*Defined in [declarations/blessedProgram.d.ts:633](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L633)*

**Returns:** *boolean*

___

###  hts

▸ **hts**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[hts](_declarations_tput_d_.tput.md#hts)*

*Defined in [declarations/tput.d.ts:761](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L761)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  hu

▸ **hu**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[hu](_declarations_tput_d_.tput.md#hu)*

*Defined in [declarations/tput.d.ts:889](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L889)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  hup

▸ **hup**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[hup](_declarations_tput_d_.tput.md#hup)*

*Defined in [declarations/tput.d.ts:962](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L962)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  hvp

▸ **hvp**(`row?`: number, `col?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:934](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L934)*

**Parameters:**

Name | Type |
------ | ------ |
`row?` | number |
`col?` | number |

**Returns:** *boolean*

___

###  ich

▸ **ich**(`param?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[ich](_declarations_tput_d_.tput.md#ich)*

*Defined in [declarations/blessedProgram.d.ts:899](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L899)*

**`see`** [insertChars](_declarations_blessedprogram_d_.blessedprogram.md#insertchars)

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  ich1

▸ **ich1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[ich1](_declarations_tput_d_.tput.md#ich1)*

*Defined in [declarations/tput.d.ts:854](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L854)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  if

▸ **if**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[if](_declarations_tput_d_.tput.md#if)*

*Defined in [declarations/tput.d.ts:853](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L853)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  il

▸ **il**(`param?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[il](_declarations_tput_d_.tput.md#il)*

*Defined in [declarations/blessedProgram.d.ts:917](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L917)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  il1

▸ **il1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[il1](_declarations_tput_d_.tput.md#il1)*

*Defined in [declarations/tput.d.ts:713](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L713)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  ind

▸ **ind**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[ind](_declarations_tput_d_.tput.md#ind)*

*Defined in [declarations/blessedProgram.d.ts:644](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L644)*

**Returns:** *boolean*

___

###  index

▸ **index**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:643](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L643)*

**Returns:** *boolean*

___

###  indn

▸ **indn**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[indn](_declarations_tput_d_.tput.md#indn)*

*Defined in [declarations/tput.d.ts:744](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L744)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  initMouseTracking

▸ **initMouseTracking**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1225](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1225)*

```
CSI Ps ; Ps ; Ps ; Ps ; Ps T
Initiate highlight mouse tracking.  Parameters are
[func;startx;starty;firstrow;lastrow].  See the section Mouse
Tracking.
```

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  init_1string

▸ **init_1string**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[init_1string](_declarations_tput_d_.tput.md#init_1string)*

*Defined in [declarations/tput.d.ts:440](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L440)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  init_2string

▸ **init_2string**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[init_2string](_declarations_tput_d_.tput.md#init_2string)*

*Defined in [declarations/tput.d.ts:298](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L298)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  init_3string

▸ **init_3string**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[init_3string](_declarations_tput_d_.tput.md#init_3string)*

*Defined in [declarations/tput.d.ts:441](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L441)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  init_file

▸ **init_file**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[init_file](_declarations_tput_d_.tput.md#init_file)*

*Defined in [declarations/tput.d.ts:442](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L442)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  init_prog

▸ **init_prog**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[init_prog](_declarations_tput_d_.tput.md#init_prog)*

*Defined in [declarations/tput.d.ts:479](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L479)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  initc

▸ **initc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[initc](_declarations_tput_d_.tput.md#initc)*

*Defined in [declarations/tput.d.ts:836](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L836)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  initialize_color

▸ **initialize_color**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[initialize_color](_declarations_tput_d_.tput.md#initialize_color)*

*Defined in [declarations/tput.d.ts:423](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L423)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  initialize_pair

▸ **initialize_pair**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[initialize_pair](_declarations_tput_d_.tput.md#initialize_pair)*

*Defined in [declarations/tput.d.ts:566](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L566)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  initp

▸ **initp**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[initp](_declarations_tput_d_.tput.md#initp)*

*Defined in [declarations/tput.d.ts:975](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L975)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  insertChars

▸ **insertChars**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:897](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L897)*

CSI Ps @
Insert Ps (Blank) Character(s) (default = 1) (ICH).

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  insertColumns

▸ **insertColumns**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1611](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1611)*

```
CSI P m SP }
Insert P s Column(s) (default = 1) (DECIC), VT420 and up.
NOTE: xterm doesn't enable this code by default.
```

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  insertLines

▸ **insertLines**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:916](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L916)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  insert_character

▸ **insert_character**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[insert_character](_declarations_tput_d_.tput.md#insert_character)*

*Defined in [declarations/tput.d.ts:443](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L443)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  insert_line

▸ **insert_line**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[insert_line](_declarations_tput_d_.tput.md#insert_line)*

*Defined in [declarations/tput.d.ts:299](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L299)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  insert_padding

▸ **insert_padding**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[insert_padding](_declarations_tput_d_.tput.md#insert_padding)*

*Defined in [declarations/tput.d.ts:444](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L444)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  invis

▸ **invis**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[invis](_declarations_tput_d_.tput.md#invis)*

*Defined in [declarations/tput.d.ts:700](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L700)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  ip

▸ **ip**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[ip](_declarations_tput_d_.tput.md#ip)*

*Defined in [declarations/tput.d.ts:855](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L855)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  iprog

▸ **iprog**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[iprog](_declarations_tput_d_.tput.md#iprog)*

*Defined in [declarations/tput.d.ts:890](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L890)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  is1

▸ **is1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[is1](_declarations_tput_d_.tput.md#is1)*

*Defined in [declarations/tput.d.ts:851](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L851)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  is2

▸ **is2**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[is2](_declarations_tput_d_.tput.md#is2)*

*Defined in [declarations/tput.d.ts:712](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L712)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  is3

▸ **is3**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[is3](_declarations_tput_d_.tput.md#is3)*

*Defined in [declarations/tput.d.ts:852](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L852)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kBEG

▸ **kBEG**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kBEG](_declarations_tput_d_.tput.md#kbeg)*

*Defined in [declarations/tput.d.ts:931](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L931)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kCAN

▸ **kCAN**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kCAN](_declarations_tput_d_.tput.md#kcan)*

*Defined in [declarations/tput.d.ts:932](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L932)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kCMD

▸ **kCMD**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kCMD](_declarations_tput_d_.tput.md#kcmd)*

*Defined in [declarations/tput.d.ts:933](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L933)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kCPY

▸ **kCPY**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kCPY](_declarations_tput_d_.tput.md#kcpy)*

*Defined in [declarations/tput.d.ts:934](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L934)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kCRT

▸ **kCRT**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kCRT](_declarations_tput_d_.tput.md#kcrt)*

*Defined in [declarations/tput.d.ts:935](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L935)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kDC

▸ **kDC**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kDC](_declarations_tput_d_.tput.md#kdc)*

*Defined in [declarations/tput.d.ts:769](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L769)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kDL

▸ **kDL**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kDL](_declarations_tput_d_.tput.md#kdl)*

*Defined in [declarations/tput.d.ts:936](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L936)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kEND

▸ **kEND**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kEND](_declarations_tput_d_.tput.md#kend)*

*Defined in [declarations/tput.d.ts:770](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L770)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kEOL

▸ **kEOL**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kEOL](_declarations_tput_d_.tput.md#keol)*

*Defined in [declarations/tput.d.ts:938](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L938)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kEXT

▸ **kEXT**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kEXT](_declarations_tput_d_.tput.md#kext)*

*Defined in [declarations/tput.d.ts:939](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L939)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kFND

▸ **kFND**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kFND](_declarations_tput_d_.tput.md#kfnd)*

*Defined in [declarations/tput.d.ts:940](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L940)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kHLP

▸ **kHLP**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kHLP](_declarations_tput_d_.tput.md#khlp)*

*Defined in [declarations/tput.d.ts:941](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L941)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kHOM

▸ **kHOM**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kHOM](_declarations_tput_d_.tput.md#khom)*

*Defined in [declarations/tput.d.ts:771](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L771)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kIC

▸ **kIC**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kIC](_declarations_tput_d_.tput.md#kic)*

*Defined in [declarations/tput.d.ts:772](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L772)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kLFT

▸ **kLFT**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kLFT](_declarations_tput_d_.tput.md#klft)*

*Defined in [declarations/tput.d.ts:773](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L773)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kMOV

▸ **kMOV**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kMOV](_declarations_tput_d_.tput.md#kmov)*

*Defined in [declarations/tput.d.ts:943](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L943)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kMSG

▸ **kMSG**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kMSG](_declarations_tput_d_.tput.md#kmsg)*

*Defined in [declarations/tput.d.ts:942](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L942)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kNXT

▸ **kNXT**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kNXT](_declarations_tput_d_.tput.md#knxt)*

*Defined in [declarations/tput.d.ts:774](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L774)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kOPT

▸ **kOPT**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kOPT](_declarations_tput_d_.tput.md#kopt)*

*Defined in [declarations/tput.d.ts:944](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L944)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kPRT

▸ **kPRT**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kPRT](_declarations_tput_d_.tput.md#kprt)*

*Defined in [declarations/tput.d.ts:945](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L945)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kPRV

▸ **kPRV**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kPRV](_declarations_tput_d_.tput.md#kprv)*

*Defined in [declarations/tput.d.ts:775](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L775)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kRDO

▸ **kRDO**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kRDO](_declarations_tput_d_.tput.md#krdo)*

*Defined in [declarations/tput.d.ts:946](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L946)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kRES

▸ **kRES**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kRES](_declarations_tput_d_.tput.md#kres)*

*Defined in [declarations/tput.d.ts:948](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L948)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kRIT

▸ **kRIT**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kRIT](_declarations_tput_d_.tput.md#krit)*

*Defined in [declarations/tput.d.ts:776](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L776)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kRPL

▸ **kRPL**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kRPL](_declarations_tput_d_.tput.md#krpl)*

*Defined in [declarations/tput.d.ts:947](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L947)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kSAV

▸ **kSAV**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kSAV](_declarations_tput_d_.tput.md#ksav)*

*Defined in [declarations/tput.d.ts:949](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L949)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kSPD

▸ **kSPD**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kSPD](_declarations_tput_d_.tput.md#kspd)*

*Defined in [declarations/tput.d.ts:950](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L950)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kUND

▸ **kUND**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kUND](_declarations_tput_d_.tput.md#kund)*

*Defined in [declarations/tput.d.ts:951](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L951)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  ka1

▸ **ka1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[ka1](_declarations_tput_d_.tput.md#ka1)*

*Defined in [declarations/tput.d.ts:891](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L891)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  ka3

▸ **ka3**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[ka3](_declarations_tput_d_.tput.md#ka3)*

*Defined in [declarations/tput.d.ts:892](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L892)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kb2

▸ **kb2**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kb2](_declarations_tput_d_.tput.md#kb2)*

*Defined in [declarations/tput.d.ts:763](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L763)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kbeg

▸ **kbeg**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kbeg](_declarations_tput_d_.tput.md#kbeg)*

*Defined in [declarations/tput.d.ts:905](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L905)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kbs

▸ **kbs**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[kbs](_declarations_tput_d_.tput.md#kbs)*

*Defined in [declarations/blessedProgram.d.ts:631](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L631)*

**Returns:** *boolean*

___

###  kc1

▸ **kc1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kc1](_declarations_tput_d_.tput.md#kc1)*

*Defined in [declarations/tput.d.ts:893](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L893)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kc3

▸ **kc3**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kc3](_declarations_tput_d_.tput.md#kc3)*

*Defined in [declarations/tput.d.ts:894](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L894)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kcan

▸ **kcan**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kcan](_declarations_tput_d_.tput.md#kcan)*

*Defined in [declarations/tput.d.ts:906](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L906)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kcbt

▸ **kcbt**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kcbt](_declarations_tput_d_.tput.md#kcbt)*

*Defined in [declarations/tput.d.ts:764](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L764)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kclo

▸ **kclo**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kclo](_declarations_tput_d_.tput.md#kclo)*

*Defined in [declarations/tput.d.ts:907](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L907)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kclr

▸ **kclr**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kclr](_declarations_tput_d_.tput.md#kclr)*

*Defined in [declarations/tput.d.ts:857](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L857)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kcmd

▸ **kcmd**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kcmd](_declarations_tput_d_.tput.md#kcmd)*

*Defined in [declarations/tput.d.ts:908](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L908)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kcpy

▸ **kcpy**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kcpy](_declarations_tput_d_.tput.md#kcpy)*

*Defined in [declarations/tput.d.ts:909](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L909)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kcrt

▸ **kcrt**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kcrt](_declarations_tput_d_.tput.md#kcrt)*

*Defined in [declarations/tput.d.ts:910](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L910)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kctab

▸ **kctab**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kctab](_declarations_tput_d_.tput.md#kctab)*

*Defined in [declarations/tput.d.ts:858](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L858)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kcub1

▸ **kcub1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kcub1](_declarations_tput_d_.tput.md#kcub1)*

*Defined in [declarations/tput.d.ts:729](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L729)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kcud1

▸ **kcud1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kcud1](_declarations_tput_d_.tput.md#kcud1)*

*Defined in [declarations/tput.d.ts:716](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L716)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kcuf1

▸ **kcuf1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kcuf1](_declarations_tput_d_.tput.md#kcuf1)*

*Defined in [declarations/tput.d.ts:732](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L732)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kcuu1

▸ **kcuu1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kcuu1](_declarations_tput_d_.tput.md#kcuu1)*

*Defined in [declarations/tput.d.ts:735](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L735)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kdch1

▸ **kdch1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kdch1](_declarations_tput_d_.tput.md#kdch1)*

*Defined in [declarations/tput.d.ts:715](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L715)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kdl1

▸ **kdl1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kdl1](_declarations_tput_d_.tput.md#kdl1)*

*Defined in [declarations/tput.d.ts:859](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L859)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  ked

▸ **ked**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[ked](_declarations_tput_d_.tput.md#ked)*

*Defined in [declarations/tput.d.ts:862](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L862)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kel

▸ **kel**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kel](_declarations_tput_d_.tput.md#kel)*

*Defined in [declarations/tput.d.ts:861](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L861)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kend

▸ **kend**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kend](_declarations_tput_d_.tput.md#kend)*

*Defined in [declarations/tput.d.ts:767](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L767)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kent

▸ **kent**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kent](_declarations_tput_d_.tput.md#kent)*

*Defined in [declarations/tput.d.ts:768](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L768)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kext

▸ **kext**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kext](_declarations_tput_d_.tput.md#kext)*

*Defined in [declarations/tput.d.ts:911](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L911)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key

▸ **key**(`key`: string | string[], `l`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *void*

*Defined in [declarations/blessedProgram.d.ts:475](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L475)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; string[] |
`l` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** *void*

___

###  key_a1

▸ **key_a1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_a1](_declarations_tput_d_.tput.md#key_a1)*

*Defined in [declarations/tput.d.ts:480](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L480)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_a3

▸ **key_a3**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_a3](_declarations_tput_d_.tput.md#key_a3)*

*Defined in [declarations/tput.d.ts:481](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L481)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_b2

▸ **key_b2**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_b2](_declarations_tput_d_.tput.md#key_b2)*

*Defined in [declarations/tput.d.ts:349](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L349)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_backspace

▸ **key_backspace**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_backspace](_declarations_tput_d_.tput.md#key_backspace)*

*Defined in [declarations/tput.d.ts:300](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L300)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_beg

▸ **key_beg**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_beg](_declarations_tput_d_.tput.md#key_beg)*

*Defined in [declarations/tput.d.ts:494](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L494)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_btab

▸ **key_btab**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_btab](_declarations_tput_d_.tput.md#key_btab)*

*Defined in [declarations/tput.d.ts:351](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L351)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_c1

▸ **key_c1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_c1](_declarations_tput_d_.tput.md#key_c1)*

*Defined in [declarations/tput.d.ts:482](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L482)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_c3

▸ **key_c3**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_c3](_declarations_tput_d_.tput.md#key_c3)*

*Defined in [declarations/tput.d.ts:483](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L483)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_cancel

▸ **key_cancel**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_cancel](_declarations_tput_d_.tput.md#key_cancel)*

*Defined in [declarations/tput.d.ts:495](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L495)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_catab

▸ **key_catab**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_catab](_declarations_tput_d_.tput.md#key_catab)*

*Defined in [declarations/tput.d.ts:445](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L445)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_clear

▸ **key_clear**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_clear](_declarations_tput_d_.tput.md#key_clear)*

*Defined in [declarations/tput.d.ts:446](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L446)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_close

▸ **key_close**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_close](_declarations_tput_d_.tput.md#key_close)*

*Defined in [declarations/tput.d.ts:496](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L496)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_command

▸ **key_command**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_command](_declarations_tput_d_.tput.md#key_command)*

*Defined in [declarations/tput.d.ts:497](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L497)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_copy

▸ **key_copy**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_copy](_declarations_tput_d_.tput.md#key_copy)*

*Defined in [declarations/tput.d.ts:498](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L498)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_create

▸ **key_create**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_create](_declarations_tput_d_.tput.md#key_create)*

*Defined in [declarations/tput.d.ts:499](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L499)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_ctab

▸ **key_ctab**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_ctab](_declarations_tput_d_.tput.md#key_ctab)*

*Defined in [declarations/tput.d.ts:447](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L447)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_dc

▸ **key_dc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_dc](_declarations_tput_d_.tput.md#key_dc)*

*Defined in [declarations/tput.d.ts:301](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L301)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_dl

▸ **key_dl**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_dl](_declarations_tput_d_.tput.md#key_dl)*

*Defined in [declarations/tput.d.ts:448](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L448)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_down

▸ **key_down**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_down](_declarations_tput_d_.tput.md#key_down)*

*Defined in [declarations/tput.d.ts:302](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L302)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_eic

▸ **key_eic**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_eic](_declarations_tput_d_.tput.md#key_eic)*

*Defined in [declarations/tput.d.ts:449](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L449)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_end

▸ **key_end**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_end](_declarations_tput_d_.tput.md#key_end)*

*Defined in [declarations/tput.d.ts:354](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L354)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_enter

▸ **key_enter**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_enter](_declarations_tput_d_.tput.md#key_enter)*

*Defined in [declarations/tput.d.ts:355](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L355)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_eol

▸ **key_eol**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_eol](_declarations_tput_d_.tput.md#key_eol)*

*Defined in [declarations/tput.d.ts:450](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L450)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_eos

▸ **key_eos**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_eos](_declarations_tput_d_.tput.md#key_eos)*

*Defined in [declarations/tput.d.ts:451](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L451)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_exit

▸ **key_exit**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_exit](_declarations_tput_d_.tput.md#key_exit)*

*Defined in [declarations/tput.d.ts:500](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L500)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f0

▸ **key_f0**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f0](_declarations_tput_d_.tput.md#key_f0)*

*Defined in [declarations/tput.d.ts:452](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L452)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f1

▸ **key_f1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f1](_declarations_tput_d_.tput.md#key_f1)*

*Defined in [declarations/tput.d.ts:303](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L303)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f10

▸ **key_f10**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f10](_declarations_tput_d_.tput.md#key_f10)*

*Defined in [declarations/tput.d.ts:304](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L304)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f11

▸ **key_f11**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f11](_declarations_tput_d_.tput.md#key_f11)*

*Defined in [declarations/tput.d.ts:364](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L364)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f12

▸ **key_f12**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f12](_declarations_tput_d_.tput.md#key_f12)*

*Defined in [declarations/tput.d.ts:365](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L365)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f13

▸ **key_f13**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f13](_declarations_tput_d_.tput.md#key_f13)*

*Defined in [declarations/tput.d.ts:366](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L366)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f14

▸ **key_f14**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f14](_declarations_tput_d_.tput.md#key_f14)*

*Defined in [declarations/tput.d.ts:367](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L367)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f15

▸ **key_f15**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f15](_declarations_tput_d_.tput.md#key_f15)*

*Defined in [declarations/tput.d.ts:368](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L368)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f16

▸ **key_f16**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f16](_declarations_tput_d_.tput.md#key_f16)*

*Defined in [declarations/tput.d.ts:369](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L369)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f17

▸ **key_f17**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f17](_declarations_tput_d_.tput.md#key_f17)*

*Defined in [declarations/tput.d.ts:370](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L370)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f18

▸ **key_f18**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f18](_declarations_tput_d_.tput.md#key_f18)*

*Defined in [declarations/tput.d.ts:371](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L371)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f19

▸ **key_f19**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f19](_declarations_tput_d_.tput.md#key_f19)*

*Defined in [declarations/tput.d.ts:372](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L372)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f2

▸ **key_f2**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f2](_declarations_tput_d_.tput.md#key_f2)*

*Defined in [declarations/tput.d.ts:305](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L305)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f20

▸ **key_f20**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f20](_declarations_tput_d_.tput.md#key_f20)*

*Defined in [declarations/tput.d.ts:373](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L373)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f21

▸ **key_f21**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f21](_declarations_tput_d_.tput.md#key_f21)*

*Defined in [declarations/tput.d.ts:374](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L374)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f22

▸ **key_f22**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f22](_declarations_tput_d_.tput.md#key_f22)*

*Defined in [declarations/tput.d.ts:375](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L375)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f23

▸ **key_f23**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f23](_declarations_tput_d_.tput.md#key_f23)*

*Defined in [declarations/tput.d.ts:376](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L376)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f24

▸ **key_f24**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f24](_declarations_tput_d_.tput.md#key_f24)*

*Defined in [declarations/tput.d.ts:377](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L377)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f25

▸ **key_f25**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f25](_declarations_tput_d_.tput.md#key_f25)*

*Defined in [declarations/tput.d.ts:378](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L378)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f26

▸ **key_f26**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f26](_declarations_tput_d_.tput.md#key_f26)*

*Defined in [declarations/tput.d.ts:379](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L379)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f27

▸ **key_f27**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f27](_declarations_tput_d_.tput.md#key_f27)*

*Defined in [declarations/tput.d.ts:380](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L380)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f28

▸ **key_f28**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f28](_declarations_tput_d_.tput.md#key_f28)*

*Defined in [declarations/tput.d.ts:381](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L381)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f29

▸ **key_f29**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f29](_declarations_tput_d_.tput.md#key_f29)*

*Defined in [declarations/tput.d.ts:382](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L382)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f3

▸ **key_f3**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f3](_declarations_tput_d_.tput.md#key_f3)*

*Defined in [declarations/tput.d.ts:306](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L306)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f30

▸ **key_f30**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f30](_declarations_tput_d_.tput.md#key_f30)*

*Defined in [declarations/tput.d.ts:383](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L383)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f31

▸ **key_f31**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f31](_declarations_tput_d_.tput.md#key_f31)*

*Defined in [declarations/tput.d.ts:384](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L384)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f32

▸ **key_f32**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f32](_declarations_tput_d_.tput.md#key_f32)*

*Defined in [declarations/tput.d.ts:385](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L385)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f33

▸ **key_f33**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f33](_declarations_tput_d_.tput.md#key_f33)*

*Defined in [declarations/tput.d.ts:386](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L386)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f34

▸ **key_f34**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f34](_declarations_tput_d_.tput.md#key_f34)*

*Defined in [declarations/tput.d.ts:387](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L387)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f35

▸ **key_f35**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f35](_declarations_tput_d_.tput.md#key_f35)*

*Defined in [declarations/tput.d.ts:388](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L388)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f36

▸ **key_f36**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f36](_declarations_tput_d_.tput.md#key_f36)*

*Defined in [declarations/tput.d.ts:389](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L389)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f37

▸ **key_f37**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f37](_declarations_tput_d_.tput.md#key_f37)*

*Defined in [declarations/tput.d.ts:390](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L390)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f38

▸ **key_f38**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f38](_declarations_tput_d_.tput.md#key_f38)*

*Defined in [declarations/tput.d.ts:391](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L391)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f39

▸ **key_f39**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f39](_declarations_tput_d_.tput.md#key_f39)*

*Defined in [declarations/tput.d.ts:392](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L392)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f4

▸ **key_f4**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f4](_declarations_tput_d_.tput.md#key_f4)*

*Defined in [declarations/tput.d.ts:307](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L307)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f40

▸ **key_f40**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f40](_declarations_tput_d_.tput.md#key_f40)*

*Defined in [declarations/tput.d.ts:393](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L393)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f41

▸ **key_f41**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f41](_declarations_tput_d_.tput.md#key_f41)*

*Defined in [declarations/tput.d.ts:394](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L394)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f42

▸ **key_f42**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f42](_declarations_tput_d_.tput.md#key_f42)*

*Defined in [declarations/tput.d.ts:395](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L395)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f43

▸ **key_f43**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f43](_declarations_tput_d_.tput.md#key_f43)*

*Defined in [declarations/tput.d.ts:396](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L396)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f44

▸ **key_f44**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f44](_declarations_tput_d_.tput.md#key_f44)*

*Defined in [declarations/tput.d.ts:397](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L397)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f45

▸ **key_f45**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f45](_declarations_tput_d_.tput.md#key_f45)*

*Defined in [declarations/tput.d.ts:398](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L398)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f46

▸ **key_f46**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f46](_declarations_tput_d_.tput.md#key_f46)*

*Defined in [declarations/tput.d.ts:399](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L399)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f47

▸ **key_f47**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f47](_declarations_tput_d_.tput.md#key_f47)*

*Defined in [declarations/tput.d.ts:400](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L400)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f48

▸ **key_f48**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f48](_declarations_tput_d_.tput.md#key_f48)*

*Defined in [declarations/tput.d.ts:401](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L401)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f49

▸ **key_f49**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f49](_declarations_tput_d_.tput.md#key_f49)*

*Defined in [declarations/tput.d.ts:402](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L402)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f5

▸ **key_f5**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f5](_declarations_tput_d_.tput.md#key_f5)*

*Defined in [declarations/tput.d.ts:308](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L308)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f50

▸ **key_f50**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f50](_declarations_tput_d_.tput.md#key_f50)*

*Defined in [declarations/tput.d.ts:403](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L403)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f51

▸ **key_f51**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f51](_declarations_tput_d_.tput.md#key_f51)*

*Defined in [declarations/tput.d.ts:404](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L404)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f52

▸ **key_f52**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f52](_declarations_tput_d_.tput.md#key_f52)*

*Defined in [declarations/tput.d.ts:405](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L405)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f53

▸ **key_f53**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f53](_declarations_tput_d_.tput.md#key_f53)*

*Defined in [declarations/tput.d.ts:406](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L406)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f54

▸ **key_f54**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f54](_declarations_tput_d_.tput.md#key_f54)*

*Defined in [declarations/tput.d.ts:407](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L407)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f55

▸ **key_f55**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f55](_declarations_tput_d_.tput.md#key_f55)*

*Defined in [declarations/tput.d.ts:408](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L408)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f56

▸ **key_f56**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f56](_declarations_tput_d_.tput.md#key_f56)*

*Defined in [declarations/tput.d.ts:409](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L409)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f57

▸ **key_f57**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f57](_declarations_tput_d_.tput.md#key_f57)*

*Defined in [declarations/tput.d.ts:410](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L410)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f58

▸ **key_f58**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f58](_declarations_tput_d_.tput.md#key_f58)*

*Defined in [declarations/tput.d.ts:411](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L411)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f59

▸ **key_f59**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f59](_declarations_tput_d_.tput.md#key_f59)*

*Defined in [declarations/tput.d.ts:412](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L412)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f6

▸ **key_f6**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f6](_declarations_tput_d_.tput.md#key_f6)*

*Defined in [declarations/tput.d.ts:309](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L309)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f60

▸ **key_f60**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f60](_declarations_tput_d_.tput.md#key_f60)*

*Defined in [declarations/tput.d.ts:413](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L413)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f61

▸ **key_f61**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f61](_declarations_tput_d_.tput.md#key_f61)*

*Defined in [declarations/tput.d.ts:414](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L414)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f62

▸ **key_f62**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f62](_declarations_tput_d_.tput.md#key_f62)*

*Defined in [declarations/tput.d.ts:415](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L415)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f63

▸ **key_f63**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f63](_declarations_tput_d_.tput.md#key_f63)*

*Defined in [declarations/tput.d.ts:416](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L416)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f7

▸ **key_f7**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f7](_declarations_tput_d_.tput.md#key_f7)*

*Defined in [declarations/tput.d.ts:310](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L310)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f8

▸ **key_f8**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f8](_declarations_tput_d_.tput.md#key_f8)*

*Defined in [declarations/tput.d.ts:311](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L311)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_f9

▸ **key_f9**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_f9](_declarations_tput_d_.tput.md#key_f9)*

*Defined in [declarations/tput.d.ts:312](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L312)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_find

▸ **key_find**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_find](_declarations_tput_d_.tput.md#key_find)*

*Defined in [declarations/tput.d.ts:501](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L501)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_help

▸ **key_help**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_help](_declarations_tput_d_.tput.md#key_help)*

*Defined in [declarations/tput.d.ts:502](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L502)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_home

▸ **key_home**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_home](_declarations_tput_d_.tput.md#key_home)*

*Defined in [declarations/tput.d.ts:313](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L313)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_ic

▸ **key_ic**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_ic](_declarations_tput_d_.tput.md#key_ic)*

*Defined in [declarations/tput.d.ts:314](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L314)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_il

▸ **key_il**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_il](_declarations_tput_d_.tput.md#key_il)*

*Defined in [declarations/tput.d.ts:453](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L453)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_left

▸ **key_left**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_left](_declarations_tput_d_.tput.md#key_left)*

*Defined in [declarations/tput.d.ts:315](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L315)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_ll

▸ **key_ll**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_ll](_declarations_tput_d_.tput.md#key_ll)*

*Defined in [declarations/tput.d.ts:454](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L454)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_mark

▸ **key_mark**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_mark](_declarations_tput_d_.tput.md#key_mark)*

*Defined in [declarations/tput.d.ts:503](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L503)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_message

▸ **key_message**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_message](_declarations_tput_d_.tput.md#key_message)*

*Defined in [declarations/tput.d.ts:504](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L504)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_mouse

▸ **key_mouse**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_mouse](_declarations_tput_d_.tput.md#key_mouse)*

*Defined in [declarations/tput.d.ts:424](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L424)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_move

▸ **key_move**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_move](_declarations_tput_d_.tput.md#key_move)*

*Defined in [declarations/tput.d.ts:505](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L505)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_next

▸ **key_next**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_next](_declarations_tput_d_.tput.md#key_next)*

*Defined in [declarations/tput.d.ts:506](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L506)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_npage

▸ **key_npage**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_npage](_declarations_tput_d_.tput.md#key_npage)*

*Defined in [declarations/tput.d.ts:316](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L316)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_open

▸ **key_open**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_open](_declarations_tput_d_.tput.md#key_open)*

*Defined in [declarations/tput.d.ts:507](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L507)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_options

▸ **key_options**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_options](_declarations_tput_d_.tput.md#key_options)*

*Defined in [declarations/tput.d.ts:508](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L508)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_ppage

▸ **key_ppage**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_ppage](_declarations_tput_d_.tput.md#key_ppage)*

*Defined in [declarations/tput.d.ts:317](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L317)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_previous

▸ **key_previous**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_previous](_declarations_tput_d_.tput.md#key_previous)*

*Defined in [declarations/tput.d.ts:509](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L509)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_print

▸ **key_print**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_print](_declarations_tput_d_.tput.md#key_print)*

*Defined in [declarations/tput.d.ts:510](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L510)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_redo

▸ **key_redo**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_redo](_declarations_tput_d_.tput.md#key_redo)*

*Defined in [declarations/tput.d.ts:511](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L511)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_reference

▸ **key_reference**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_reference](_declarations_tput_d_.tput.md#key_reference)*

*Defined in [declarations/tput.d.ts:512](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L512)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_refresh

▸ **key_refresh**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_refresh](_declarations_tput_d_.tput.md#key_refresh)*

*Defined in [declarations/tput.d.ts:513](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L513)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_replace

▸ **key_replace**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_replace](_declarations_tput_d_.tput.md#key_replace)*

*Defined in [declarations/tput.d.ts:514](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L514)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_restart

▸ **key_restart**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_restart](_declarations_tput_d_.tput.md#key_restart)*

*Defined in [declarations/tput.d.ts:515](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L515)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_resume

▸ **key_resume**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_resume](_declarations_tput_d_.tput.md#key_resume)*

*Defined in [declarations/tput.d.ts:516](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L516)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_right

▸ **key_right**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_right](_declarations_tput_d_.tput.md#key_right)*

*Defined in [declarations/tput.d.ts:318](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L318)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_save

▸ **key_save**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_save](_declarations_tput_d_.tput.md#key_save)*

*Defined in [declarations/tput.d.ts:517](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L517)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sbeg

▸ **key_sbeg**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sbeg](_declarations_tput_d_.tput.md#key_sbeg)*

*Defined in [declarations/tput.d.ts:520](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L520)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_scancel

▸ **key_scancel**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_scancel](_declarations_tput_d_.tput.md#key_scancel)*

*Defined in [declarations/tput.d.ts:521](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L521)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_scommand

▸ **key_scommand**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_scommand](_declarations_tput_d_.tput.md#key_scommand)*

*Defined in [declarations/tput.d.ts:522](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L522)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_scopy

▸ **key_scopy**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_scopy](_declarations_tput_d_.tput.md#key_scopy)*

*Defined in [declarations/tput.d.ts:523](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L523)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_screate

▸ **key_screate**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_screate](_declarations_tput_d_.tput.md#key_screate)*

*Defined in [declarations/tput.d.ts:524](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L524)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sdc

▸ **key_sdc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sdc](_declarations_tput_d_.tput.md#key_sdc)*

*Defined in [declarations/tput.d.ts:356](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L356)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sdl

▸ **key_sdl**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sdl](_declarations_tput_d_.tput.md#key_sdl)*

*Defined in [declarations/tput.d.ts:525](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L525)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_select

▸ **key_select**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_select](_declarations_tput_d_.tput.md#key_select)*

*Defined in [declarations/tput.d.ts:526](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L526)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_send

▸ **key_send**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_send](_declarations_tput_d_.tput.md#key_send)*

*Defined in [declarations/tput.d.ts:357](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L357)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_seol

▸ **key_seol**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_seol](_declarations_tput_d_.tput.md#key_seol)*

*Defined in [declarations/tput.d.ts:527](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L527)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sexit

▸ **key_sexit**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sexit](_declarations_tput_d_.tput.md#key_sexit)*

*Defined in [declarations/tput.d.ts:528](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L528)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sf

▸ **key_sf**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sf](_declarations_tput_d_.tput.md#key_sf)*

*Defined in [declarations/tput.d.ts:319](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L319)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sfind

▸ **key_sfind**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sfind](_declarations_tput_d_.tput.md#key_sfind)*

*Defined in [declarations/tput.d.ts:529](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L529)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_shelp

▸ **key_shelp**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_shelp](_declarations_tput_d_.tput.md#key_shelp)*

*Defined in [declarations/tput.d.ts:530](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L530)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_shome

▸ **key_shome**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_shome](_declarations_tput_d_.tput.md#key_shome)*

*Defined in [declarations/tput.d.ts:358](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L358)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sic

▸ **key_sic**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sic](_declarations_tput_d_.tput.md#key_sic)*

*Defined in [declarations/tput.d.ts:359](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L359)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sleft

▸ **key_sleft**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sleft](_declarations_tput_d_.tput.md#key_sleft)*

*Defined in [declarations/tput.d.ts:360](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L360)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_smessage

▸ **key_smessage**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_smessage](_declarations_tput_d_.tput.md#key_smessage)*

*Defined in [declarations/tput.d.ts:531](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L531)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_smove

▸ **key_smove**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_smove](_declarations_tput_d_.tput.md#key_smove)*

*Defined in [declarations/tput.d.ts:532](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L532)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_snext

▸ **key_snext**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_snext](_declarations_tput_d_.tput.md#key_snext)*

*Defined in [declarations/tput.d.ts:361](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L361)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_soptions

▸ **key_soptions**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_soptions](_declarations_tput_d_.tput.md#key_soptions)*

*Defined in [declarations/tput.d.ts:533](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L533)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sprevious

▸ **key_sprevious**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sprevious](_declarations_tput_d_.tput.md#key_sprevious)*

*Defined in [declarations/tput.d.ts:362](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L362)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sprint

▸ **key_sprint**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sprint](_declarations_tput_d_.tput.md#key_sprint)*

*Defined in [declarations/tput.d.ts:534](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L534)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sr

▸ **key_sr**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sr](_declarations_tput_d_.tput.md#key_sr)*

*Defined in [declarations/tput.d.ts:320](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L320)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sredo

▸ **key_sredo**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sredo](_declarations_tput_d_.tput.md#key_sredo)*

*Defined in [declarations/tput.d.ts:535](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L535)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sreplace

▸ **key_sreplace**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sreplace](_declarations_tput_d_.tput.md#key_sreplace)*

*Defined in [declarations/tput.d.ts:536](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L536)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sright

▸ **key_sright**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sright](_declarations_tput_d_.tput.md#key_sright)*

*Defined in [declarations/tput.d.ts:363](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L363)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_srsume

▸ **key_srsume**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_srsume](_declarations_tput_d_.tput.md#key_srsume)*

*Defined in [declarations/tput.d.ts:537](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L537)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_ssave

▸ **key_ssave**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_ssave](_declarations_tput_d_.tput.md#key_ssave)*

*Defined in [declarations/tput.d.ts:538](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L538)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_ssuspend

▸ **key_ssuspend**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_ssuspend](_declarations_tput_d_.tput.md#key_ssuspend)*

*Defined in [declarations/tput.d.ts:539](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L539)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_stab

▸ **key_stab**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_stab](_declarations_tput_d_.tput.md#key_stab)*

*Defined in [declarations/tput.d.ts:455](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L455)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_sundo

▸ **key_sundo**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_sundo](_declarations_tput_d_.tput.md#key_sundo)*

*Defined in [declarations/tput.d.ts:540](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L540)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_suspend

▸ **key_suspend**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_suspend](_declarations_tput_d_.tput.md#key_suspend)*

*Defined in [declarations/tput.d.ts:518](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L518)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_undo

▸ **key_undo**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_undo](_declarations_tput_d_.tput.md#key_undo)*

*Defined in [declarations/tput.d.ts:519](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L519)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  key_up

▸ **key_up**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[key_up](_declarations_tput_d_.tput.md#key_up)*

*Defined in [declarations/tput.d.ts:321](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L321)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  keypad_local

▸ **keypad_local**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[keypad_local](_declarations_tput_d_.tput.md#keypad_local)*

*Defined in [declarations/tput.d.ts:322](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L322)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  keypad_xmit

▸ **keypad_xmit**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[keypad_xmit](_declarations_tput_d_.tput.md#keypad_xmit)*

*Defined in [declarations/tput.d.ts:323](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L323)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf0

▸ **kf0**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf0](_declarations_tput_d_.tput.md#kf0)*

*Defined in [declarations/tput.d.ts:863](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L863)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf1

▸ **kf1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf1](_declarations_tput_d_.tput.md#kf1)*

*Defined in [declarations/tput.d.ts:717](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L717)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf10

▸ **kf10**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf10](_declarations_tput_d_.tput.md#kf10)*

*Defined in [declarations/tput.d.ts:718](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L718)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf11

▸ **kf11**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf11](_declarations_tput_d_.tput.md#kf11)*

*Defined in [declarations/tput.d.ts:777](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L777)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf12

▸ **kf12**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf12](_declarations_tput_d_.tput.md#kf12)*

*Defined in [declarations/tput.d.ts:778](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L778)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf13

▸ **kf13**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf13](_declarations_tput_d_.tput.md#kf13)*

*Defined in [declarations/tput.d.ts:779](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L779)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf14

▸ **kf14**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf14](_declarations_tput_d_.tput.md#kf14)*

*Defined in [declarations/tput.d.ts:780](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L780)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf15

▸ **kf15**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf15](_declarations_tput_d_.tput.md#kf15)*

*Defined in [declarations/tput.d.ts:781](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L781)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf16

▸ **kf16**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf16](_declarations_tput_d_.tput.md#kf16)*

*Defined in [declarations/tput.d.ts:782](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L782)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf17

▸ **kf17**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf17](_declarations_tput_d_.tput.md#kf17)*

*Defined in [declarations/tput.d.ts:783](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L783)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf18

▸ **kf18**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf18](_declarations_tput_d_.tput.md#kf18)*

*Defined in [declarations/tput.d.ts:784](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L784)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf19

▸ **kf19**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf19](_declarations_tput_d_.tput.md#kf19)*

*Defined in [declarations/tput.d.ts:785](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L785)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf2

▸ **kf2**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf2](_declarations_tput_d_.tput.md#kf2)*

*Defined in [declarations/tput.d.ts:719](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L719)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf20

▸ **kf20**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf20](_declarations_tput_d_.tput.md#kf20)*

*Defined in [declarations/tput.d.ts:786](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L786)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf21

▸ **kf21**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf21](_declarations_tput_d_.tput.md#kf21)*

*Defined in [declarations/tput.d.ts:787](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L787)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf22

▸ **kf22**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf22](_declarations_tput_d_.tput.md#kf22)*

*Defined in [declarations/tput.d.ts:788](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L788)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf23

▸ **kf23**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf23](_declarations_tput_d_.tput.md#kf23)*

*Defined in [declarations/tput.d.ts:789](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L789)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf24

▸ **kf24**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf24](_declarations_tput_d_.tput.md#kf24)*

*Defined in [declarations/tput.d.ts:790](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L790)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf25

▸ **kf25**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf25](_declarations_tput_d_.tput.md#kf25)*

*Defined in [declarations/tput.d.ts:791](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L791)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf26

▸ **kf26**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf26](_declarations_tput_d_.tput.md#kf26)*

*Defined in [declarations/tput.d.ts:792](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L792)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf27

▸ **kf27**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf27](_declarations_tput_d_.tput.md#kf27)*

*Defined in [declarations/tput.d.ts:793](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L793)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf28

▸ **kf28**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf28](_declarations_tput_d_.tput.md#kf28)*

*Defined in [declarations/tput.d.ts:794](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L794)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf29

▸ **kf29**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf29](_declarations_tput_d_.tput.md#kf29)*

*Defined in [declarations/tput.d.ts:795](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L795)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf3

▸ **kf3**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf3](_declarations_tput_d_.tput.md#kf3)*

*Defined in [declarations/tput.d.ts:720](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L720)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf30

▸ **kf30**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf30](_declarations_tput_d_.tput.md#kf30)*

*Defined in [declarations/tput.d.ts:796](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L796)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf31

▸ **kf31**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf31](_declarations_tput_d_.tput.md#kf31)*

*Defined in [declarations/tput.d.ts:797](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L797)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf32

▸ **kf32**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf32](_declarations_tput_d_.tput.md#kf32)*

*Defined in [declarations/tput.d.ts:798](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L798)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf33

▸ **kf33**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf33](_declarations_tput_d_.tput.md#kf33)*

*Defined in [declarations/tput.d.ts:799](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L799)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf34

▸ **kf34**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf34](_declarations_tput_d_.tput.md#kf34)*

*Defined in [declarations/tput.d.ts:800](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L800)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf35

▸ **kf35**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf35](_declarations_tput_d_.tput.md#kf35)*

*Defined in [declarations/tput.d.ts:801](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L801)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf36

▸ **kf36**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf36](_declarations_tput_d_.tput.md#kf36)*

*Defined in [declarations/tput.d.ts:802](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L802)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf37

▸ **kf37**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf37](_declarations_tput_d_.tput.md#kf37)*

*Defined in [declarations/tput.d.ts:803](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L803)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf38

▸ **kf38**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf38](_declarations_tput_d_.tput.md#kf38)*

*Defined in [declarations/tput.d.ts:804](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L804)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf39

▸ **kf39**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf39](_declarations_tput_d_.tput.md#kf39)*

*Defined in [declarations/tput.d.ts:805](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L805)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf4

▸ **kf4**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf4](_declarations_tput_d_.tput.md#kf4)*

*Defined in [declarations/tput.d.ts:721](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L721)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf40

▸ **kf40**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf40](_declarations_tput_d_.tput.md#kf40)*

*Defined in [declarations/tput.d.ts:806](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L806)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf41

▸ **kf41**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf41](_declarations_tput_d_.tput.md#kf41)*

*Defined in [declarations/tput.d.ts:807](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L807)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf42

▸ **kf42**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf42](_declarations_tput_d_.tput.md#kf42)*

*Defined in [declarations/tput.d.ts:808](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L808)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf43

▸ **kf43**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf43](_declarations_tput_d_.tput.md#kf43)*

*Defined in [declarations/tput.d.ts:809](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L809)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf44

▸ **kf44**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf44](_declarations_tput_d_.tput.md#kf44)*

*Defined in [declarations/tput.d.ts:810](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L810)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf45

▸ **kf45**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf45](_declarations_tput_d_.tput.md#kf45)*

*Defined in [declarations/tput.d.ts:811](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L811)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf46

▸ **kf46**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf46](_declarations_tput_d_.tput.md#kf46)*

*Defined in [declarations/tput.d.ts:812](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L812)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf47

▸ **kf47**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf47](_declarations_tput_d_.tput.md#kf47)*

*Defined in [declarations/tput.d.ts:813](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L813)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf48

▸ **kf48**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf48](_declarations_tput_d_.tput.md#kf48)*

*Defined in [declarations/tput.d.ts:814](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L814)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf49

▸ **kf49**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf49](_declarations_tput_d_.tput.md#kf49)*

*Defined in [declarations/tput.d.ts:815](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L815)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf5

▸ **kf5**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf5](_declarations_tput_d_.tput.md#kf5)*

*Defined in [declarations/tput.d.ts:722](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L722)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf50

▸ **kf50**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf50](_declarations_tput_d_.tput.md#kf50)*

*Defined in [declarations/tput.d.ts:816](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L816)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf51

▸ **kf51**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf51](_declarations_tput_d_.tput.md#kf51)*

*Defined in [declarations/tput.d.ts:817](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L817)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf52

▸ **kf52**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf52](_declarations_tput_d_.tput.md#kf52)*

*Defined in [declarations/tput.d.ts:818](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L818)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf53

▸ **kf53**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf53](_declarations_tput_d_.tput.md#kf53)*

*Defined in [declarations/tput.d.ts:819](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L819)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf54

▸ **kf54**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf54](_declarations_tput_d_.tput.md#kf54)*

*Defined in [declarations/tput.d.ts:820](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L820)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf55

▸ **kf55**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf55](_declarations_tput_d_.tput.md#kf55)*

*Defined in [declarations/tput.d.ts:821](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L821)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf56

▸ **kf56**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf56](_declarations_tput_d_.tput.md#kf56)*

*Defined in [declarations/tput.d.ts:822](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L822)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf57

▸ **kf57**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf57](_declarations_tput_d_.tput.md#kf57)*

*Defined in [declarations/tput.d.ts:823](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L823)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf58

▸ **kf58**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf58](_declarations_tput_d_.tput.md#kf58)*

*Defined in [declarations/tput.d.ts:824](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L824)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf59

▸ **kf59**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf59](_declarations_tput_d_.tput.md#kf59)*

*Defined in [declarations/tput.d.ts:825](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L825)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf6

▸ **kf6**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf6](_declarations_tput_d_.tput.md#kf6)*

*Defined in [declarations/tput.d.ts:723](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L723)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf60

▸ **kf60**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf60](_declarations_tput_d_.tput.md#kf60)*

*Defined in [declarations/tput.d.ts:826](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L826)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf61

▸ **kf61**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf61](_declarations_tput_d_.tput.md#kf61)*

*Defined in [declarations/tput.d.ts:827](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L827)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf62

▸ **kf62**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf62](_declarations_tput_d_.tput.md#kf62)*

*Defined in [declarations/tput.d.ts:828](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L828)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf63

▸ **kf63**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf63](_declarations_tput_d_.tput.md#kf63)*

*Defined in [declarations/tput.d.ts:829](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L829)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf7

▸ **kf7**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf7](_declarations_tput_d_.tput.md#kf7)*

*Defined in [declarations/tput.d.ts:724](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L724)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf8

▸ **kf8**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf8](_declarations_tput_d_.tput.md#kf8)*

*Defined in [declarations/tput.d.ts:725](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L725)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kf9

▸ **kf9**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kf9](_declarations_tput_d_.tput.md#kf9)*

*Defined in [declarations/tput.d.ts:726](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L726)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kfnd

▸ **kfnd**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kfnd](_declarations_tput_d_.tput.md#kfnd)*

*Defined in [declarations/tput.d.ts:912](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L912)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  khlp

▸ **khlp**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[khlp](_declarations_tput_d_.tput.md#khlp)*

*Defined in [declarations/tput.d.ts:913](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L913)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  khome

▸ **khome**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[khome](_declarations_tput_d_.tput.md#khome)*

*Defined in [declarations/tput.d.ts:727](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L727)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  khts

▸ **khts**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[khts](_declarations_tput_d_.tput.md#khts)*

*Defined in [declarations/tput.d.ts:866](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L866)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kich1

▸ **kich1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kich1](_declarations_tput_d_.tput.md#kich1)*

*Defined in [declarations/tput.d.ts:728](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L728)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kil1

▸ **kil1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kil1](_declarations_tput_d_.tput.md#kil1)*

*Defined in [declarations/tput.d.ts:864](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L864)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kind

▸ **kind**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kind](_declarations_tput_d_.tput.md#kind)*

*Defined in [declarations/tput.d.ts:733](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L733)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kll

▸ **kll**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kll](_declarations_tput_d_.tput.md#kll)*

*Defined in [declarations/tput.d.ts:865](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L865)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kmous

▸ **kmous**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kmous](_declarations_tput_d_.tput.md#kmous)*

*Defined in [declarations/tput.d.ts:837](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L837)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kmov

▸ **kmov**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kmov](_declarations_tput_d_.tput.md#kmov)*

*Defined in [declarations/tput.d.ts:916](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L916)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kmrk

▸ **kmrk**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kmrk](_declarations_tput_d_.tput.md#kmrk)*

*Defined in [declarations/tput.d.ts:914](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L914)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kmsg

▸ **kmsg**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kmsg](_declarations_tput_d_.tput.md#kmsg)*

*Defined in [declarations/tput.d.ts:915](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L915)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  knp

▸ **knp**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[knp](_declarations_tput_d_.tput.md#knp)*

*Defined in [declarations/tput.d.ts:730](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L730)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  knxt

▸ **knxt**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[knxt](_declarations_tput_d_.tput.md#knxt)*

*Defined in [declarations/tput.d.ts:917](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L917)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kopn

▸ **kopn**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kopn](_declarations_tput_d_.tput.md#kopn)*

*Defined in [declarations/tput.d.ts:918](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L918)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kopt

▸ **kopt**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kopt](_declarations_tput_d_.tput.md#kopt)*

*Defined in [declarations/tput.d.ts:919](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L919)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kpp

▸ **kpp**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kpp](_declarations_tput_d_.tput.md#kpp)*

*Defined in [declarations/tput.d.ts:731](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L731)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kprt

▸ **kprt**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kprt](_declarations_tput_d_.tput.md#kprt)*

*Defined in [declarations/tput.d.ts:921](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L921)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kprv

▸ **kprv**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kprv](_declarations_tput_d_.tput.md#kprv)*

*Defined in [declarations/tput.d.ts:920](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L920)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  krdo

▸ **krdo**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[krdo](_declarations_tput_d_.tput.md#krdo)*

*Defined in [declarations/tput.d.ts:922](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L922)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kref

▸ **kref**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kref](_declarations_tput_d_.tput.md#kref)*

*Defined in [declarations/tput.d.ts:923](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L923)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kres

▸ **kres**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kres](_declarations_tput_d_.tput.md#kres)*

*Defined in [declarations/tput.d.ts:927](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L927)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  krfr

▸ **krfr**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[krfr](_declarations_tput_d_.tput.md#krfr)*

*Defined in [declarations/tput.d.ts:924](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L924)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kri

▸ **kri**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kri](_declarations_tput_d_.tput.md#kri)*

*Defined in [declarations/tput.d.ts:734](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L734)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  krmir

▸ **krmir**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[krmir](_declarations_tput_d_.tput.md#krmir)*

*Defined in [declarations/tput.d.ts:860](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L860)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  krpl

▸ **krpl**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[krpl](_declarations_tput_d_.tput.md#krpl)*

*Defined in [declarations/tput.d.ts:925](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L925)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  krst

▸ **krst**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[krst](_declarations_tput_d_.tput.md#krst)*

*Defined in [declarations/tput.d.ts:926](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L926)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  ksav

▸ **ksav**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[ksav](_declarations_tput_d_.tput.md#ksav)*

*Defined in [declarations/tput.d.ts:928](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L928)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kslt

▸ **kslt**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kslt](_declarations_tput_d_.tput.md#kslt)*

*Defined in [declarations/tput.d.ts:937](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L937)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kspd

▸ **kspd**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kspd](_declarations_tput_d_.tput.md#kspd)*

*Defined in [declarations/tput.d.ts:929](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L929)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  ktbc

▸ **ktbc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[ktbc](_declarations_tput_d_.tput.md#ktbc)*

*Defined in [declarations/tput.d.ts:856](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L856)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  kund

▸ **kund**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[kund](_declarations_tput_d_.tput.md#kund)*

*Defined in [declarations/tput.d.ts:930](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L930)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lab_f0

▸ **lab_f0**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lab_f0](_declarations_tput_d_.tput.md#lab_f0)*

*Defined in [declarations/tput.d.ts:456](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L456)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lab_f1

▸ **lab_f1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lab_f1](_declarations_tput_d_.tput.md#lab_f1)*

*Defined in [declarations/tput.d.ts:457](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L457)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lab_f10

▸ **lab_f10**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lab_f10](_declarations_tput_d_.tput.md#lab_f10)*

*Defined in [declarations/tput.d.ts:458](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L458)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lab_f2

▸ **lab_f2**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lab_f2](_declarations_tput_d_.tput.md#lab_f2)*

*Defined in [declarations/tput.d.ts:459](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L459)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lab_f3

▸ **lab_f3**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lab_f3](_declarations_tput_d_.tput.md#lab_f3)*

*Defined in [declarations/tput.d.ts:460](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L460)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lab_f4

▸ **lab_f4**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lab_f4](_declarations_tput_d_.tput.md#lab_f4)*

*Defined in [declarations/tput.d.ts:461](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L461)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lab_f5

▸ **lab_f5**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lab_f5](_declarations_tput_d_.tput.md#lab_f5)*

*Defined in [declarations/tput.d.ts:462](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L462)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lab_f6

▸ **lab_f6**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lab_f6](_declarations_tput_d_.tput.md#lab_f6)*

*Defined in [declarations/tput.d.ts:463](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L463)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lab_f7

▸ **lab_f7**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lab_f7](_declarations_tput_d_.tput.md#lab_f7)*

*Defined in [declarations/tput.d.ts:464](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L464)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lab_f8

▸ **lab_f8**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lab_f8](_declarations_tput_d_.tput.md#lab_f8)*

*Defined in [declarations/tput.d.ts:465](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L465)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lab_f9

▸ **lab_f9**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lab_f9](_declarations_tput_d_.tput.md#lab_f9)*

*Defined in [declarations/tput.d.ts:466](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L466)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  label_format

▸ **label_format**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[label_format](_declarations_tput_d_.tput.md#label_format)*

*Defined in [declarations/tput.d.ts:545](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L545)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  label_off

▸ **label_off**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[label_off](_declarations_tput_d_.tput.md#label_off)*

*Defined in [declarations/tput.d.ts:493](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L493)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  label_on

▸ **label_on**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[label_on](_declarations_tput_d_.tput.md#label_on)*

*Defined in [declarations/tput.d.ts:492](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L492)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  left

▸ **left**(`n?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:733](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L733)*

**Parameters:**

Name | Type |
------ | ------ |
`n?` | number |

**Returns:** *boolean*

___

###  lf0

▸ **lf0**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lf0](_declarations_tput_d_.tput.md#lf0)*

*Defined in [declarations/tput.d.ts:867](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L867)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lf1

▸ **lf1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lf1](_declarations_tput_d_.tput.md#lf1)*

*Defined in [declarations/tput.d.ts:868](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L868)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lf10

▸ **lf10**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lf10](_declarations_tput_d_.tput.md#lf10)*

*Defined in [declarations/tput.d.ts:869](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L869)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lf2

▸ **lf2**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lf2](_declarations_tput_d_.tput.md#lf2)*

*Defined in [declarations/tput.d.ts:870](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L870)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lf3

▸ **lf3**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lf3](_declarations_tput_d_.tput.md#lf3)*

*Defined in [declarations/tput.d.ts:871](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L871)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lf4

▸ **lf4**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lf4](_declarations_tput_d_.tput.md#lf4)*

*Defined in [declarations/tput.d.ts:872](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L872)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lf5

▸ **lf5**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lf5](_declarations_tput_d_.tput.md#lf5)*

*Defined in [declarations/tput.d.ts:873](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L873)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lf6

▸ **lf6**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lf6](_declarations_tput_d_.tput.md#lf6)*

*Defined in [declarations/tput.d.ts:874](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L874)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lf7

▸ **lf7**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lf7](_declarations_tput_d_.tput.md#lf7)*

*Defined in [declarations/tput.d.ts:875](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L875)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lf8

▸ **lf8**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lf8](_declarations_tput_d_.tput.md#lf8)*

*Defined in [declarations/tput.d.ts:876](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L876)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lf9

▸ **lf9**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lf9](_declarations_tput_d_.tput.md#lf9)*

*Defined in [declarations/tput.d.ts:877](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L877)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lineHeight

▸ **lineHeight**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:666](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L666)*

**Returns:** *boolean*

___

###  linePosAbsolute

▸ **linePosAbsolute**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:929](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L929)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  linefeed_if_not_lf

▸ **linefeed_if_not_lf**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[linefeed_if_not_lf](_declarations_tput_d_.tput.md#linefeed_if_not_lf)*

*Defined in [declarations/tput.d.ts:659](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L659)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  listen

▸ **listen**(): *void*

*Defined in [declarations/blessedProgram.d.ts:473](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L473)*

**Returns:** *void*

___

###  listenerCount

▸ **listenerCount**(`type`: string | symbol): *number*

*Defined in [declarations/blessedProgram.d.ts:257](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L257)*

**Parameters:**

Name | Type |
------ | ------ |
`type` | string &#124; symbol |

**Returns:** *number*

___

###  listeners

▸ **listeners**(`event`: string | symbol): *Function[]*

*Defined in [declarations/blessedProgram.d.ts:253](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L253)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  ll

▸ **ll**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[ll](_declarations_tput_d_.tput.md#ll)*

*Defined in [declarations/tput.d.ts:842](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L842)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  loadLEDs

▸ **loadLEDs**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1295](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1295)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  log

▸ **log**(...`args`: any[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:462](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L462)*

Writes arguments to [log](_declarations_blessedprogram_d_.blessedprogram.md#log) file passed in options.

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *boolean*

___

###  lpi

▸ **lpi**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[lpi](_declarations_tput_d_.tput.md#lpi)*

*Defined in [declarations/tput.d.ts:980](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L980)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  lrestoreCursor

▸ **lrestoreCursor**(`key?`: string, `hide?`: boolean): *void*

*Defined in [declarations/blessedProgram.d.ts:665](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L665)*

**Parameters:**

Name | Type |
------ | ------ |
`key?` | string |
`hide?` | boolean |

**Returns:** *void*

___

###  lsaveCursor

▸ **lsaveCursor**(`key?`: string): *void*

*Defined in [declarations/blessedProgram.d.ts:664](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L664)*

**Parameters:**

Name | Type |
------ | ------ |
`key?` | string |

**Returns:** *void*

___

###  manipulateWindow

▸ **manipulateWindow**(`data1`: number, `data2`: number | undefined, `c`: [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1424](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1424)*

```
CSI Ps ; Ps ; Ps t
Window manipulation (from dtterm, as well as extensions).
These controls may be disabled using the allowWindowOps
resource.  Valid values for the first (and any additional
parameters) are:
```
Ps = 1  -> De-iconify window.
Ps = 2  -> Iconify window.
Ps = 3  ;  x ;  y -> Move window to [x, y].
Ps = 4  ;  height ;  width -> Resize the xterm window to
height and width in pixels.
Ps = 5  -> Raise the xterm window to the front of the stack-
ing order.
Ps = 6  -> Lower the xterm window to the bottom of the
stacking order.
Ps = 7  -> Refresh the xterm window.
Ps = 8  ;  height ;  width -> Resize the text area to
[height;width] in characters.
Ps = 9  ;  0  -> Restore maximized window.
Ps = 9  ;  1  -> Maximize window (i.e., resize to screen
size).
Ps = 1 0  ;  0  -> Undo full-screen mode.
Ps = 1 0  ;  1  -> Change to full-screen.
Ps = 1 1  -> Report xterm window state.  If the xterm window
is open (non-iconified), it returns CSI 1 t .  If the xterm
window is iconified, it returns CSI 2 t .
Ps = 1 3  -> Report xterm window position.  Result is CSI 3
; x ; y t
Ps = 1 4  -> Report xterm window in pixels.  Result is CSI
4  ;  height ;  width t
Ps = 1 8  -> Report the size of the text area in characters.
Result is CSI  8  ;  height ;  width t
Ps = 1 9  -> Report the size of the screen in characters.
Result is CSI  9  ;  height ;  width t
Ps = 2 0  -> Report xterm window's icon label.  Result is
OSC  L  label ST
Ps = 2 1  -> Report xterm window's title.  Result is OSC  l
label ST
Ps = 2 2  ;  0  -> Save xterm icon and window title on
stack.
Ps = 2 2  ;  1  -> Save xterm icon title on stack.
Ps = 2 2  ;  2  -> Save xterm window title on stack.
Ps = 2 3  ;  0  -> Restore xterm icon and window title from
stack.
Ps = 2 3  ;  1  -> Restore xterm icon title from stack.
Ps = 2 3  ;  2  -> Restore xterm window title from stack.
Ps >= 2 4  -> Resize to Ps lines (DECSLPP).
Ps >= 2 4  -> Resize to Ps lines (DECSLPP).
```
```
Example call:
```
program.manipulateWindow(18, function(err:any, data:any) {
program.log('manipulateWindow', data);
});

```

**Parameters:**

Name | Type |
------ | ------ |
`data1` | number |
`data2` | number &#124; undefined |
`c` | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** *boolean*

▸ **manipulateWindow**(`data1`: number, `c`: [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1425](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1425)*

**Parameters:**

Name | Type |
------ | ------ |
`data1` | number |
`c` | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** *boolean*

___

###  mc

▸ **mc**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1255](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1255)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  mc0

▸ **mc0**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[mc0](_declarations_tput_d_.tput.md#mc0)*

*Defined in [declarations/blessedProgram.d.ts:1257](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1257)*

**Returns:** *boolean*

___

###  mc4

▸ **mc4**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[mc4](_declarations_tput_d_.tput.md#mc4)*

*Defined in [declarations/blessedProgram.d.ts:1263](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1263)*

**Returns:** *boolean*

___

###  mc5

▸ **mc5**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[mc5](_declarations_tput_d_.tput.md#mc5)*

*Defined in [declarations/blessedProgram.d.ts:1260](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1260)*

**Returns:** *boolean*

___

###  mc5p

▸ **mc5p**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[mc5p](_declarations_tput_d_.tput.md#mc5p)*

*Defined in [declarations/blessedProgram.d.ts:1266](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1266)*

**Returns:** *boolean*

___

###  mcub

▸ **mcub**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[mcub](_declarations_tput_d_.tput.md#mcub)*

*Defined in [declarations/tput.d.ts:1011](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1011)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  mcub1

▸ **mcub1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[mcub1](_declarations_tput_d_.tput.md#mcub1)*

*Defined in [declarations/tput.d.ts:1005](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1005)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  mcud

▸ **mcud**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[mcud](_declarations_tput_d_.tput.md#mcud)*

*Defined in [declarations/tput.d.ts:1010](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1010)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  mcud1

▸ **mcud1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[mcud1](_declarations_tput_d_.tput.md#mcud1)*

*Defined in [declarations/tput.d.ts:1004](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1004)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  mcuf

▸ **mcuf**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[mcuf](_declarations_tput_d_.tput.md#mcuf)*

*Defined in [declarations/tput.d.ts:1012](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1012)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  mcuf1

▸ **mcuf1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[mcuf1](_declarations_tput_d_.tput.md#mcuf1)*

*Defined in [declarations/tput.d.ts:1006](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1006)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  mcuu

▸ **mcuu**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[mcuu](_declarations_tput_d_.tput.md#mcuu)*

*Defined in [declarations/tput.d.ts:1013](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1013)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  mcuu1

▸ **mcuu1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[mcuu1](_declarations_tput_d_.tput.md#mcuu1)*

*Defined in [declarations/tput.d.ts:1008](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1008)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  mediaCopy

▸ **mediaCopy**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1254](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1254)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  memory_lock

▸ **memory_lock**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[memory_lock](_declarations_tput_d_.tput.md#memory_lock)*

*Defined in [declarations/tput.d.ts:427](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L427)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  memory_unlock

▸ **memory_unlock**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[memory_unlock](_declarations_tput_d_.tput.md#memory_unlock)*

*Defined in [declarations/tput.d.ts:428](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L428)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  meta_off

▸ **meta_off**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[meta_off](_declarations_tput_d_.tput.md#meta_off)*

*Defined in [declarations/tput.d.ts:324](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L324)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  meta_on

▸ **meta_on**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[meta_on](_declarations_tput_d_.tput.md#meta_on)*

*Defined in [declarations/tput.d.ts:325](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L325)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  mgc

▸ **mgc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[mgc](_declarations_tput_d_.tput.md#mgc)*

*Defined in [declarations/tput.d.ts:953](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L953)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  mhpa

▸ **mhpa**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[mhpa](_declarations_tput_d_.tput.md#mhpa)*

*Defined in [declarations/tput.d.ts:1003](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1003)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  micro_column_address

▸ **micro_column_address**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[micro_column_address](_declarations_tput_d_.tput.md#micro_column_address)*

*Defined in [declarations/tput.d.ts:594](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L594)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  micro_down

▸ **micro_down**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[micro_down](_declarations_tput_d_.tput.md#micro_down)*

*Defined in [declarations/tput.d.ts:595](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L595)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  micro_left

▸ **micro_left**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[micro_left](_declarations_tput_d_.tput.md#micro_left)*

*Defined in [declarations/tput.d.ts:596](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L596)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  micro_right

▸ **micro_right**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[micro_right](_declarations_tput_d_.tput.md#micro_right)*

*Defined in [declarations/tput.d.ts:597](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L597)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  micro_row_address

▸ **micro_row_address**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[micro_row_address](_declarations_tput_d_.tput.md#micro_row_address)*

*Defined in [declarations/tput.d.ts:598](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L598)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  micro_up

▸ **micro_up**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[micro_up](_declarations_tput_d_.tput.md#micro_up)*

*Defined in [declarations/tput.d.ts:599](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L599)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  minfo

▸ **minfo**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[minfo](_declarations_tput_d_.tput.md#minfo)*

*Defined in [declarations/tput.d.ts:1030](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1030)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  mouse_info

▸ **mouse_info**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[mouse_info](_declarations_tput_d_.tput.md#mouse_info)*

*Defined in [declarations/tput.d.ts:621](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L621)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  move

▸ **move**(`x`: number, `y`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:546](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L546)*

alias for [cursorPos](_declarations_blessedprogram_d_.blessedprogram.md#cursorpos).

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *boolean*

___

###  mrcup

▸ **mrcup**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[mrcup](_declarations_tput_d_.tput.md#mrcup)*

*Defined in [declarations/tput.d.ts:841](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L841)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  mvpa

▸ **mvpa**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[mvpa](_declarations_tput_d_.tput.md#mvpa)*

*Defined in [declarations/tput.d.ts:1007](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1007)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  nel

▸ **nel**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[nel](_declarations_tput_d_.tput.md#nel)*

*Defined in [declarations/tput.d.ts:878](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L878)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  newline

▸ **newline**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[newline](_declarations_tput_d_.tput.md#newline)*

*Defined in [declarations/blessedProgram.d.ts:641](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L641)*

**Returns:** *boolean*

___

###  nextLine

▸ **nextLine**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:648](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L648)*

**Returns:** *boolean*

___

###  nl

▸ **nl**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:642](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L642)*

**Returns:** *boolean*

___

###  normalBuffer

▸ **normalBuffer**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1140](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1140)*

**Returns:** *boolean*

___

###  nul

▸ **nul**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:618](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L618)*

**Returns:** *boolean*

___

###  oc

▸ **oc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[oc](_declarations_tput_d_.tput.md#oc)*

*Defined in [declarations/tput.d.ts:974](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L974)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  off

▸ **off**(`event`: string | symbol, `listener`: function): *this*

*Defined in [declarations/blessedProgram.d.ts:249](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L249)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  omove

▸ **omove**(`x`: number, `y`: number): *void*

*Defined in [declarations/blessedProgram.d.ts:548](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L548)*

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *void*

___

###  on

▸ **on**(`e`: "mouse", `c`: function): *this*

*Defined in [declarations/blessedProgram.d.ts:1633](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1633)*

Triggered when native events in the host terminal window .

**Parameters:**

▪ **e**: *"mouse"*

▪ **c**: *function*

▸ (`e`: [GpmEvent](../interfaces/_declarations_blessedprogram_d_.gpmevent.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`e` | [GpmEvent](../interfaces/_declarations_blessedprogram_d_.gpmevent.md) |

**Returns:** *this*

▸ **on**(`e`: "resize", `c`: function): *this*

*Defined in [declarations/blessedProgram.d.ts:1638](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1638)*

Triggered when the terminal window is resized.

**Parameters:**

▪ **e**: *"resize"*

▪ **c**: *function*

▸ (`e`: object): *void*

**Parameters:**

▪ **e**: *object*

Name | Type |
------ | ------ |
`cols` | number |
`rows` | number |
`winch` | boolean |

**Returns:** *this*

▸ **on**(`e`: "focus", `c`: function): *this*

*Defined in [declarations/blessedProgram.d.ts:1644](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1644)*

Triggered when the terminal window gains focus n the host window manager. For exmmple when the user
switchst form another application to the terminal with ctrl-tab.  Notice that these are native events,
ocurring outside the terminal application.

**Parameters:**

▪ **e**: *"focus"*

▪ **c**: *function*

▸ (`e`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *this*

▸ **on**(`e`: "blur", `c`: function): *this*

*Defined in [declarations/blessedProgram.d.ts:1650](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1650)*

Triggered when the terminal window loose focus host window manager. For exmmple when the user switchs
from the shell to another form another application . Notice that these are native events, ocurring
outside the terminal application.

**Parameters:**

▪ **e**: *"blur"*

▪ **c**: *function*

▸ (`e`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *this*

▸ **on**(`e`: "keypress", `c`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *this*

*Defined in [declarations/blessedProgram.d.ts:1657](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1657)*

Triggered on any key press. If you need to listen only for particular keys, use `'key'`. For example:

```program.on('key tab', (ch, key)=>{})```

**Parameters:**

Name | Type |
------ | ------ |
`e` | "keypress" |
`c` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** *this*

▸ **on**(`event`: "warning", `callback`: function): *this*

*Defined in [declarations/blessedProgram.d.ts:1661](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1661)*

Received when blessed notices something untoward (output is not a tty, terminfo not found, etc).

**Parameters:**

▪ **event**: *"warning"*

▪ **callback**: *function*

▸ (`text`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *this*

▸ **on**(`e`: string, `c`: function): *this*

*Defined in [declarations/blessedProgram.d.ts:1662](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1662)*

**Parameters:**

▪ **e**: *string*

▪ **c**: *function*

▸ (`e`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`e` | any |

**Returns:** *this*

___

###  once

▸ **once**(`event`: string | symbol, `listener`: function): *this*

*Defined in [declarations/blessedProgram.d.ts:245](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L245)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  onceKey

▸ **onceKey**(`key`: string | string[], `l`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *void*

*Defined in [declarations/blessedProgram.d.ts:476](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L476)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; string[] |
`l` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** *void*

___

###  op

▸ **op**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[op](_declarations_tput_d_.tput.md#op)*

*Defined in [declarations/tput.d.ts:835](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L835)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  order_of_pins

▸ **order_of_pins**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[order_of_pins](_declarations_tput_d_.tput.md#order_of_pins)*

*Defined in [declarations/tput.d.ts:600](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L600)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  orig_colors

▸ **orig_colors**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[orig_colors](_declarations_tput_d_.tput.md#orig_colors)*

*Defined in [declarations/tput.d.ts:565](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L565)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  orig_pair

▸ **orig_pair**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[orig_pair](_declarations_tput_d_.tput.md#orig_pair)*

*Defined in [declarations/tput.d.ts:422](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L422)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  other_non_function_keys

▸ **other_non_function_keys**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[other_non_function_keys](_declarations_tput_d_.tput.md#other_non_function_keys)*

*Defined in [declarations/tput.d.ts:661](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L661)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  out

▸ **out**(`param`: string, ...`args`: any[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1626](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1626)*

**Parameters:**

Name | Type |
------ | ------ |
`param` | string |
`...args` | any[] |

**Returns:** *boolean*

___

###  p0

▸ **p0**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1268](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1268)*

**Returns:** *boolean*

___

###  pad

▸ **pad**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[pad](_declarations_tput_d_.tput.md#pad)*

*Defined in [declarations/tput.d.ts:879](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L879)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  pad_char

▸ **pad_char**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[pad_char](_declarations_tput_d_.tput.md#pad_char)*

*Defined in [declarations/tput.d.ts:468](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L468)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parm_dch

▸ **parm_dch**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parm_dch](_declarations_tput_d_.tput.md#parm_dch)*

*Defined in [declarations/tput.d.ts:326](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L326)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parm_delete_line

▸ **parm_delete_line**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parm_delete_line](_declarations_tput_d_.tput.md#parm_delete_line)*

*Defined in [declarations/tput.d.ts:327](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L327)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parm_down_cursor

▸ **parm_down_cursor**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parm_down_cursor](_declarations_tput_d_.tput.md#parm_down_cursor)*

*Defined in [declarations/tput.d.ts:328](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L328)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parm_down_micro

▸ **parm_down_micro**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parm_down_micro](_declarations_tput_d_.tput.md#parm_down_micro)*

*Defined in [declarations/tput.d.ts:601](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L601)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parm_ich

▸ **parm_ich**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parm_ich](_declarations_tput_d_.tput.md#parm_ich)*

*Defined in [declarations/tput.d.ts:329](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L329)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parm_index

▸ **parm_index**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parm_index](_declarations_tput_d_.tput.md#parm_index)*

*Defined in [declarations/tput.d.ts:330](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L330)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parm_insert_line

▸ **parm_insert_line**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parm_insert_line](_declarations_tput_d_.tput.md#parm_insert_line)*

*Defined in [declarations/tput.d.ts:331](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L331)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parm_left_cursor

▸ **parm_left_cursor**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parm_left_cursor](_declarations_tput_d_.tput.md#parm_left_cursor)*

*Defined in [declarations/tput.d.ts:332](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L332)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parm_left_micro

▸ **parm_left_micro**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parm_left_micro](_declarations_tput_d_.tput.md#parm_left_micro)*

*Defined in [declarations/tput.d.ts:602](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L602)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parm_right_cursor

▸ **parm_right_cursor**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parm_right_cursor](_declarations_tput_d_.tput.md#parm_right_cursor)*

*Defined in [declarations/tput.d.ts:333](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L333)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parm_right_micro

▸ **parm_right_micro**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parm_right_micro](_declarations_tput_d_.tput.md#parm_right_micro)*

*Defined in [declarations/tput.d.ts:603](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L603)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parm_rindex

▸ **parm_rindex**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parm_rindex](_declarations_tput_d_.tput.md#parm_rindex)*

*Defined in [declarations/tput.d.ts:334](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L334)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parm_up_cursor

▸ **parm_up_cursor**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parm_up_cursor](_declarations_tput_d_.tput.md#parm_up_cursor)*

*Defined in [declarations/tput.d.ts:335](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L335)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parm_up_micro

▸ **parm_up_micro**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parm_up_micro](_declarations_tput_d_.tput.md#parm_up_micro)*

*Defined in [declarations/tput.d.ts:604](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L604)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  parseTerminfo

▸ **parseTerminfo**(`data`: any, `file`: string): *[TputInfo](../interfaces/_declarations_tput_d_.tputinfo.md)*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[parseTerminfo](_declarations_tput_d_.tput.md#parseterminfo)*

*Defined in [declarations/tput.d.ts:259](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L259)*

**Parameters:**

Name | Type |
------ | ------ |
`data` | any |
`file` | string |

**Returns:** *[TputInfo](../interfaces/_declarations_tput_d_.tputinfo.md)*

___

###  pause

▸ **pause**(`callback?`: [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)): *Function*

*Overrides [Tput](_declarations_tput_d_.tput.md).[pause](_declarations_tput_d_.tput.md#pause)*

*Defined in [declarations/blessedProgram.d.ts:1628](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1628)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** *Function*

___

###  pc_term_options

▸ **pc_term_options**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[pc_term_options](_declarations_tput_d_.tput.md#pc_term_options)*

*Defined in [declarations/tput.d.ts:646](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L646)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  pctrm

▸ **pctrm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[pctrm](_declarations_tput_d_.tput.md#pctrm)*

*Defined in [declarations/tput.d.ts:1055](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1055)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  pf

▸ **pf**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1265](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1265)*

**Returns:** *boolean*

___

###  pfkey

▸ **pfkey**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[pfkey](_declarations_tput_d_.tput.md#pfkey)*

*Defined in [declarations/tput.d.ts:880](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L880)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  pfloc

▸ **pfloc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[pfloc](_declarations_tput_d_.tput.md#pfloc)*

*Defined in [declarations/tput.d.ts:881](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L881)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  pfx

▸ **pfx**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[pfx](_declarations_tput_d_.tput.md#pfx)*

*Defined in [declarations/tput.d.ts:882](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L882)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  pfxl

▸ **pfxl**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[pfxl](_declarations_tput_d_.tput.md#pfxl)*

*Defined in [declarations/tput.d.ts:1033](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1033)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  pkey_key

▸ **pkey_key**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[pkey_key](_declarations_tput_d_.tput.md#pkey_key)*

*Defined in [declarations/tput.d.ts:469](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L469)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  pkey_local

▸ **pkey_local**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[pkey_local](_declarations_tput_d_.tput.md#pkey_local)*

*Defined in [declarations/tput.d.ts:470](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L470)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  pkey_plab

▸ **pkey_plab**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[pkey_plab](_declarations_tput_d_.tput.md#pkey_plab)*

*Defined in [declarations/tput.d.ts:624](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L624)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  pkey_xmit

▸ **pkey_xmit**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[pkey_xmit](_declarations_tput_d_.tput.md#pkey_xmit)*

*Defined in [declarations/tput.d.ts:471](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L471)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  plab_norm

▸ **plab_norm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[plab_norm](_declarations_tput_d_.tput.md#plab_norm)*

*Defined in [declarations/tput.d.ts:486](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L486)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  pln

▸ **pln**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[pln](_declarations_tput_d_.tput.md#pln)*

*Defined in [declarations/tput.d.ts:897](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L897)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  po

▸ **po**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1262](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1262)*

**Returns:** *boolean*

___

###  porder

▸ **porder**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[porder](_declarations_tput_d_.tput.md#porder)*

*Defined in [declarations/tput.d.ts:1009](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1009)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  pos

▸ **pos**(`row?`: number, `col?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:744](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L744)*

Alias for [cursorPos](_declarations_blessedprogram_d_.blessedprogram.md#cursorpos)

**Parameters:**

Name | Type |
------ | ------ |
`row?` | number |
`col?` | number |

**Returns:** *boolean*

___

###  prependListener

▸ **prependListener**(`event`: string | symbol, `listener`: function): *this*

*Defined in [declarations/blessedProgram.d.ts:246](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L246)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  prependOnceListener

▸ **prependOnceListener**(`event`: string | symbol, `listener`: function): *this*

*Defined in [declarations/blessedProgram.d.ts:247](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L247)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  print

▸ **print**(`text`: string, `attr?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:527](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L527)*

Writes given text to [output](_declarations_blessedprogram_d_.blessedprogram.md#output) at current cursor location and given attrs.

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |
`attr?` | number |

**Returns:** *boolean*

___

###  print_screen

▸ **print_screen**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[print_screen](_declarations_tput_d_.tput.md#print_screen)*

*Defined in [declarations/blessedProgram.d.ts:1258](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1258)*

**Returns:** *boolean*

___

###  prot

▸ **prot**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[prot](_declarations_tput_d_.tput.md#prot)*

*Defined in [declarations/tput.d.ts:847](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L847)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  prtr_non

▸ **prtr_non**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[prtr_non](_declarations_tput_d_.tput.md#prtr_non)*

*Defined in [declarations/blessedProgram.d.ts:1267](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1267)*

**Returns:** *boolean*

___

###  prtr_off

▸ **prtr_off**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[prtr_off](_declarations_tput_d_.tput.md#prtr_off)*

*Defined in [declarations/blessedProgram.d.ts:1264](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1264)*

**Returns:** *boolean*

___

###  prtr_on

▸ **prtr_on**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[prtr_on](_declarations_tput_d_.tput.md#prtr_on)*

*Defined in [declarations/blessedProgram.d.ts:1261](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1261)*

**Returns:** *boolean*

___

###  ps

▸ **ps**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1259](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1259)*

**Returns:** *boolean*

___

###  pulse

▸ **pulse**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[pulse](_declarations_tput_d_.tput.md#pulse)*

*Defined in [declarations/tput.d.ts:555](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L555)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  qdial

▸ **qdial**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[qdial](_declarations_tput_d_.tput.md#qdial)*

*Defined in [declarations/tput.d.ts:964](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L964)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  quick_dial

▸ **quick_dial**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[quick_dial](_declarations_tput_d_.tput.md#quick_dial)*

*Defined in [declarations/tput.d.ts:553](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L553)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rawListeners

▸ **rawListeners**(`event`: string | symbol): *Function[]*

*Defined in [declarations/blessedProgram.d.ts:254](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L254)*

**Parameters:**

Name | Type |
------ | ------ |
`event` | string &#124; symbol |

**Returns:** *Function[]*

___

###  rbim

▸ **rbim**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rbim](_declarations_tput_d_.tput.md#rbim)*

*Defined in [declarations/tput.d.ts:1023](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1023)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rc

▸ **rc**(`key?`: string, `hide?`: boolean): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[rc](_declarations_tput_d_.tput.md#rc)*

*Defined in [declarations/blessedProgram.d.ts:662](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L662)*

alias for [restoreCursor](_declarations_blessedprogram_d_.blessedprogram.md#restorecursor)

**Parameters:**

Name | Type |
------ | ------ |
`key?` | string |
`hide?` | boolean |

**Returns:** *boolean*

___

###  rcA

▸ **rcA**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1200](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1200)*

**`see`** [restoreCursorA](_declarations_blessedprogram_d_.blessedprogram.md#restorecursora)

**Returns:** *boolean*

___

###  rcsd

▸ **rcsd**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rcsd](_declarations_tput_d_.tput.md#rcsd)*

*Defined in [declarations/tput.d.ts:1024](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1024)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  readTerminfo

▸ **readTerminfo**(`term`: string): *string*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[readTerminfo](_declarations_tput_d_.tput.md#readterminfo)*

*Defined in [declarations/tput.d.ts:258](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L258)*

**Parameters:**

Name | Type |
------ | ------ |
`term` | string |

**Returns:** *string*

___

###  removeAllListeners

▸ **removeAllListeners**(`event?`: string | symbol): *this*

*Defined in [declarations/blessedProgram.d.ts:250](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L250)*

**Parameters:**

Name | Type |
------ | ------ |
`event?` | string &#124; symbol |

**Returns:** *this*

___

###  removeKey

▸ **removeKey**(`key`: string | string[], `l`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *void*

*Defined in [declarations/blessedProgram.d.ts:478](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L478)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; string[] |
`l` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** *void*

___

###  removeListener

▸ **removeListener**(`event`: string | symbol, `listener`: function): *this*

*Defined in [declarations/blessedProgram.d.ts:248](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L248)*

**Parameters:**

▪ **event**: *string | symbol*

▪ **listener**: *function*

▸ (...`args`: any[]): *void*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *this*

___

###  remove_clock

▸ **remove_clock**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[remove_clock](_declarations_tput_d_.tput.md#remove_clock)*

*Defined in [declarations/tput.d.ts:548](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L548)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rep

▸ **rep**(`param?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[rep](_declarations_tput_d_.tput.md#rep)*

*Defined in [declarations/blessedProgram.d.ts:1249](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1249)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  repeat

▸ **repeat**(`ch`: string, `i?`: number): *string*

*Defined in [declarations/blessedProgram.d.ts:574](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L574)*

returns `ch` repeated `i` times.

**Parameters:**

Name | Type |
------ | ------ |
`ch` | string |
`i?` | number |

**Returns:** *string*

___

###  repeatPrecedingCharacter

▸ **repeatPrecedingCharacter**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1248](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1248)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  repeat_char

▸ **repeat_char**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[repeat_char](_declarations_tput_d_.tput.md#repeat_char)*

*Defined in [declarations/tput.d.ts:472](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L472)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  req_for_input

▸ **req_for_input**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[req_for_input](_declarations_tput_d_.tput.md#req_for_input)*

*Defined in [declarations/tput.d.ts:541](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L541)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  req_mouse_pos

▸ **req_mouse_pos**(`param?`: string, `callback?`: [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[req_mouse_pos](_declarations_tput_d_.tput.md#req_mouse_pos)*

*Defined in [declarations/blessedProgram.d.ts:1601](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1601)*

**`see`** [requestLocatorPosition](_declarations_blessedprogram_d_.blessedprogram.md#requestlocatorposition)

**Parameters:**

Name | Type |
------ | ------ |
`param?` | string |
`callback?` | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** *boolean*

___

###  reqmp

▸ **reqmp**(`param?`: string, `callback?`: [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[reqmp](_declarations_tput_d_.tput.md#reqmp)*

*Defined in [declarations/blessedProgram.d.ts:1599](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1599)*

**`see`** [requestLocatorPosition](_declarations_blessedprogram_d_.blessedprogram.md#requestlocatorposition)

**Parameters:**

Name | Type |
------ | ------ |
`param?` | string |
`callback?` | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** *boolean*

___

###  requestAnsiMode

▸ **requestAnsiMode**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1289](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1289)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  requestLocatorPosition

▸ **requestLocatorPosition**(`param?`: string, `callback?`: [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1597](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1597)*

```
CSI Ps ' |
Request Locator Position (DECRQLP).
Valid values for the parameter are:
Ps = 0 , 1 or omitted -> transmit a single DECLRP locator
report.

If Locator Reporting has been enabled by a DECELR, xterm will
respond with a DECLRP Locator Report.  This report is also
generated on button up and down events if they have been
enabled with a DECSLE, or when the locator is detected outside
of a filter rectangle, if filter rectangles have been enabled
with a DECEFR.

-> CSI Pe ; Pb ; Pr ; Pc ; Pp &  w

Parameters are [event;button;row;column;page].
Valid values for the event:
Pe = 0  -> locator unavailable - no other parameters sent.
Pe = 1  -> request - xterm received a DECRQLP.
Pe = 2  -> left button down.
Pe = 3  -> left button up.
Pe = 4  -> middle button down.
Pe = 5  -> middle button up.
Pe = 6  -> right button down.
Pe = 7  -> right button up.
Pe = 8  -> M4 button down.
Pe = 9  -> M4 button up.
Pe = 1 0  -> locator outside filter rectangle.
``button'' parameter is a bitmask indicating which buttons are
pressed:
Pb = 0  <- no buttons down.
Pb & 1  <- right button down.
Pb & 2  <- middle button down.
Pb & 4  <- left button down.
Pb & 8  <- M4 button down.
``row'' and``column'' parameters are the coordinates of the
locator position in the xterm window, encoded as ASCII deci-
mal.
The``page'' parameter is not used by xterm, and will be omit-
ted.
```

**Parameters:**

Name | Type |
------ | ------ |
`param?` | string |
`callback?` | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** *boolean*

___

###  requestParameters

▸ **requestParameters**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1491](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1491)*

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

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  requestPrivateMode

▸ **requestPrivateMode**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1291](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1291)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  reset

▸ **reset**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:649](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L649)*

**Returns:** *boolean*

___

###  resetColors

▸ **resetColors**(`param?`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:699](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L699)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | string |

**Returns:** *boolean*

___

###  resetCursor

▸ **resetCursor**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:604](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L604)*

Resets all cursor current modes.

**Returns:** *boolean*

___

###  resetMode

▸ **resetMode**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1131](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1131)*

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

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  resetTitleModes

▸ **resetTitleModes**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1242](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1242)*

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

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  reset_1string

▸ **reset_1string**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[reset_1string](_declarations_tput_d_.tput.md#reset_1string)*

*Defined in [declarations/tput.d.ts:339](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L339)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  reset_2string

▸ **reset_2string**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[reset_2string](_declarations_tput_d_.tput.md#reset_2string)*

*Defined in [declarations/tput.d.ts:340](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L340)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  reset_3string

▸ **reset_3string**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[reset_3string](_declarations_tput_d_.tput.md#reset_3string)*

*Defined in [declarations/tput.d.ts:473](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L473)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  reset_file

▸ **reset_file**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[reset_file](_declarations_tput_d_.tput.md#reset_file)*

*Defined in [declarations/tput.d.ts:474](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L474)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  response

▸ **response**(`name`: string, `text`: string, `callback`: Function, `noBypass?`: boolean): *boolean*

*Defined in [declarations/blessedProgram.d.ts:489](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L489)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`text` | string |
`callback` | Function |
`noBypass?` | boolean |

**Returns:** *boolean*

▸ **response**(`name`: string, `callback?`: Function): *boolean*

*Defined in [declarations/blessedProgram.d.ts:490](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L490)*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`callback?` | Function |

**Returns:** *boolean*

___

###  restoreCursor

▸ **restoreCursor**(`key?`: string, `hide?`: boolean): *boolean*

*Defined in [declarations/blessedProgram.d.ts:660](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L660)*

restore previously saved cursor with [saveCursor](_declarations_blessedprogram_d_.blessedprogram.md#savecursor)

**Parameters:**

Name | Type |
------ | ------ |
`key?` | string |
`hide?` | boolean |

**Returns:** *boolean*

___

###  restoreCursorA

▸ **restoreCursorA**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1196](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1196)*

```
CSI u
Restore cursor (ANSI.SYS).
```

**Returns:** *boolean*

___

###  restorePrivateValues

▸ **restorePrivateValues**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1347](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1347)*

```
CSI ? Pm r
Restore DEC Private Mode Values.  The value of Ps previously
saved is restored.  Ps values are the same as for DECSET.
```

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  restore_cursor

▸ **restore_cursor**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[restore_cursor](_declarations_tput_d_.tput.md#restore_cursor)*

*Defined in [declarations/tput.d.ts:341](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L341)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  return

▸ **return**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:638](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L638)*

**Returns:** *boolean*

___

###  rev

▸ **rev**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rev](_declarations_tput_d_.tput.md#rev)*

*Defined in [declarations/tput.d.ts:701](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L701)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  reverse

▸ **reverse**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:646](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L646)*

**Returns:** *boolean*

___

###  reverseAttrInRectangle

▸ **reverseAttrInRectangle**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1427](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1427)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  reverseIndex

▸ **reverseIndex**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:645](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L645)*

**Returns:** *boolean*

___

###  rf

▸ **rf**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rf](_declarations_tput_d_.tput.md#rf)*

*Defined in [declarations/tput.d.ts:885](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L885)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rfi

▸ **rfi**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rfi](_declarations_tput_d_.tput.md#rfi)*

*Defined in [declarations/tput.d.ts:952](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L952)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  ri

▸ **ri**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[ri](_declarations_tput_d_.tput.md#ri)*

*Defined in [declarations/blessedProgram.d.ts:647](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L647)*

**Returns:** *boolean*

___

###  right

▸ **right**(`n?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:728](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L728)*

**Parameters:**

Name | Type |
------ | ------ |
`n?` | number |

**Returns:** *boolean*

___

###  rin

▸ **rin**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rin](_declarations_tput_d_.tput.md#rin)*

*Defined in [declarations/tput.d.ts:748](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L748)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  ritm

▸ **ritm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[ritm](_declarations_tput_d_.tput.md#ritm)*

*Defined in [declarations/tput.d.ts:996](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L996)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rlm

▸ **rlm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rlm](_declarations_tput_d_.tput.md#rlm)*

*Defined in [declarations/tput.d.ts:997](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L997)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rm

▸ **rm**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1133](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1133)*

**`see`** [resetMode](_declarations_blessedprogram_d_.blessedprogram.md#resetmode)

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  rmacs

▸ **rmacs**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[rmacs](_declarations_tput_d_.tput.md#rmacs)*

*Defined in [declarations/blessedProgram.d.ts:691](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L691)*

**Returns:** *boolean*

___

###  rmam

▸ **rmam**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rmam](_declarations_tput_d_.tput.md#rmam)*

*Defined in [declarations/tput.d.ts:766](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L766)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rmclk

▸ **rmclk**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rmclk](_declarations_tput_d_.tput.md#rmclk)*

*Defined in [declarations/tput.d.ts:959](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L959)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rmcup

▸ **rmcup**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[rmcup](_declarations_tput_d_.tput.md#rmcup)*

*Defined in [declarations/blessedProgram.d.ts:1141](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1141)*

**Returns:** *boolean*

___

###  rmdc

▸ **rmdc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rmdc](_declarations_tput_d_.tput.md#rmdc)*

*Defined in [declarations/tput.d.ts:848](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L848)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rmicm

▸ **rmicm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rmicm](_declarations_tput_d_.tput.md#rmicm)*

*Defined in [declarations/tput.d.ts:998](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L998)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rmir

▸ **rmir**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rmir](_declarations_tput_d_.tput.md#rmir)*

*Defined in [declarations/tput.d.ts:708](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L708)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rmkx

▸ **rmkx**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rmkx](_declarations_tput_d_.tput.md#rmkx)*

*Defined in [declarations/tput.d.ts:736](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L736)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rmln

▸ **rmln**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rmln](_declarations_tput_d_.tput.md#rmln)*

*Defined in [declarations/tput.d.ts:904](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L904)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rmm

▸ **rmm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rmm](_declarations_tput_d_.tput.md#rmm)*

*Defined in [declarations/tput.d.ts:738](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L738)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rmove

▸ **rmove**(`x`: number, `y`: number): *void*

*Defined in [declarations/blessedProgram.d.ts:562](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L562)*

Sets cursor relative position.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |
`y` | number |

**Returns:** *void*

___

###  rmp

▸ **rmp**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rmp](_declarations_tput_d_.tput.md#rmp)*

*Defined in [declarations/tput.d.ts:896](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L896)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rmpch

▸ **rmpch**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rmpch](_declarations_tput_d_.tput.md#rmpch)*

*Defined in [declarations/tput.d.ts:1052](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1052)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rmsc

▸ **rmsc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rmsc](_declarations_tput_d_.tput.md#rmsc)*

*Defined in [declarations/tput.d.ts:1054](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1054)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rmso

▸ **rmso**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rmso](_declarations_tput_d_.tput.md#rmso)*

*Defined in [declarations/tput.d.ts:709](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L709)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rmul

▸ **rmul**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rmul](_declarations_tput_d_.tput.md#rmul)*

*Defined in [declarations/tput.d.ts:710](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L710)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rmxon

▸ **rmxon**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rmxon](_declarations_tput_d_.tput.md#rmxon)*

*Defined in [declarations/tput.d.ts:899](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L899)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  row_address

▸ **row_address**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[row_address](_declarations_tput_d_.tput.md#row_address)*

*Defined in [declarations/tput.d.ts:342](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L342)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rs1

▸ **rs1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rs1](_declarations_tput_d_.tput.md#rs1)*

*Defined in [declarations/tput.d.ts:753](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L753)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rs2

▸ **rs2**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[rs2](_declarations_tput_d_.tput.md#rs2)*

*Defined in [declarations/blessedProgram.d.ts:1287](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1287)*

**Returns:** *boolean*

___

###  rs3

▸ **rs3**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rs3](_declarations_tput_d_.tput.md#rs3)*

*Defined in [declarations/tput.d.ts:884](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L884)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rsetx

▸ **rsetx**(`x`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:553](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L553)*

Sets cursor column relative to current cursor position.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *boolean*

___

###  rsety

▸ **rsety**(`y`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:558](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L558)*

Sets cursor relative row.

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

**Returns:** *boolean*

___

###  rshm

▸ **rshm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rshm](_declarations_tput_d_.tput.md#rshm)*

*Defined in [declarations/tput.d.ts:999](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L999)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rsubm

▸ **rsubm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rsubm](_declarations_tput_d_.tput.md#rsubm)*

*Defined in [declarations/tput.d.ts:1000](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1000)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rsupm

▸ **rsupm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rsupm](_declarations_tput_d_.tput.md#rsupm)*

*Defined in [declarations/tput.d.ts:1001](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1001)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rum

▸ **rum**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rum](_declarations_tput_d_.tput.md#rum)*

*Defined in [declarations/tput.d.ts:1002](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1002)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  rwidm

▸ **rwidm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[rwidm](_declarations_tput_d_.tput.md#rwidm)*

*Defined in [declarations/tput.d.ts:995](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L995)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  s0ds

▸ **s0ds**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[s0ds](_declarations_tput_d_.tput.md#s0ds)*

*Defined in [declarations/tput.d.ts:1036](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1036)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  s1ds

▸ **s1ds**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[s1ds](_declarations_tput_d_.tput.md#s1ds)*

*Defined in [declarations/tput.d.ts:1037](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1037)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  s2ds

▸ **s2ds**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[s2ds](_declarations_tput_d_.tput.md#s2ds)*

*Defined in [declarations/tput.d.ts:1038](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1038)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  s3ds

▸ **s3ds**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[s3ds](_declarations_tput_d_.tput.md#s3ds)*

*Defined in [declarations/tput.d.ts:1039](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1039)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  saveCursor

▸ **saveCursor**(`key`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:654](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L654)*

Saves current cursor state so it can be restored with [restoreCursor](_declarations_blessedprogram_d_.blessedprogram.md#restorecursor)

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *boolean*

___

###  saveCursorA

▸ **saveCursorA**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1186](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1186)*

```
CSI s
Save cursor (ANSI.SYS).
```

**Returns:** *boolean*

___

###  savePrivateValues

▸ **savePrivateValues**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1361](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1361)*

Save DEC Private Mode Values.  Ps values are the same as for

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  saveReportedCursor

▸ **saveReportedCursor**(`callback`: [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)): *void*

*Defined in [declarations/blessedProgram.d.ts:892](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L892)*

**Parameters:**

Name | Type |
------ | ------ |
`callback` | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** *void*

___

###  save_cursor

▸ **save_cursor**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[save_cursor](_declarations_tput_d_.tput.md#save_cursor)*

*Defined in [declarations/tput.d.ts:343](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L343)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  sbim

▸ **sbim**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[sbim](_declarations_tput_d_.tput.md#sbim)*

*Defined in [declarations/tput.d.ts:1021](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1021)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  sc

▸ **sc**(`key`: string): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[sc](_declarations_tput_d_.tput.md#sc)*

*Defined in [declarations/blessedProgram.d.ts:656](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L656)*

alias for [saveCursor](_declarations_blessedprogram_d_.blessedprogram.md#savecursor)

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |

**Returns:** *boolean*

___

###  scA

▸ **scA**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1188](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1188)*

**`see`** [saveCursorA](_declarations_blessedprogram_d_.blessedprogram.md#savecursora)

**Returns:** *boolean*

___

###  scancode_escape

▸ **scancode_escape**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[scancode_escape](_declarations_tput_d_.tput.md#scancode_escape)*

*Defined in [declarations/tput.d.ts:647](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L647)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  scesa

▸ **scesa**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[scesa](_declarations_tput_d_.tput.md#scesa)*

*Defined in [declarations/tput.d.ts:1057](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1057)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  scesc

▸ **scesc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[scesc](_declarations_tput_d_.tput.md#scesc)*

*Defined in [declarations/tput.d.ts:1056](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1056)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  sclk

▸ **sclk**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[sclk](_declarations_tput_d_.tput.md#sclk)*

*Defined in [declarations/tput.d.ts:957](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L957)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  scp

▸ **scp**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[scp](_declarations_tput_d_.tput.md#scp)*

*Defined in [declarations/tput.d.ts:976](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L976)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  scrollDown

▸ **scrollDown**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1213](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1213)*

CSI Ps T  Scroll down Ps lines (default = 1) (SD).

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  scrollUp

▸ **scrollUp**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1208](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1208)*

CSI Ps S  Scroll up Ps lines (default = 1) (SU).

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  scroll_forward

▸ **scroll_forward**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[scroll_forward](_declarations_tput_d_.tput.md#scroll_forward)*

*Defined in [declarations/tput.d.ts:344](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L344)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  scroll_reverse

▸ **scroll_reverse**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[scroll_reverse](_declarations_tput_d_.tput.md#scroll_reverse)*

*Defined in [declarations/tput.d.ts:345](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L345)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  scs

▸ **scs**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[scs](_declarations_tput_d_.tput.md#scs)*

*Defined in [declarations/tput.d.ts:1014](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1014)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  scsd

▸ **scsd**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[scsd](_declarations_tput_d_.tput.md#scsd)*

*Defined in [declarations/tput.d.ts:1022](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1022)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  sd

▸ **sd**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1215](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1215)*

**`see`** [scrollDown](_declarations_blessedprogram_d_.blessedprogram.md#scrolldown)

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  sdrfq

▸ **sdrfq**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[sdrfq](_declarations_tput_d_.tput.md#sdrfq)*

*Defined in [declarations/tput.d.ts:985](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L985)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  selData

▸ **selData**(`a`: string, `b`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:706](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L706)*

**Parameters:**

Name | Type |
------ | ------ |
`a` | string |
`b` | string |

**Returns:** *boolean*

___

###  selectChangeExtent

▸ **selectChangeExtent**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1503](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1503)*

```

CSI Ps x  Select Attribute Change Extent (DECSACE).
Ps = 0  -> from start to end position, wrapped.
Ps = 1  -> from start to end position, wrapped.
Ps = 2  -> rectangle (exact).
```

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  select_char_set

▸ **select_char_set**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[select_char_set](_declarations_tput_d_.tput.md#select_char_set)*

*Defined in [declarations/tput.d.ts:605](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L605)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  selectiveEraseRectangle

▸ **selectiveEraseRectangle**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1542](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1542)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  sendDeviceAttributes

▸ **sendDeviceAttributes**(`param?`: number, `callback?`: [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)): *boolean*

*Defined in [declarations/blessedProgram.d.ts:927](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L927)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |
`callback?` | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** *boolean*

___

###  set0_des_seq

▸ **set0_des_seq**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set0_des_seq](_declarations_tput_d_.tput.md#set0_des_seq)*

*Defined in [declarations/tput.d.ts:627](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L627)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set1_des_seq

▸ **set1_des_seq**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set1_des_seq](_declarations_tput_d_.tput.md#set1_des_seq)*

*Defined in [declarations/tput.d.ts:628](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L628)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set2_des_seq

▸ **set2_des_seq**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set2_des_seq](_declarations_tput_d_.tput.md#set2_des_seq)*

*Defined in [declarations/tput.d.ts:629](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L629)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set3_des_seq

▸ **set3_des_seq**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set3_des_seq](_declarations_tput_d_.tput.md#set3_des_seq)*

*Defined in [declarations/tput.d.ts:630](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L630)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  setAttrInRectangle

▸ **setAttrInRectangle**(`Pt`: number, `Pl`: number, `Pb`: number, `Pr`: number, `Ps$`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1357](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1357)*

```
CSI Pt; Pl; Pb; Pr; Ps$ r
Change Attributes in Rectangular Area (DECCARA), VT400 and up.
Pt; Pl; Pb; Pr denotes the rectangle.
Ps denotes the SGR attributes to change: 0, 1, 4, 5, 7.
NOTE: xterm doesn't enable this code by default.
```

**Parameters:**

Name | Type |
------ | ------ |
`Pt` | number |
`Pl` | number |
`Pb` | number |
`Pr` | number |
`Ps$` | number |

**Returns:** *boolean*

___

###  setBackground

▸ **setBackground**(`color`: string, `val?`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:850](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L850)*

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

Name | Type |
------ | ------ |
`color` | string |
`val?` | string |

**Returns:** *boolean*

___

###  setCharProtectionAttr

▸ **setCharProtectionAttr**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1337](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1337)*

```
CSI Ps " q
Select character protection attribute (DECSCA).  Valid values
for the parameter:
Ps = 0  -> DECSED and DECSEL can erase (default).
Ps = 1  -> DECSED and DECSEL cannot erase.
Ps = 2  -> DECSED and DECSEL can erase.
```

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  setConformanceLevel

▸ **setConformanceLevel**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1293](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1293)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  setCursorStyle

▸ **setCursorStyle**(`cursor`: 0 | 1 | 2 | 3 | 4 | "blinkingblock" | "block" | "steady block" | "blinking underline" | "underline" | "steady underline" | "blinking bar" | "bar" | "steady bar"): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1308](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1308)*

```
CSI Ps SP q
Set cursor style (DECSCUSR, VT520).
Ps = 0  -> blinking block.
Ps = 1  -> blinking block (default).
Ps = 2  -> steady block.
Ps = 3  -> blinking underline.
Ps = 4  -> steady underline.
```

**Parameters:**

Name | Type |
------ | ------ |
`cursor` | 0 &#124; 1 &#124; 2 &#124; 3 &#124; 4 &#124; "blinkingblock" &#124; "block" &#124; "steady block" &#124; "blinking underline" &#124; "underline" &#124; "steady underline" &#124; "blinking bar" &#124; "bar" &#124; "steady bar" |

**Returns:** *boolean*

___

###  setForeground

▸ **setForeground**(`color`: string, `val?`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:833](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L833)*

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

Name | Type |
------ | ------ |
`color` | string |
`val?` | string |

**Returns:** *boolean*

___

###  setG

▸ **setG**(`val`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:692](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L692)*

**Parameters:**

Name | Type |
------ | ------ |
`val` | number |

**Returns:** *boolean*

___

###  setLocatorEvents

▸ **setLocatorEvents**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1540](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1540)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  setMarginBellVolume

▸ **setMarginBellVolume**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1443](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1443)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  setMaxListeners

▸ **setMaxListeners**(`n`: number): *this*

*Defined in [declarations/blessedProgram.d.ts:251](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L251)*

**Parameters:**

Name | Type |
------ | ------ |
`n` | number |

**Returns:** *this*

___

###  setMode

▸ **setMode**(`args`: string, `callback`: [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1030](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1030)*

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
```

Example: Show cursor:
```
return this.setMode('?25', (error, data)=>{

});
```

**Parameters:**

Name | Type |
------ | ------ |
`args` | string |
`callback` | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** *boolean*

___

###  setMouse

▸ **setMouse**(`opt?`: object, `enable?`: boolean): *void*

*Defined in [declarations/blessedProgram.d.ts:1146](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1146)*

**Parameters:**

▪`Optional`  **opt**: *object*

Name | Type |
------ | ------ |
`allMotion?` | boolean |
`decMouse?` | boolean |
`gpmMouse?` | boolean |
`hiliteTracking?` | boolean |
`jsbtermMouse?` | boolean |
`normalMouse?` | boolean |
`ptermMouse?` | boolean |
`sendFocus?` | boolean |
`sgrMouse?` | boolean |
`urxvtMouse?` | boolean |
`utfMode?` | boolean |
`vt200Mouse?` | boolean |
`x10Mouse?` | boolean |

▪`Optional`  **enable**: *boolean*

**Returns:** *void*

___

###  setPointerMode

▸ **setPointerMode**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1285](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1285)*

```
CSI > Ps p
Set resource value pointerMode.  This is used by xterm to
decide whether to hide the pointer cursor as the user types.
Valid values for the parameter:
Ps = 0  -> never hide the pointer.
Ps = 1  -> hide if the mouse tracking mode is not enabled.
Ps = 2  -> always hide the pointer.  If no parameter is
given, xterm uses the default, which is 1 .

```

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  setResources

▸ **setResources**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1269](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1269)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  setScrollRegion

▸ **setScrollRegion**(`top`: number, `bottom`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1174](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1174)*

```
CSI Ps ; Ps r
Set Scrolling Region [top;bottom] (default = full size of win-
dow) (DECSTBM).
CSI ? Pm r
```

**Parameters:**

Name | Type |
------ | ------ |
`top` | number |
`bottom` | number |

**Returns:** *boolean*

___

###  setTerminal

▸ **setTerminal**(`terminal`: string): *void*

*Defined in [declarations/blessedProgram.d.ts:466](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L466)*

**Parameters:**

Name | Type |
------ | ------ |
`terminal` | string |

**Returns:** *void*

___

###  setTitle

▸ **setTitle**(`title`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:697](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L697)*

Sets terminal window title.

**Parameters:**

Name | Type |
------ | ------ |
`title` | string |

**Returns:** *boolean*

___

###  setTitleModeFeature

▸ **setTitleModeFeature**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1440](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1440)*

```CSI > Ps; Ps t
Set one or more features of the title modes.  Each parameter
enables a single feature.
Ps = 0  -> Set window/icon labels using hexadecimal.
Ps = 1  -> Query window/icon labels using hexadecimal.
Ps = 2  -> Set window/icon labels using UTF-8.
Ps = 3  -> Query window/icon labels using UTF-8.  (See dis-
cussion of "Title Modes")
XXX VTE bizarelly echos this:
```

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  setWarningBellVolume

▸ **setWarningBellVolume**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1441](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1441)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  set_a_attributes

▸ **set_a_attributes**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_a_attributes](_declarations_tput_d_.tput.md#set_a_attributes)*

*Defined in [declarations/tput.d.ts:655](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L655)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_a_background

▸ **set_a_background**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_a_background](_declarations_tput_d_.tput.md#set_a_background)*

*Defined in [declarations/tput.d.ts:426](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L426)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_a_foreground

▸ **set_a_foreground**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_a_foreground](_declarations_tput_d_.tput.md#set_a_foreground)*

*Defined in [declarations/tput.d.ts:425](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L425)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_attributes

▸ **set_attributes**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_attributes](_declarations_tput_d_.tput.md#set_attributes)*

*Defined in [declarations/tput.d.ts:346](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L346)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_background

▸ **set_background**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_background](_declarations_tput_d_.tput.md#set_background)*

*Defined in [declarations/tput.d.ts:569](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L569)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_bottom_margin

▸ **set_bottom_margin**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_bottom_margin](_declarations_tput_d_.tput.md#set_bottom_margin)*

*Defined in [declarations/tput.d.ts:606](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L606)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_bottom_margin_parm

▸ **set_bottom_margin_parm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_bottom_margin_parm](_declarations_tput_d_.tput.md#set_bottom_margin_parm)*

*Defined in [declarations/tput.d.ts:607](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L607)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_clock

▸ **set_clock**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_clock](_declarations_tput_d_.tput.md#set_clock)*

*Defined in [declarations/tput.d.ts:546](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L546)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_color_band

▸ **set_color_band**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_color_band](_declarations_tput_d_.tput.md#set_color_band)*

*Defined in [declarations/tput.d.ts:639](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L639)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_color_pair

▸ **set_color_pair**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_color_pair](_declarations_tput_d_.tput.md#set_color_pair)*

*Defined in [declarations/tput.d.ts:567](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L567)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_foreground

▸ **set_foreground**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_foreground](_declarations_tput_d_.tput.md#set_foreground)*

*Defined in [declarations/tput.d.ts:568](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L568)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_left_margin

▸ **set_left_margin**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_left_margin](_declarations_tput_d_.tput.md#set_left_margin)*

*Defined in [declarations/tput.d.ts:543](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L543)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_left_margin_parm

▸ **set_left_margin_parm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_left_margin_parm](_declarations_tput_d_.tput.md#set_left_margin_parm)*

*Defined in [declarations/tput.d.ts:608](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L608)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_lr_margin

▸ **set_lr_margin**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_lr_margin](_declarations_tput_d_.tput.md#set_lr_margin)*

*Defined in [declarations/tput.d.ts:631](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L631)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_page_length

▸ **set_page_length**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_page_length](_declarations_tput_d_.tput.md#set_page_length)*

*Defined in [declarations/tput.d.ts:640](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L640)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_pglen_inch

▸ **set_pglen_inch**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_pglen_inch](_declarations_tput_d_.tput.md#set_pglen_inch)*

*Defined in [declarations/tput.d.ts:656](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L656)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_right_margin

▸ **set_right_margin**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_right_margin](_declarations_tput_d_.tput.md#set_right_margin)*

*Defined in [declarations/tput.d.ts:544](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L544)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_right_margin_parm

▸ **set_right_margin_parm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_right_margin_parm](_declarations_tput_d_.tput.md#set_right_margin_parm)*

*Defined in [declarations/tput.d.ts:609](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L609)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_tab

▸ **set_tab**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_tab](_declarations_tput_d_.tput.md#set_tab)*

*Defined in [declarations/tput.d.ts:347](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L347)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_tb_margin

▸ **set_tb_margin**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_tb_margin](_declarations_tput_d_.tput.md#set_tb_margin)*

*Defined in [declarations/tput.d.ts:632](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L632)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_top_margin

▸ **set_top_margin**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_top_margin](_declarations_tput_d_.tput.md#set_top_margin)*

*Defined in [declarations/tput.d.ts:610](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L610)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_top_margin_parm

▸ **set_top_margin_parm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_top_margin_parm](_declarations_tput_d_.tput.md#set_top_margin_parm)*

*Defined in [declarations/tput.d.ts:611](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L611)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  set_window

▸ **set_window**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[set_window](_declarations_tput_d_.tput.md#set_window)*

*Defined in [declarations/tput.d.ts:475](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L475)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  setab

▸ **setab**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[setab](_declarations_tput_d_.tput.md#setab)*

*Defined in [declarations/tput.d.ts:839](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L839)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  setaf

▸ **setaf**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[setaf](_declarations_tput_d_.tput.md#setaf)*

*Defined in [declarations/tput.d.ts:838](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L838)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  setb

▸ **setb**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[setb](_declarations_tput_d_.tput.md#setb)*

*Defined in [declarations/tput.d.ts:978](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L978)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  setcolor

▸ **setcolor**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[setcolor](_declarations_tput_d_.tput.md#setcolor)*

*Defined in [declarations/tput.d.ts:1048](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1048)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  setf

▸ **setf**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[setf](_declarations_tput_d_.tput.md#setf)*

*Defined in [declarations/tput.d.ts:977](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L977)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  setup

▸ **setup**(): *void*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[setup](_declarations_tput_d_.tput.md#setup)*

*Defined in [declarations/tput.d.ts:256](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L256)*

**Returns:** *void*

___

###  setupDump

▸ **setupDump**(): *void*

*Defined in [declarations/blessedProgram.d.ts:464](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L464)*

**Returns:** *void*

___

###  setupTput

▸ **setupTput**(): *void*

*Defined in [declarations/blessedProgram.d.ts:465](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L465)*

**Returns:** *void*

___

###  setx

▸ **setx**(`x`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:536](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L536)*

Sets cursor absolute column.

**Parameters:**

Name | Type |
------ | ------ |
`x` | number |

**Returns:** *boolean*

___

###  sety

▸ **sety**(`y`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:541](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L541)*

Sets cursor absolute row.

**Parameters:**

Name | Type |
------ | ------ |
`y` | number |

**Returns:** *boolean*

___

###  sgr

▸ **sgr**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[sgr](_declarations_tput_d_.tput.md#sgr)*

*Defined in [declarations/tput.d.ts:760](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L760)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  sgr0

▸ **sgr0**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[sgr0](_declarations_tput_d_.tput.md#sgr0)*

*Defined in [declarations/tput.d.ts:706](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L706)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  sgr1

▸ **sgr1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[sgr1](_declarations_tput_d_.tput.md#sgr1)*

*Defined in [declarations/tput.d.ts:1064](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1064)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  shiftIn

▸ **shiftIn**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:637](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L637)*

**Returns:** *boolean*

___

###  shiftOut

▸ **shiftOut**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:636](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L636)*

**Returns:** *boolean*

___

###  showCursor

▸ **showCursor**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1040](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1040)*

Uses [setMode](_declarations_blessedprogram_d_.blessedprogram.md#setmode) 2 5 to show the cursor:
NOTE: In xterm terminfo:  cnorm stops blinking cursor   cvvis starts blinking cursor

**Returns:** *boolean*

___

###  sigtstp

▸ **sigtstp**(`callback?`: [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback)): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1627](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1627)*

**Parameters:**

Name | Type |
------ | ------ |
`callback?` | [ProgramResponseCallback](../modules/_declarations_blessedprogram_d_.md#programresponsecallback) |

**Returns:** *boolean*

___

###  simpleInsert

▸ **simpleInsert**(`ch`: string, `i?`: number, `attr?`: boolean): *boolean*

*Defined in [declarations/blessedProgram.d.ts:569](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L569)*

Inserts `ch` repeated `i` times with given optional attrs at current cursor position.

**Parameters:**

Name | Type |
------ | ------ |
`ch` | string |
`i?` | number |
`attr?` | boolean |

**Returns:** *boolean*

___

###  sitm

▸ **sitm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[sitm](_declarations_tput_d_.tput.md#sitm)*

*Defined in [declarations/tput.d.ts:986](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L986)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  slength

▸ **slength**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[slength](_declarations_tput_d_.tput.md#slength)*

*Defined in [declarations/tput.d.ts:1065](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1065)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  slines

▸ **slines**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[slines](_declarations_tput_d_.tput.md#slines)*

*Defined in [declarations/tput.d.ts:1049](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1049)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  slm

▸ **slm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[slm](_declarations_tput_d_.tput.md#slm)*

*Defined in [declarations/tput.d.ts:987](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L987)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  sm

▸ **sm**(...`args`: string[]): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1032](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1032)*

**`see`** [setMode](_declarations_blessedprogram_d_.blessedprogram.md#setmode)

**Parameters:**

Name | Type |
------ | ------ |
`...args` | string[] |

**Returns:** *boolean*

___

###  smacs

▸ **smacs**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[smacs](_declarations_tput_d_.tput.md#smacs)*

*Defined in [declarations/blessedProgram.d.ts:688](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L688)*

**Returns:** *boolean*

___

###  smam

▸ **smam**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smam](_declarations_tput_d_.tput.md#smam)*

*Defined in [declarations/tput.d.ts:765](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L765)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smcup

▸ **smcup**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[smcup](_declarations_tput_d_.tput.md#smcup)*

*Defined in [declarations/blessedProgram.d.ts:1044](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1044)*

**Returns:** *boolean*

___

###  smdc

▸ **smdc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smdc](_declarations_tput_d_.tput.md#smdc)*

*Defined in [declarations/tput.d.ts:845](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L845)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smgb

▸ **smgb**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smgb](_declarations_tput_d_.tput.md#smgb)*

*Defined in [declarations/tput.d.ts:1015](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1015)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smgbp

▸ **smgbp**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smgbp](_declarations_tput_d_.tput.md#smgbp)*

*Defined in [declarations/tput.d.ts:1016](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1016)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smgl

▸ **smgl**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smgl](_declarations_tput_d_.tput.md#smgl)*

*Defined in [declarations/tput.d.ts:954](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L954)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smglp

▸ **smglp**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smglp](_declarations_tput_d_.tput.md#smglp)*

*Defined in [declarations/tput.d.ts:1017](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1017)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smglr

▸ **smglr**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smglr](_declarations_tput_d_.tput.md#smglr)*

*Defined in [declarations/tput.d.ts:1040](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1040)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smgr

▸ **smgr**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smgr](_declarations_tput_d_.tput.md#smgr)*

*Defined in [declarations/tput.d.ts:955](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L955)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smgrp

▸ **smgrp**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smgrp](_declarations_tput_d_.tput.md#smgrp)*

*Defined in [declarations/tput.d.ts:1018](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1018)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smgt

▸ **smgt**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smgt](_declarations_tput_d_.tput.md#smgt)*

*Defined in [declarations/tput.d.ts:1019](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1019)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smgtb

▸ **smgtb**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smgtb](_declarations_tput_d_.tput.md#smgtb)*

*Defined in [declarations/tput.d.ts:1041](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1041)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smgtp

▸ **smgtp**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smgtp](_declarations_tput_d_.tput.md#smgtp)*

*Defined in [declarations/tput.d.ts:1020](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1020)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smicm

▸ **smicm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smicm](_declarations_tput_d_.tput.md#smicm)*

*Defined in [declarations/tput.d.ts:988](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L988)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smir

▸ **smir**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smir](_declarations_tput_d_.tput.md#smir)*

*Defined in [declarations/tput.d.ts:699](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L699)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smkx

▸ **smkx**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smkx](_declarations_tput_d_.tput.md#smkx)*

*Defined in [declarations/tput.d.ts:737](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L737)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smln

▸ **smln**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smln](_declarations_tput_d_.tput.md#smln)*

*Defined in [declarations/tput.d.ts:903](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L903)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smm

▸ **smm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smm](_declarations_tput_d_.tput.md#smm)*

*Defined in [declarations/tput.d.ts:739](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L739)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smpch

▸ **smpch**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smpch](_declarations_tput_d_.tput.md#smpch)*

*Defined in [declarations/tput.d.ts:1051](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1051)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smsc

▸ **smsc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smsc](_declarations_tput_d_.tput.md#smsc)*

*Defined in [declarations/tput.d.ts:1053](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1053)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smso

▸ **smso**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smso](_declarations_tput_d_.tput.md#smso)*

*Defined in [declarations/tput.d.ts:702](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L702)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smul

▸ **smul**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smul](_declarations_tput_d_.tput.md#smul)*

*Defined in [declarations/tput.d.ts:703](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L703)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  smxon

▸ **smxon**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[smxon](_declarations_tput_d_.tput.md#smxon)*

*Defined in [declarations/tput.d.ts:898](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L898)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  snlq

▸ **snlq**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[snlq](_declarations_tput_d_.tput.md#snlq)*

*Defined in [declarations/tput.d.ts:989](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L989)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  snrmq

▸ **snrmq**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[snrmq](_declarations_tput_d_.tput.md#snrmq)*

*Defined in [declarations/tput.d.ts:990](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L990)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  softReset

▸ **softReset**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1286](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1286)*

**Returns:** *boolean*

___

###  sshm

▸ **sshm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[sshm](_declarations_tput_d_.tput.md#sshm)*

*Defined in [declarations/tput.d.ts:991](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L991)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  ssubm

▸ **ssubm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[ssubm](_declarations_tput_d_.tput.md#ssubm)*

*Defined in [declarations/tput.d.ts:992](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L992)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  ssupm

▸ **ssupm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[ssupm](_declarations_tput_d_.tput.md#ssupm)*

*Defined in [declarations/tput.d.ts:993](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L993)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  start_bit_image

▸ **start_bit_image**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[start_bit_image](_declarations_tput_d_.tput.md#start_bit_image)*

*Defined in [declarations/tput.d.ts:612](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L612)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  start_char_set_def

▸ **start_char_set_def**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[start_char_set_def](_declarations_tput_d_.tput.md#start_char_set_def)*

*Defined in [declarations/tput.d.ts:613](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L613)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  stop_bit_image

▸ **stop_bit_image**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[stop_bit_image](_declarations_tput_d_.tput.md#stop_bit_image)*

*Defined in [declarations/tput.d.ts:614](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L614)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  stop_char_set_def

▸ **stop_char_set_def**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[stop_char_set_def](_declarations_tput_d_.tput.md#stop_char_set_def)*

*Defined in [declarations/tput.d.ts:615](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L615)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  su

▸ **su**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1210](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1210)*

**`see`** [scrollUp](_declarations_blessedprogram_d_.blessedprogram.md#scrollup)

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  subcs

▸ **subcs**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[subcs](_declarations_tput_d_.tput.md#subcs)*

*Defined in [declarations/tput.d.ts:1025](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1025)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  subscript_characters

▸ **subscript_characters**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[subscript_characters](_declarations_tput_d_.tput.md#subscript_characters)*

*Defined in [declarations/tput.d.ts:616](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L616)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  sum

▸ **sum**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[sum](_declarations_tput_d_.tput.md#sum)*

*Defined in [declarations/tput.d.ts:994](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L994)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  supcs

▸ **supcs**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[supcs](_declarations_tput_d_.tput.md#supcs)*

*Defined in [declarations/tput.d.ts:1026](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1026)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  superscript_characters

▸ **superscript_characters**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[superscript_characters](_declarations_tput_d_.tput.md#superscript_characters)*

*Defined in [declarations/tput.d.ts:617](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L617)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  swidm

▸ **swidm**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[swidm](_declarations_tput_d_.tput.md#swidm)*

*Defined in [declarations/tput.d.ts:984](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L984)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  tab

▸ **tab**(): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[tab](_declarations_tput_d_.tput.md#tab)*

*Defined in [declarations/blessedProgram.d.ts:632](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L632)*

**Returns:** *boolean*

___

###  tabClear

▸ **tabClear**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1251](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1251)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  tabSet

▸ **tabSet**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:650](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L650)*

**Returns:** *boolean*

___

###  tbc

▸ **tbc**(`param?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[tbc](_declarations_tput_d_.tput.md#tbc)*

*Defined in [declarations/blessedProgram.d.ts:1252](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1252)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  term

▸ **term**(`is`: string): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[term](_declarations_tput_d_.tput.md#term)*

*Defined in [declarations/blessedProgram.d.ts:472](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L472)*

Queries whether the terminal of the type `is`.

**Parameters:**

Name | Type |
------ | ------ |
`is` | string |

**Returns:** *boolean*

___

###  termcap_init2

▸ **termcap_init2**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[termcap_init2](_declarations_tput_d_.tput.md#termcap_init2)*

*Defined in [declarations/tput.d.ts:657](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L657)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  termcap_reset

▸ **termcap_reset**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[termcap_reset](_declarations_tput_d_.tput.md#termcap_reset)*

*Defined in [declarations/tput.d.ts:658](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L658)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  these_cause_cr

▸ **these_cause_cr**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[these_cause_cr](_declarations_tput_d_.tput.md#these_cause_cr)*

*Defined in [declarations/tput.d.ts:618](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L618)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  to_status_line

▸ **to_status_line**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[to_status_line](_declarations_tput_d_.tput.md#to_status_line)*

*Defined in [declarations/tput.d.ts:476](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L476)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  tone

▸ **tone**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[tone](_declarations_tput_d_.tput.md#tone)*

*Defined in [declarations/tput.d.ts:554](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L554)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  tsl

▸ **tsl**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[tsl](_declarations_tput_d_.tput.md#tsl)*

*Defined in [declarations/tput.d.ts:887](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L887)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  u0

▸ **u0**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[u0](_declarations_tput_d_.tput.md#u0)*

*Defined in [declarations/tput.d.ts:968](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L968)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  u1

▸ **u1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[u1](_declarations_tput_d_.tput.md#u1)*

*Defined in [declarations/tput.d.ts:969](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L969)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  u2

▸ **u2**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[u2](_declarations_tput_d_.tput.md#u2)*

*Defined in [declarations/tput.d.ts:970](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L970)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  u3

▸ **u3**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[u3](_declarations_tput_d_.tput.md#u3)*

*Defined in [declarations/tput.d.ts:971](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L971)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  u4

▸ **u4**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[u4](_declarations_tput_d_.tput.md#u4)*

*Defined in [declarations/tput.d.ts:972](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L972)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  u5

▸ **u5**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[u5](_declarations_tput_d_.tput.md#u5)*

*Defined in [declarations/tput.d.ts:973](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L973)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  u6

▸ **u6**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[u6](_declarations_tput_d_.tput.md#u6)*

*Defined in [declarations/tput.d.ts:831](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L831)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  u7

▸ **u7**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[u7](_declarations_tput_d_.tput.md#u7)*

*Defined in [declarations/tput.d.ts:832](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L832)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  u8

▸ **u8**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[u8](_declarations_tput_d_.tput.md#u8)*

*Defined in [declarations/tput.d.ts:833](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L833)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  u9

▸ **u9**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[u9](_declarations_tput_d_.tput.md#u9)*

*Defined in [declarations/tput.d.ts:834](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L834)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  uc

▸ **uc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[uc](_declarations_tput_d_.tput.md#uc)*

*Defined in [declarations/tput.d.ts:888](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L888)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  unKey

▸ **unKey**(`key`: string | string[], `l`: [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener)): *void*

*Defined in [declarations/blessedProgram.d.ts:477](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L477)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string &#124; string[] |
`l` | [KeyEventListener](../modules/_declarations_blessed_d_.widgets.md#keyeventlistener) |

**Returns:** *void*

___

###  underline_char

▸ **underline_char**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[underline_char](_declarations_tput_d_.tput.md#underline_char)*

*Defined in [declarations/tput.d.ts:477](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L477)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  up

▸ **up**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:715](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L715)*

alias for [cursorUp](_declarations_blessedprogram_d_.blessedprogram.md#cursorup)

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  up_half_line

▸ **up_half_line**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[up_half_line](_declarations_tput_d_.tput.md#up_half_line)*

*Defined in [declarations/tput.d.ts:478](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L478)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  user0

▸ **user0**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[user0](_declarations_tput_d_.tput.md#user0)*

*Defined in [declarations/tput.d.ts:559](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L559)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  user1

▸ **user1**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[user1](_declarations_tput_d_.tput.md#user1)*

*Defined in [declarations/tput.d.ts:560](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L560)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  user2

▸ **user2**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[user2](_declarations_tput_d_.tput.md#user2)*

*Defined in [declarations/tput.d.ts:561](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L561)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  user3

▸ **user3**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[user3](_declarations_tput_d_.tput.md#user3)*

*Defined in [declarations/tput.d.ts:562](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L562)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  user4

▸ **user4**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[user4](_declarations_tput_d_.tput.md#user4)*

*Defined in [declarations/tput.d.ts:563](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L563)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  user5

▸ **user5**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[user5](_declarations_tput_d_.tput.md#user5)*

*Defined in [declarations/tput.d.ts:564](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L564)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  user6

▸ **user6**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[user6](_declarations_tput_d_.tput.md#user6)*

*Defined in [declarations/tput.d.ts:418](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L418)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  user7

▸ **user7**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[user7](_declarations_tput_d_.tput.md#user7)*

*Defined in [declarations/tput.d.ts:419](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L419)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  user8

▸ **user8**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[user8](_declarations_tput_d_.tput.md#user8)*

*Defined in [declarations/tput.d.ts:420](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L420)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  user9

▸ **user9**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[user9](_declarations_tput_d_.tput.md#user9)*

*Defined in [declarations/tput.d.ts:421](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L421)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  vi

▸ **vi**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:1137](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L1137)*

**Returns:** *boolean*

___

###  vpa

▸ **vpa**(`param?`: number): *boolean*

*Overrides [Tput](_declarations_tput_d_.tput.md).[vpa](_declarations_tput_d_.tput.md#vpa)*

*Defined in [declarations/blessedProgram.d.ts:930](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L930)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  vpr

▸ **vpr**(`param?`: number): *boolean*

*Defined in [declarations/blessedProgram.d.ts:932](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L932)*

**Parameters:**

Name | Type |
------ | ------ |
`param?` | number |

**Returns:** *boolean*

___

###  vtab

▸ **vtab**(): *boolean*

*Defined in [declarations/blessedProgram.d.ts:627](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L627)*

**Returns:** *boolean*

___

###  wait

▸ **wait**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[wait](_declarations_tput_d_.tput.md#wait)*

*Defined in [declarations/tput.d.ts:967](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L967)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  wait_tone

▸ **wait_tone**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[wait_tone](_declarations_tput_d_.tput.md#wait_tone)*

*Defined in [declarations/tput.d.ts:558](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L558)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  wind

▸ **wind**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[wind](_declarations_tput_d_.tput.md#wind)*

*Defined in [declarations/tput.d.ts:886](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L886)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  wingo

▸ **wingo**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[wingo](_declarations_tput_d_.tput.md#wingo)*

*Defined in [declarations/tput.d.ts:961](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L961)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  write

▸ **write**(`text`: string): *boolean*

*Defined in [declarations/blessedProgram.d.ts:494](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/blessedProgram.d.ts#L494)*

Writes given string to [output](_declarations_blessedprogram_d_.blessedprogram.md#output) bypassing the buffer.

**Parameters:**

Name | Type |
------ | ------ |
`text` | string |

**Returns:** *boolean*

___

###  xoff_character

▸ **xoff_character**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[xoff_character](_declarations_tput_d_.tput.md#xoff_character)*

*Defined in [declarations/tput.d.ts:490](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L490)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  xoffc

▸ **xoffc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[xoffc](_declarations_tput_d_.tput.md#xoffc)*

*Defined in [declarations/tput.d.ts:901](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L901)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  xon_character

▸ **xon_character**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[xon_character](_declarations_tput_d_.tput.md#xon_character)*

*Defined in [declarations/tput.d.ts:489](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L489)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  xonc

▸ **xonc**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[xonc](_declarations_tput_d_.tput.md#xonc)*

*Defined in [declarations/tput.d.ts:900](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L900)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  zero_motion

▸ **zero_motion**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[zero_motion](_declarations_tput_d_.tput.md#zero_motion)*

*Defined in [declarations/tput.d.ts:619](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L619)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*

___

###  zerom

▸ **zerom**(...`args`: any[]): *any*

*Inherited from [Tput](_declarations_tput_d_.tput.md).[zerom](_declarations_tput_d_.tput.md#zerom)*

*Defined in [declarations/tput.d.ts:1028](https://github.com/cancerberoSgx/accursed/blob/468bf3c/src/declarations/tput.d.ts#L1028)*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

**Returns:** *any*
