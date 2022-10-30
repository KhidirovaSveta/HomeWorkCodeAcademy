/* 6. Proqrama daxil edilən məlumatın ədəd və ya  hərf, simvol olduğunu təyin edən proqram tərtib edin. 
Daxil edilən məlumat yalnız 1 rəqəm, hərf və ya simvol ola bilər. 

Məsələn: info=6 yazdıqda cavab bu şəkildə olmalıdır:
Daxil edilən məlumat rəqəmdir.

Məsələn: info="a" yazdıqda cavab bu şəkildə olmalıdır:
Daxil edilən məlumat hərf və ya simvoldur.

Məsələn: info="\" yazdıqda cavab bu şəkildə olmalıdır:
Daxil edilən məlumat hərf və ya simvoldur. */


let info = "a"
if (typeof info === 'string' ){

    console.log("Daxil edilən məlumat hərf və ya simvoldu")
}
else if (Number.isInteger(info) ){

    console.log("Daxil edilən məlumat rəqəmdir.")
}

