# dependency-injector-example

The purpose of this project is to display the usage of dependency injection with the following 3 tools:
- [TypeDi](https://github.com/typestack/typedi)
- [Inversify](https://inversify.io/)
- [TSyringe](https://github.com/microsoft/tsyringe)

I've written an article on detailing on what is Dependency Injection Principle and how to implement it. 
### Check it out [here!](url)

# How to
1.  Clone the repo
```
git clone https://github.com/muhammadsalmanafzal/dependency-injector-example.git
```
2. Install npm modules
```
npm i
```
3. Create **.env** file. This can be similar to **.env.example**
4. Run the server
```
npm run dev
```
5. Now you can either send a `GET` request to the server, where you need to replace typedi with `inversify` or `tsyringe` to see the difference:
```
http://localhost:8080/robot/typedi
```
