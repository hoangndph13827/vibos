Cách chạy ứng dụng VIBOS.

Chuẩn bị:
- Cài đặt npm từ https://www.npmjs.com/package/npm

Bước 0:
- Giải nén source từ tệp vibos.zip và copy source vào thư mục deploy trên server

Bước 1:
- Run lệnh cài đặt tại thư mục vibos:
$ npm i

Bước 2:
- Cài đặt Gulp
$ npm install --global gulp-cli

Bước 3:
- Cài đặt ứng dụng screen
$ yum install screen

Bước 4:
Chạy lệnh run server
$ screen -dmSL  gulp sync
 