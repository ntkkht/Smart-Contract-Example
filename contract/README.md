# Smart contract Compiler

## Step 1
```shell
npm install
```

## Step 2
```shell
npx hardhat compile
```

## Step 3 (This step you need to pick your network or you can use ganache as in example)
```shell
npx hardhat run scripts/deploy.js --network ganache
```

## For Testing
```shell
npx hardhat run test/certificate.js --network ganache 
```