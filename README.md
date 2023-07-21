# GITS Internship MSIBC5 - Problem Solving Test

## Soal 1. A000124 of Sloane’s OEIS
!['Output Soal 1'](outputs/Screenshot%202023-07-21%20at%2010.13.06%20AM.png)
Output Soal no. 1

## Soal 2. Dense Ranking
!['Output Soal 2'](outputs/Screenshot%202023-07-21%20at%2010.29.06%20AM.png)
Output Soal no. 2

## Soal 3. Balanced Bracket

Dalam menyelesaikan soal ini dibuat sebuah fungsi `isBalancedBrackets(str)` menggunakan pendekatan **stack** untuk memeriksa kecocokan antara kurung pembuka dan kurung penutup dari nilai `str` yang dikirimkan pada parameter fungsi. **Stack** akan menampung setiap string kurung pembuka, lalu mengeluarkan item terakhir ketika ada string kurung penutup. Apabila string kurung penutup adalah pasangan dari item string yang dikeluarkan dalam stack, maka string tersebut berpasangan dan fungsi akan melanjutkan iterasinya. Sedangkan ketika kondisi tidak terpenuhi fungsi akan menghentikan iterasi dan memberikan ouput 'NO' yang berarti string tidak sesuai.

![ExecTime](outputs/Screenshot%202023-07-21%20at%201.53.55%20PM.png)
Execution Time

!['Output Soal 3'](outputs/Screenshot%202023-07-21%20at%2010.48.58%20AM.png)
Output Soal no. 3
