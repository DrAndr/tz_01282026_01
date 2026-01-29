This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Запуск

# Установите зависимости и запустите проект локально.

- Убедитесь что порт 3000 не занят:

```bash
lsof -i :3000
```

Если порт занят и вывелся список процессов, и эти процессы вами не используются, тогда можете их завершить, что бы освободить порт под тестирование веб приложения.
Вам понадобится найти PID - это ( process ID например 9012 ) - lsof вернет строку в которой можно найти PID, если порт 3000 занят.

```bash
kill -9 9012
```

Если порт 3000 у вас занят и вам нужен запущенный на нем процес, локальный сервер запустится на следующем свободном порту.

# Запуск локального сервера

```bash
npm install
# then
npm run build && npm run start
# or
npm run dev
```

[http://localhost:3000](http://localhost:3000)
