# Start with Laravel (Laravel_mix, Reactjs w/ Typescript, Inertia.js and Ant Design)

## Getting start

After cloning the project, install dependencies

```
composer install
npm install
```

Generate key for laravel

```
php artisan key:generate
```

Compile js and/or css files to public folder

```
// Compile with hot reload
npm run hot
// Or, just compile javascript
npm run dev
```

Start laravel artisan server

```
php artisan serve

```

## React Folders

```
// app.js
resources > js > app.js

// Pages folder
resource > js > pages

// Layout main
resource > js > layout > Authorized > index.tsx
```

## Docs

- [Laravel Mix](https://laravel.com/docs/8.x/mix)
- [React](https://pt-br.reactjs.org/docs/getting-started.html)
- [Inertia.js](https://inertiajs.com/)
- [Ant Design](https://ant.design/docs/react/introduce)
- [Typescript](https://www.typescriptlang.org/)

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
