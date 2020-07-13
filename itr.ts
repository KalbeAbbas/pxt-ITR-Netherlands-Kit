enum USER {
        //% block="INDUSTRIAL"
        INDUSTRIAL = 1,
        //% block="EDUCATIONAL"
        EDUCATIONAL = 2
}

enum Measuremode {
    //% block="IDLE"
    MODE_IDLE = 0x00,
    //% block="1SEC"
    MODE_1SEC = 0x10,
    //% block="10SEC"
    MODE_10SEC = 0x20,
    //% block="60SEC"
    MODE_60SEC = 0x30,
    //% block="250MS"
    MODE_250MS = 0x40
}

//% color=190 weight=100 icon="\uf0c2" block="XinaBox Netherland Kit"
//% groups='["OD01", "SG33", "SG35", "SN01", "SW01", "Wifi-Common", "Wifi-Ubidots"]'
namespace ITR
{

   // CW01 Variables start

    class cw01_int_var123 {
        res: string
        TOKEN: string
        DEVICE_ID: string
        NEWLINE: string
        latitude: number
        longitude: number
        select: boolean
        constructor() {
            this.res = ""
            this.TOKEN = ""
            this.DEVICE_ID = ""
            this.NEWLINE = "\u000D\u000A"
            this.latitude = 0
            this.longitude = 0
            this.select = false
        }
    }

    class button_class {
        sending_data: boolean

        constructor() {
            this.sending_data = false
        }
    }

    let cw01_vars = new cw01_int_var123()
    let cw01_button_object = new button_class()
    let en_Feedback: boolean = true

    // CW01 Variables end

    // OD01 variables start

    // 6x8 font
    const Font_5x7 = hex`000000000000005F00000007000700147F147F14242A072A12231308646237495522500005030000001C2241000041221C00082A1C2A0808083E080800503000000808080808006060000020100804023E5149453E00427F400042615149462141454B311814127F1027454545393C4A49493001710905033649494936064949291E003636000000563600000008142241141414141441221408000201510906324979413E7E1111117E7F494949363E414141227F4141221C7F494949417F090901013E414151327F0808087F00417F41002040413F017F081422417F404040407F0204027F7F0408107F3E4141413E7F090909063E4151215E7F09192946464949493101017F01013F4040403F1F2040201F7F2018207F63140814630304780403615149454300007F4141020408102041417F000004020102044040404040000102040020545454787F484444383844444420384444487F3854545418087E090102081454543C7F0804047800447D40002040443D00007F10284400417F40007C041804787C0804047838444444387C14141408081414187C7C080404084854545420043F4440203C4040207C1C2040201C3C4030403C44281028440C5050503C4464544C44000836410000007F000000413608000201020402`


    export enum Display {
        //% block="ON"
        On = 1,
        //% block="OFF"
        Off = 0
    }

    const MIN_X = 0
    const MIN_Y = 0
    const MAX_X = 127
    const MAX_Y = 63

    let _I2CAddr = 60
    let _screen = pins.createBuffer(1025)
    let _buf2 = pins.createBuffer(2)
    let _buf3 = pins.createBuffer(3)
    let _buf4 = pins.createBuffer(4)
    let _buf7 = pins.createBuffer(7)
    _buf7[0] = 0x40
    let _DRAW = 1
    let _cx = 0
    let _cy = 0

    // OD01 Variables end

    // SW01 Variables start

    export enum Temperature {
        //% block="ºC"
        Celcius = 0,
        //% block="ºF"
        Fahrenheit = 1
    }

    export enum Pressure {
        //% block="hPa"
        HectoPascal = 0,
        //% block="mbar"
        MilliBar = 1
    }

    export enum Humidity {
        //% block="%RH"
        RelativeHumidity = 0
    }

    export enum Length {
        //% block="meter"
        Meter = 0,
        //% block="feet"
        Feet = 1
    }
    
    let SW01_ADDR = 0x76

    let dig_T1 = getUInt16LE(0x88, SW01_ADDR)
    let dig_T2 = getInt16LE(0x8A, SW01_ADDR)
    let dig_T3 = getInt16LE(0x8C, SW01_ADDR)
    let dig_P1 = getUInt16LE(0x8E, SW01_ADDR)
    let dig_P2 = getInt16LE(0x90, SW01_ADDR)
    let dig_P3 = getInt16LE(0x92, SW01_ADDR)
    let dig_P4 = getInt16LE(0x94, SW01_ADDR)
    let dig_P5 = getInt16LE(0x96, SW01_ADDR)
    let dig_P6 = getInt16LE(0x98, SW01_ADDR)
    let dig_P7 = getInt16LE(0x9A, SW01_ADDR)
    let dig_P8 = getInt16LE(0x9C, SW01_ADDR)
    let dig_P9 = getInt16LE(0x9E, SW01_ADDR)
    let dig_H1 = getreg(0xA1, SW01_ADDR)
    let dig_H2 = getInt16LE(0xE1, SW01_ADDR)
    let dig_H3 = getreg(0xE3, SW01_ADDR)
    let a = getreg(0xE5, SW01_ADDR)
    let dig_H4 = (getreg(0xE4, SW01_ADDR) << 4) + (a % 16)
    let dig_H5 = (getreg(0xE6, SW01_ADDR) << 4) + (a >> 4)
    let dig_H6 = getInt8LE(0xE7, SW01_ADDR)

    let T = 0
    let P = 0
    let H = 0

    // SW01 Variables end

    // SG333 Variables start

    let SG33_ADDR = 0x5A
    let eCO2_ = 0
    let TVOC_ = 0

    // SG33 Variables end

    // SN01 Variables start

    export enum format {
        //% block=raw
        RAW = 0,
        //% block=DD
        DD = 1,
        //% block=DMS
        DMS = 2
    }

    export enum orientation {
        //% block=cardinal
        cardinal = 0,
        //% block=noncardinal
        noncardinal = 1
    }

    export enum speed_format {
        //% block=knots
        KNOTS = 0,
        //% block=KPH
        KPH = 1,
        //% block=MPH
        MPH = 2
    }

    let sentence_type = ""
    let j = 0
    let nmea_sentence = ""
    let raw_EW = ""
    let raw_NS = ""
    let raw_time: number
    let raw_lat: number
    let raw_lon: number
    let raw_fix: number
    let raw_sat: number
    let raw_hdop: number
    let raw_alt: number
    let raw_SOG: number
    let raw_CMG: number
    let raw_date: number
    let raw_mag_var: number
    let raw_GPS_quality: number
    let raw_height: number
    let raw_geoid_sep: number
    let valid: string = ""
    let GPRMC: string[]
    let GPGGA: string[]

    // SN01 Variables end

    // SG35 Variables start
    let initialized = false
    let onReceivedDataHandler: (pm1: number, pm25: number, pm10: number) => void;
    // SG35 Variables end

    // SW01 function call start

        setreg(0xF2, 0x04, SW01_ADDR) // set Humidity oversampling to x8
        setreg(0xF4, 0x2F, SW01_ADDR) // set Pressure oversampling to x1
        setreg(0xF5, 0x0C, SW01_ADDR) // set time constant of the IIR filter to 250 ms

    // SW01 function call end

    // SN01 function call start
    startParallel(function () {
        while (true) {
            parseNMEA()
            basic.pause(10)
        }
    })

    // SN01 function call end

    // SG35 function call start

    begin()
    
    // SG35 function call end

    // SG33 function call start

     writereg(0xF4)
     disableInterrupt();
     setDriveMode(Measuremode.MODE_1SEC);

    // SG33 function call end

    // CW01 function call start

    serial.redirect(SerialPin.P1, SerialPin.P0, 115200)
    serial.setRxBufferSize(200)

    basic.showIcon(IconNames.Chessboard)
    basic.pause(2000)
    serial.writeString("ATE0" + cw01_vars.NEWLINE)
    basic.pause(300)
    serial.readString()
    serial.writeString("AT+CWMODE_DEF=3" + cw01_vars.NEWLINE)
    basic.pause(300)
    serial.writeString("AT+CIPRECVMODE=1" + cw01_vars.NEWLINE)
    basic.pause(300)
    serial.writeString("AT+TEST" + cw01_vars.NEWLINE)
    basic.pause(300)
    serial.readString();
    serial.writeString("AT+CWHOSTNAME?" + cw01_vars.NEWLINE);
    basic.pause(1000)

    read_and_set_name();

    // CW01 function call end

    // OD01 function call start

    init_od01()

    // OD01 function call end

     /**
     * draw / refresh screen
     */
    function draw(d: number) {
        if (d > 0) {
            set_pos()
            pins.i2cWriteBuffer(_I2CAddr, _screen)
        }
    }

    function cmd1(d: number) {
        let n = d % 256;
        pins.i2cWriteNumber(_I2CAddr, n, NumberFormat.UInt16BE);
    }

    function cmd2(d1: number, d2: number) {
        _buf3[0] = 0;
        _buf3[1] = d1;
        _buf3[2] = d2;
        pins.i2cWriteBuffer(_I2CAddr, _buf3);
    }

    function cmd3(d1: number, d2: number, d3: number) {
        _buf4[0] = 0;
        _buf4[1] = d1;
        _buf4[2] = d2;
        _buf4[3] = d3;
        pins.i2cWriteBuffer(_I2CAddr, _buf4);
    }

    function set_pos(col: number = 0, page: number = 0) {
        cmd1(0xb0 | page) // page number
        cmd1(0x00 | (col % 16)) // lower start column address
        cmd1(0x10 | (col >> 4)) // upper start column address    
    }

    function char(c: string, col: number, row: number, color: number = 1) {
        let p = (Math.min(127, Math.max(c.charCodeAt(0), 32)) - 32) * 5
        let ind = col + row * 128 + 1

        for (let i = 0; i < 5; i++) {
            _screen[ind + i] = (color > 0) ? Font_5x7[p + i] : Font_5x7[p + i] ^ 0xFF
            _buf7[i + 1] = _screen[ind + i]
        }
        _screen[ind + 5] = (color > 0) ? 0 : 0xFF
        _buf7[6] = _screen[ind + 5]
        set_pos(col, row)
        pins.i2cWriteBuffer(_I2CAddr, _buf7)
    }

    function scroll() {
        _cx = 0
        _cy++
        if (_cy > 7) {
            _cy = 7
            _screen.shift(128)
            _screen[0] = 0x40
            draw(1)
        }
    }

    /**
     * clear screen
     */
    //% blockId="OLED12864_I2C_CLEAR" block="OD01 clear display"
    //% weight=85 blockGap=8
    //% group="OD01"
    export function clear() {
        _cx = _cy = 0
        _screen.fill(0)
        _screen[0] = 0x40
        draw(1)
    }

    /**
     * power up the OD01. OD01 is initialised by default on startup. 
     */
    // % blockId="OLED12864_I2C_init" block="start OD01"
    // % weight=5 blockGap=8
    function init_od01() {
        cmd1(0xAE)       // SSD1306_DISPLAYOFF
        cmd1(0xA4)       // SSD1306_DISPLAYALLON_RESUME
        cmd2(0xD5, 0xF0) // SSD1306_SETDISPLAYCLOCKDIV
        cmd2(0xA8, 0x3F) // SSD1306_SETMULTIPLEX
        cmd2(0xD3, 0x00) // SSD1306_SETDISPLAYOFFSET
        cmd1(0 | 0x0)    // line #SSD1306_SETSTARTLINE
        cmd2(0x8D, 0x14) // SSD1306_CHARGEPUMP
        cmd2(0x20, 0x00) // SSD1306_MEMORYMODE
        cmd3(0x21, 0, 127) // SSD1306_COLUMNADDR
        cmd3(0x22, 0, 63)  // SSD1306_PAGEADDR
        cmd1(0xa0 | 0x1) // SSD1306_SEGREMAP
        cmd1(0xc8)       // SSD1306_COMSCANDEC
        cmd2(0xDA, 0x12) // SSD1306_SETCOMPINS
        cmd2(0x81, 0xCF) // SSD1306_SETCONTRAST
        cmd2(0xd9, 0xF1) // SSD1306_SETPRECHARGE
        cmd2(0xDB, 0x40) // SSD1306_SETVCOMDETECT
        cmd1(0xA6)       // SSD1306_NORMALDISPLAY
        cmd2(0xD6, 0)    // zoom off
        cmd1(0xAF)       // SSD1306_DISPLAYON
        clear()
    }

    /**
     * print text to screen
     */
    //% block="OD01 print %s|newline %newline"
    //% s.defl="string"
    //% newline.defl=true
    //% weight=88 blockGap=8 inlineInputMode=inline
    //% group="OD01"
    export function printString(s: string, newline: boolean = true) {
        for (let n = 0; n < s.length; n++) {
            char(s.charAt(n), _cx, _cy, 1)
            _cx += 6
            if (_cx > 120) {
                scroll()
            }
        }
        if (newline) {
            scroll()
        }
    }

    /**
    * print a number to screen 
    */
    //% block="OD01 print number %num|newline %newline"
    //% s.defl="0"
    //% newline.defl=true
    //% weight=86 blockGap=8 inlineInputMode=inline
    //% group="OD01"
    export function printNumber(num: number, newline: boolean = true) {
        printString(num.toString(), newline)
    }

        function getSW01(): void {
        let adc_T = (getreg(0xFA, SW01_ADDR) << 12) + (getreg(0xFB, SW01_ADDR) << 4) + (getreg(0xFC, SW01_ADDR) >> 4)
        let var1 = (((adc_T >> 3) - (dig_T1 << 1)) * dig_T2) >> 11
        let var2 = (((((adc_T >> 4) - dig_T1) * ((adc_T >> 4) - dig_T1)) >> 12) * dig_T3) >> 14
        let t = var1 + var2
        //T = Math.idiv((t * 5 + 128) >> 8, 100)
        T = ((t * 5 + 128) >> 8) / 100
        var1 = (t >> 1) - 64000
        var2 = (((var1 >> 2) * (var1 >> 2)) >> 11) * dig_P6
        var2 = var2 + ((var1 * dig_P5) << 1)
        var2 = (var2 >> 2) + (dig_P4 << 16)
        var1 = (((dig_P3 * ((var1 >> 2) * (var1 >> 2)) >> 13) >> 3) + (((dig_P2) * var1) >> 1)) >> 18
        var1 = ((32768 + var1) * dig_P1) >> 15
        if (var1 == 0)
            return; // avoid exception caused by division by zero
        let adc_P = (getreg(0xF7, SW01_ADDR) << 12) + (getreg(0xF8, SW01_ADDR) << 4) + (getreg(0xF9, SW01_ADDR) >> 4)
        let _p = ((1048576 - adc_P) - (var2 >> 12)) * 3125
        //_p = Math.idiv(_p, var1) * 2;
        _p = _p/ var1 * 2;
        var1 = (dig_P9 * (((_p >> 3) * (_p >> 3)) >> 13)) >> 12
        var2 = (((_p >> 2)) * dig_P8) >> 13
        P = _p + ((var1 + var2 + dig_P7) >> 4)
        let adc_H = (getreg(0xFD, SW01_ADDR) << 8) + getreg(0xFE, SW01_ADDR)
        var1 = t - 76800
        var2 = (((adc_H << 14) - (dig_H4 << 20) - (dig_H5 * var1)) + 16384) >> 15
        var1 = var2 * (((((((var1 * dig_H6) >> 10) * (((var1 * dig_H3) >> 11) + 32768)) >> 10) + 2097152) * dig_H2 + 8192) >> 14)
        var2 = var1 - (((((var1 >> 15) * (var1 >> 15)) >> 7) * dig_H1) >> 4)
        if (var2 < 0) var2 = 0
        if (var2 > 419430400) var2 = 419430400
        H = (var2 >> 12) >> 10
    }

    /**
     * The atmospheric pressure in hPa or mbar
     * https://en.wikipedia.org/wiki/Atmospheric_pressure
     * @param u the pressure unit
     */
    //% blockId="SW01_GET_PRESSURE" block="SW01 pressure %u"
    //% group="SW01"
    //% weight=84 blockGap=8
    export function pressure(u: Pressure): number {
        getSW01();
        return fix(P / 100);
    }

    /**
     * The temperature in degrees Celcius or Fahrenheit
     * https://en.wikipedia.org/wiki/Temperature
     * @param u the temperature unit
     */
    //% blockId="SW01_GET_TEMPERATURE" block="SW01 temperature %u"
    //% group="SW01"
    //% weight=88 blockGap=8
    export function temperature(u: Temperature): number {
        getSW01();
        if (u == Temperature.Celcius) return fix(T);
        else return fix(32 + T * 9 / 5);
    }

    /**
     * The relative humidity in percent
     * https://en.wikipedia.org/wiki/Relative_humidity
     * @param u the relative humidity unit
     */
    //% blockId="SW01_GET_HUMIDITY" block="SW01 humidity %u"
    //% group="SW01"
    //% weight=86 blockGap=8
    export function humidity(u: Humidity): number {
        getSW01();
        return fix(H);
    }

    function fix(x: number) {
        return Math.round(x * 100) / 100
    }

    function setreg(reg: number, dat: number, addr: number): void {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = dat;
        pins.i2cWriteBuffer(addr, buf);
    }

    function getreg(reg: number, addr: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
    }

    function getInt8LE(reg: number, addr: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(addr, NumberFormat.Int8LE);
    }

    function getUInt16LE(reg: number, addr: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(addr, NumberFormat.UInt16LE);
    }

    function getInt16LE(reg: number, addr: number): number {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        return pins.i2cReadNumber(addr, NumberFormat.Int16LE);
    }

    function readBlock(reg: number, count: number, addr: number): number[] {
        let buf: Buffer = pins.createBuffer(count);
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        buf = pins.i2cReadBuffer(addr, count);

        let tempbuf: number[] = [];
        for (let i: number = 0; i < count; i++) {
            tempbuf[i] = buf[i];
        }
        return tempbuf;
    }

    // checks if the SG33 has new data available
    function dataAvailable(): boolean {
        let status = getreg(0x00, SG33_ADDR);
        let ready = (status & 1 << 3);
        if (!ready) {
            return false;
        }
        return true;
    }

    // get new data from registers
    function getAlgorithmResults(): void {
        //let buf = pins.createBuffer(8);
        let buf: number[]= readBlock(0X02, 8, SG33_ADDR);
        //buf = pins.i2cReadBuffer(SG33_ADDR, 8, false);

        eCO2_ = (buf[0] << 8) | (buf[1]);
        TVOC_ = (buf[2] << 8) | (buf[3]);
    }

    // get new sensor data from SG33
    function getSG33(): void {
        if (dataAvailable()) {
            getAlgorithmResults();
        }
    }

    function writereg(dat: number): void {
        pins.i2cWriteNumber(SG33_ADDR, dat, NumberFormat.UInt8BE);
    }

   function disableInterrupt() {
        let meas_mode = getreg(0x01, SG33_ADDR);
        meas_mode &= ~(1 << 3);
        setreg(0x01, meas_mode, SG33_ADDR);
    }

    function setDriveMode(u: Measuremode): void {
        let meas_mode = getreg(0x01, SG33_ADDR);
        meas_mode &= 0x0C;
        setreg(0x01, meas_mode | u, SG33_ADDR);
    }

     /**
     * Volatile organic compounds (VOCs)
     * https://en.wikipedia.org/wiki/Volatile_organic_compound
     * @param u the pressure unit
     */
    //% block="SG33 TVOC"
    //% group="SG33"
    //% weight=84 blockGap=8
    export function TVOC(): number {
        getSG33();
        return TVOC_;
    }

    /**
     * The temperature in degrees Celcius or Fahrenheit
     * https://en.wikipedia.org/wiki/Carbon_dioxide
     * https://en.wikipedia.org/wiki/Carbon_dioxide_sensor#Estimated_CO2_sensor
     */
    //% block="SG33 eCO2"
    //% group="SG33"
    //% weight=88 blockGap=8
    export function eCO2(): number {
        getSG33();
        return eCO2_;
    }

    //%block="SN01 is data valid"
    //%group="SN01"
    export function dataValid(): boolean {
        if (valid.compare("A") == 0) {
            return true
        } else {
            return false
        }
    }

    //% block="SN01 get latitude %lat_format"
    //%group="SN01"
    export function getLat(lat_format: format): string {
        let latitude: number = raw_lat
        let orient: string = raw_NS
        let degrees: number = Math.trunc(latitude / 100)
        let minutes: number = Math.trunc(latitude % 100)
        let seconds: number = ((((latitude) % 100) * 10000) % 10000) * 60 / 10000
        let DD: number = degrees + minutes / 60 + seconds / 3600
        let final_lat: string = "-"

        if (dataValid()) {
            if (orient == "S" || orient == "s")
                latitude = latitude * -1
            if (lat_format == format.RAW) {
                final_lat = latitude.toString()
            }
            else if (lat_format == format.DD) {
                DD = latitude > 0 ? DD : DD * -1
                final_lat = DD.toString()
            }else if(lat_format == format.DMS)
            {
                final_lat = degrees.toString() + "d" + minutes.toString() + "\'" + seconds.toString() + "\"" + orient
            }
        }

        return final_lat
    }

    //% block="SN01 get longitude %lng_format"
    //%group="SN01"
    export function getLon(lon_format: format): string {
        let longitude: number = raw_lon
        let orient: string = raw_EW
        let degrees: number = Math.trunc(longitude / 100)
        let minutes: number = Math.trunc(longitude % 100)
        let seconds: number = ((((longitude) % 100) * 10000) % 10000) * 60 / 10000
        let DD: number = degrees + minutes / 60 + seconds / 3600
        let final_lon: string = "-"


        if (dataValid()) {
            if (orient == "W" || orient == "w")
                longitude = longitude * -1
            if (lon_format == format.RAW) {
                final_lon = longitude.toString()
            }else if (lon_format == format.DD) {
                DD = longitude > 0 ? DD : DD * -1
                final_lon = DD.toString()
            }else if(lon_format == format.DMS)
            {
                final_lon = degrees.toString() + "d" + minutes.toString() + "\'" + seconds.toString() + "\"" + orient
            }
        }

        return final_lon
    }

    function readBytes(): string {
        let byte: number
        let char: string
        byte = pins.i2cReadNumber(0x42, NumberFormat.UInt8BE)
        char = String.fromCharCode(byte)

        return char

    }

    function parseNMEA() {
        let temp_string: string = ""
        let nmea_sentence: string = readBytes()
        if (nmea_sentence.compare("$") == 0) {
            j = 0
            sentence_type = ""
            while (j < 5) {
                sentence_type += readBytes()
                j += 1
            }
        }
        if (sentence_type.compare("GPRMC") == 0) {
            sentence_type = ""
            readBytes()
            let temp_char: string = ""
            while (true) {
                temp_char = readBytes()
                if ((temp_char.compare("\n") == 0) || (temp_char.compare("\r") == 0)) {
                    basic.pause(100)
                    GPRMC = helpers.stringSplit(temp_string, ",")
                    raw_time = parseFloat(GPRMC[0])
                    valid = GPRMC[1]
                    raw_lat = parseFloat(GPRMC[2])
                    raw_NS = GPRMC[3]
                    raw_lon = parseFloat(GPRMC[4])
                    raw_EW = GPRMC[5]
                    raw_SOG = parseFloat(GPRMC[6])
                    raw_CMG = parseFloat(GPRMC[7])
                    raw_date = parseFloat(GPRMC[8])
                    raw_mag_var = parseFloat(GPRMC[9])
                    temp_string = ""
                    break
                } else {
                    temp_string += temp_char
                }
            }
        } else if (sentence_type.compare("GPGGA") == 0) {
            sentence_type = ""
            readBytes()
            let temp_char: string = ""
            while (true) {
                temp_char = readBytes()
                if ((temp_char.compare("\n") == 0) || (temp_char.compare("\r") == 0)) {
                    basic.pause(100)
                    GPGGA = helpers.stringSplit(temp_string, ",")
                    raw_time = parseFloat(GPGGA[0])
                    raw_lat = parseFloat(GPGGA[1])
                    raw_NS = GPGGA[2]
                    raw_lon = parseFloat(GPGGA[3])
                    raw_EW = GPGGA[4]
                    raw_GPS_quality = parseFloat(GPGGA[5])
                    raw_sat = parseFloat(GPGGA[6])
                    raw_hdop = parseFloat(GPGGA[7])
                    raw_height = parseFloat(GPGGA[8])
                    raw_geoid_sep = parseFloat(GPGGA[10])
                    temp_string = ""
                    break
                } else {
                    temp_string += temp_char
                }
            }
        }

    }

    /**
    * Connect to W-Fi 
    */
    //% weight=91 color=#ad0303
    //% group="Wifi-Common"
    //% blockId="connectToWifi" block="CW01 connect to WiFi SSID %SSID password %PSK"
    export function connectToWifi(SSID: string, PSK: string): void {
        serial.writeString("AT+CWMODE=1" + cw01_vars.NEWLINE)
        basic.pause(100)
        serial.readString()
        serial.writeString("AT+CWJAP=\"" + SSID + "\",\"" + PSK + "\"" + cw01_vars.NEWLINE)
        basic.pause(200)
        serial.readString()

        do {
            cw01_vars.res = serial.readString()
            basic.pause(1000)
        } while (!cw01_vars.res.includes("WIFI CONNECTED"));

        if (cw01_vars.res.includes("WIFI CONNECTED")) {
            basic.showString("C")
            basic.pause(2000)
            basic.showString("")
            cw01_vars.res = ""
        } else {
            basic.showString("D")
        }
    }

    /**
    * Connect to Ubidots IoT platform
    */
    //% weight=91 color=#f2ca00
    //% group="Wifi-Ubidots"
    //% blockId="connectToUbidots" block="CW01 connect to Ubidots %user| with token %TKN"
    export function connectToUbidots(User: USER, TKN: string): void {
        switch (User) {
            case USER.INDUSTRIAL: cw01_vars.select = true;
            case USER.EDUCATIONAL: cw01_vars.select = false;
        }
        cw01_vars.TOKEN = TKN
        serial.writeString("AT+CIPSTART=\"TCP\",\"things.ubidots.com\",80" + cw01_vars.NEWLINE)
        basic.pause(500)
    }

        /**
    * Get latest value of variable from Ubidots IoT platform
    */
    //% weight=91 color=#f2ca00
    //% group="Wifi-Ubidots"
    //% blockId="IoTgetValuefromUbidots" block="CW01 get value from Ubidots device %device variable %variable"
    export function IoTgetValuefromUbidots(device: string, variable: string): string {

        let ubi_connected: string = ""

        while (cw01_button_object.sending_data) {
            basic.pause(100)
        }

        cw01_button_object.sending_data = true

        cw01_vars.res = ""
        let value: string
        let index1: number
        let index2: number

        do {

            let industrial: string = "industrial.api.ubidots.com"
            let educational: string = "things.ubidots.com"
            let server: string
            if (cw01_vars.select) {
                server = industrial
            } else {
                server = educational
            }
            let request: string = "GET /api/v1.6/devices/" + device + "/" + variable + "/values/?page_size=1 HTTP/1.1" + cw01_vars.NEWLINE +
                "Host: " + server + cw01_vars.NEWLINE +
                "User-Agent: CW01/1.0" + cw01_vars.NEWLINE +
                "Accept: */*" + cw01_vars.NEWLINE +
                "X-Auth-Token: " + cw01_vars.TOKEN + cw01_vars.NEWLINE +
                "Content-Type: application/json" + cw01_vars.NEWLINE + cw01_vars.NEWLINE



            serial.writeString("AT+CIPSEND=" + (request.length).toString() + cw01_vars.NEWLINE)
            basic.pause(400)
            serial.writeString(request)
            basic.pause(1000)

            ubi_connected = serial.readString()

            if (ubi_connected.includes("link is not valid")) {
                if (cw01_vars.select) {
                    connectToUbidots(USER.INDUSTRIAL, cw01_vars.TOKEN)
                } else {
                    connectToUbidots(USER.EDUCATIONAL, cw01_vars.TOKEN)
                }
            } else {
                ubi_connected = ""
            }

        } while (ubi_connected.includes("link is not valid"));

        serial.writeString("AT+CIPRECVDATA=200" + cw01_vars.NEWLINE)
        basic.pause(400)
        serial.readString()
        serial.writeString("AT+CIPRECVDATA=100" + cw01_vars.NEWLINE)
        basic.pause(400)
        serial.readString()
        basic.pause(100)
        serial.writeString("AT+CIPRECVDATA=200" + cw01_vars.NEWLINE)
        basic.pause(400)
        cw01_vars.res += serial.readString()
        basic.pause(400)

        index1 = cw01_vars.res.indexOf("\"value\": ") + "\"value\": ".length
        index2 = cw01_vars.res.indexOf("]", index1)
        value = cw01_vars.res.substr(index1, index2 - index1 - 1)

        cw01_button_object.sending_data = false

        return value

    }

    /**
    * Send numerical value to Ubidots IoT platform. Select loc to true if you want to send GPS
    * location entered with IoTaddLocation block
    */
    //% weight=91 color=#f2ca00
    //% group="Wifi-Ubidots"
    //% blockId="IoTSendValueToUbidots" block="CW01 send value %value to Ubidots device %device variable %variable , include location %loc"
    export function IoTSendValueToUbidots(value: number, device: string, variable: string, loc: boolean): void {

        let ubi_connected: string = ""
        let value_store: number = value

        while (cw01_button_object.sending_data) {
            basic.pause(100)
        }

        cw01_button_object.sending_data = true

        do {

            let payload: string = "{\"value\": " + value.toString() + "}"

            if (loc) {
                payload = "{\"value\": " + value.toString() + ", \"context\": {\"lat\": " + cw01_vars.latitude.toString() + ", \"lng\": " + cw01_vars.longitude.toString() + "}}"
            }

            let industrial: string = "industrial.api.ubidots.com"
            let educational: string = "things.ubidots.com"
            let server: string
            if (cw01_vars.select) {
                server = industrial
            } else {
                server = educational
            }
            let request: string = "POST /api/v1.6/devices/" + device + "/" + variable + "/values HTTP/1.1" + cw01_vars.NEWLINE +
                "Host: " + server + cw01_vars.NEWLINE +
                "User-Agent: CW01/1.0" + cw01_vars.NEWLINE +
                "X-Auth-Token: " + cw01_vars.TOKEN + cw01_vars.NEWLINE +
                "Content-Type: application/json" + cw01_vars.NEWLINE +
                "Connection: keep-alive" + cw01_vars.NEWLINE +
                "Accept: */*" + cw01_vars.NEWLINE +
                "Content-Length: " + (payload.length).toString() + cw01_vars.NEWLINE + cw01_vars.NEWLINE + payload + cw01_vars.NEWLINE


            serial.writeString("AT+CIPSEND=" + (request.length).toString() + cw01_vars.NEWLINE)
            basic.pause(300)
            serial.writeString(request)
            basic.pause(1000)

            ubi_connected = serial.readString()

            if (ubi_connected.includes("link is not valid")) {
                if (cw01_vars.select) {
                    connectToUbidots(USER.INDUSTRIAL, cw01_vars.TOKEN)
                } else {
                    connectToUbidots(USER.EDUCATIONAL, cw01_vars.TOKEN)
                }
            } else {
                ubi_connected = ""
            }

            get_status()


            basic.pause(100)
            serial.writeString("AT+CIPRECVDATA=400" + cw01_vars.NEWLINE)
            basic.pause(100)
            serial.readString()

        } while (ubi_connected.includes("link is not valid"));

        cw01_button_object.sending_data = false;
    }

    /**
    * Enable feedback through microbit Matrix LEDs
    */
    //% weight=91 color=#ad0303
    //% group="Wifi-Common"
    //% blockId="enableFeedback" block="CW01 enable feedback LEDs %u"
    export function enableFeedback(u: boolean): void
    {
        en_Feedback = u
    }

    function get_status(): boolean {

        basic.pause(400)
        serial.writeString("AT+CIPRECVDATA=200" + cw01_vars.NEWLINE)
        basic.pause(300)
        cw01_vars.res = serial.readString()

        if(en_Feedback)
        {
            if (cw01_vars.res.includes("HTTP/1.1 200") || cw01_vars.res.includes("HTTP/1.0 200") || cw01_vars.res.includes("HTTP/1.1 201") || cw01_vars.res.includes("HTTP/1.0 202")) {
                basic.showIcon(IconNames.Yes, 50)
                basic.showString("", 50)
                return true
            } else {
                basic.showIcon(IconNames.No, 50)
                basic.showString("", 50)
                return false
            }
        }else {
            if (cw01_vars.res.includes("HTTP/1.1 200") || cw01_vars.res.includes("HTTP/1.0 200") || cw01_vars.res.includes("HTTP/1.1 201") || cw01_vars.res.includes("HTTP/1.0 202"))
            {
                basic.pause(200)
                return true
            }else{
                basic.pause(200)
                return false
            }
        }
    }

    function read_and_set_name(): void {
        let name: string = "";
        name = serial.readString()

        if (!(name.includes("CW01"))) {
            serial.writeString("AT+CWHOSTNAME=\"CW01\"" + cw01_vars.NEWLINE)

            if(name.includes("ESP") || name.includes("CW01"))
            {

                if (!(name.includes("CW01"))) {
                    serial.writeString("AT+CWHOSTNAME=\"CW01\"" + cw01_vars.NEWLINE)
                    basic.pause(1000)
                    control.reset()
                }

            }
        }
    }
        
    //%shim=sg35::begin
    function begin(): void {
        return
    }

    //%shim=sg35::read
    export function read(): boolean {
        return true
    }

    //%shim=sg35::pm1
    export function pm1(): number {
        return 1
    }

    //%shim=sg35::pm25
    export function pm25(): number {
        return 1
    }

    //%shim=sg35::pm10
    export function pm10(): number {
        return 1
    }

    function init_sg34() {

        startParallel(function(){
                while(true)
                {
                    let rcv = read()
                    if(rcv)
                    {
                        onReceivedDataHandler(pm1(), pm25(), pm10())
                    }
                    basic.pause(1)
                }
        })
    }

    //% block="SG35 on received "
    //% draggableParameters=reporter
    //% group="SG35"
    export function onReceivedData(cb: (receivedPM1: number,receivedPM25: number,receivedPM10: number) => void): void {
        init_sg34()
        onReceivedDataHandler = cb
    }

    //% shim=parall::startParallel
    export function startParallel(u: () => void) {
        return 1;
    }
}