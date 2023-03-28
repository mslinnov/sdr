<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Stade de Reims</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
{{--        PWA--}}
        <link rel="manifest" href="/manifest.json">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="theme-color" content="#ffffff">
        <script>
            window.addEventListener('load', () => {
                if ("serviceWorker" in navigator){
                    navigator.serviceWorker.register('sw.js')
                }
            })
        </script>

        <meta name="csrf-token" content="{{ csrf_token() }}">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
        @routes
        @vite('resources/js/app.js')
        @inertiaHead

    </head>

    <body class="bg-white dark:bg-gray-800 dark:text-gray-200">
    @inertia
    </body>
</html>
