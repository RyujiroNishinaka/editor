# editor


### mongoDB環境構築について  
1）mongoDBのインストール  
2）npmパッケージのインストール  
3）mongoDbの起動  
4）node.jsからアクセスできるか確認


#### 1）mongoDBのインストール
・ドライバとappへの書き方，また簡単な挿入検索のコード
https://qiita.com/one-kelvin/items/c0c036f774f0b3b98ae5  
インストールするのはcommunity server版


#### 2）npmパッケージのインストール
mongoを動かすためのnpmのパッケージを以下のサイトを参考にインストール  
https://qiita.com/tatsuyafukui/items/3d3902c2467cb6bd743b
- mongodb
- mongoose


#### 3）mongoDbの起動
$ mongod --dbpath <データを保管するためのディレクトリの絶対パス（任意）>


#### 4）node.jsからアクセスできるか確認
mongoDBにコレクション（テーブル）を作成するためのmongo shellコマンド  
db.createCollection('test1');

データを挿入するためのmongo shellコマンド  
db.test1.insert(
{ "key1": "value1",
...
});

データを検索するためのmongo shellコマンド  
db.test1.find();


データの挿入を確認するためのコマンド  
node editor/mongo.js  
実行後，mongo shellでdb.test1.find();を実行し，行が増えていたら成功