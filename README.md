# Contenido

- Descripción de la prueba
- Procedimiento para deploy
- Herramientas Usadas
- Versión y licencia
- Integración Continua

## Descripción del proyecto

Single Page Aplication en Vanilla JavaScript (Sin Frameworks).

## Liga del Proyecto corriendo en producción en un servidor de Vercel.

Si no pudiste ejecutar el proyecto en local puedes contactarme con mis datos de contacto que se encuentran al final del repo, por lo pronto puedes ver la aplicación en producción usando este link.

https://hadiazb.github.io/tita-media-test/

## Integración Continua

Este proyecto cuenta con sistema de integración continua empleado Travis, que es una herramienta que permite realizar este tipo de integraciones con repositorios basados en la nube en este caso GitHub.

## Herramientas Usadas

Las herramientas empleadas en este proyecto son listadas a continuación:

- Editor Visual Studio Code
- HTML5
- CSS
- Babel para transpilar codigo JS en ES8
- Vercel para hacer deploy en producción
- NPM, node, gestor de paquetes y dependencias
- Webpack, para empaquetar app, para todo navegador.

## Vesión

En la actualidad se cuenta con la v1.0.0, que nos permite el uso de herramientas básicas para la visualización de usuario final, en relación a la Licencia cuenta con MIT Licence

## Procedimiento para correr en local

- Debes clonar el repocitorio con el siguiente código `$ git clone https://github.com/hadiazb/tita-media.git`
- Luego de la descarga debes instalar node y las dependencias de npm usadas`$ node install` y `$ npm install` respectivamente.
- Verificar versión con `$ node -v` y `$ npm -v`
- Para correr este proyecto en local debes primero usar el script definido en el package.json `$ npm run build`, para empaquetar la aplicación con webpack, luego de estar empaquetada ejecutar el script `$ npm run start` para correr en desarrollo y en local.
- Luego de lo anterior en el puerto 8000 de tu navegador se podra visualizar la aplicación http://localhost:8080/ seguro se abre automaticamente.

### Contacto

- Telefono 311-268-1981
- <hugoandresdiazbernal@gmail.com>
- https://my-profile-beryl.vercel.app/
