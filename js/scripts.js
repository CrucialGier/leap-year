
$(document).ready(function() {
  $("#leap-year").submit(function(event) {
    var year = parseInt($("#year").val());
    if (year % 400 === 0) {
      $("#yearResult").text("That year is a leap year.");
    } else if (year % 100 === 0) {
      $("#yearResult").text("That year is not a leap year.");
    } else if (year % 4 === 0) {
      $("#yearResult").text("That year is a leap year.");
    } else {
      $("#yearResult").text("That year is not a leap year.");
    };
    event.preventDefault();
  });
});





//     function getPrimes(max) {
//       var sieve = [];
//       var i;
//       var j;
//       var primes = [];
//       for (i = 2; i <=max; i++) {
//         // debugger;
//         if (!sieve[i]) {
//             // i has not been marked -- it is prime
//             primes.push(i);
//             for (j = i * i; j <= max; j += i) {
//                 sieve[j] = true;
//             }
//         }
//       }
//     console.log(sieve);
//     return primes;
//     }
//
//     console.log(getPrimes(primeNumber));
//
//   });
// });








//     var primeNumber = parseInt($("input#prime-number-input").val());
//     array = [];
//     primeNumbers = [];
//     prime = 2;
//     //populates array with all numbers starting with user input.
//     for(var i = 2; i <= primeNumber; i++) {
//       array.push(i);
//
//     }
//
//     //iterates through array to check if numbers are prime.  Populates primeNumbers[]
//     //with prime values
//     if ((array[j] % prime) === 0){
//
//       } else if ((array[j] % prime) !== 0){
//         primeNumbers.push(array[j]);
//       }
//     }
//
//
//
//
//     alert(array);
//     alert(primeNumbers);
//   });
//
// });
