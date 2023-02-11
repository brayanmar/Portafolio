import { Pipe,PipeTransform } from '@angular/core';
@Pipe({
    name: "rray",
  })

  
export class ArrayPipe implements PipeTransform {
    transform(object: any = []): any {
        
      return Object.values(object)
    }
  } 
  