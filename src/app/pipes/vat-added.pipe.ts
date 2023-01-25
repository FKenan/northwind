import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded',
})

// ng g pipe vatAdded   ile oluşturulur
export class VatAddedPipe implements PipeTransform {
  transform(value: number, rate: number): number {
    // value alınan ilk değerdir burda data olarak gelen unitprice ı alır daha sonra diğer parametreler parantez sonrası ise dönüş tipi
    return value + (value * rate / 100);
  }
}
