DB作成
MYSQL_DATABASE: app
MYSQL_USER: user
MYSQL_PASSWORD: password


```
CREATE TABLE users (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255),
    password VARCHAR(255),
    role VARCHAR(20),
    created DATETIME DEFAULT NULL,
    modified DATETIME DEFAULT NULL
);
```

- ログイン(cakephp)
http://localhost:8765/

- フロント(Nuxt)
http://localhost:3000/

- BFF(express/graphql)
http://localhost:4000/app1/graphql


## 参考にした情報
### bff + express
- https://qiita.com/ut0n/items/83b5836bc542c8f9bc71
- apolloまで使ったほうが良い??
  - 検索がうまくできていない。
  - データ更新の仕組みまだ


http://localhost:4000/app1/graphql?query=query%20%7B%0A%20%20authorList%20%7B%0A%20%20%20%20name%0A%20%20%7D%0A%7D