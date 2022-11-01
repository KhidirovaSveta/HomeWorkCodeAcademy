/*1. 1-dən 20-ə qədər cüt  ədədləri çap edən proqram tərtib edin.(Mütləq for-dan istifadə edin. 
    For bir-bir artmalıdır. İf-dən istifadə etmək olmaz) */


let i;
for ( i = 1; i <= 20; i++) {
  while (i%2==0) {
        console.log(i)
        break;
  }
}