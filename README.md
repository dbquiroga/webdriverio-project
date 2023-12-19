# webdriverio-project
This is a project using webdriverIO and Javascript


PASO  A PASO PARA EJECUTAR WDIO
1. Necesitas tener **Node.js** instalado en el sistema (versión *12.16.1* en adelante).
2.Asegurarte de estar parada en la carpeta del repo
3. Ejecutar: `npm init wdio .`
4. Se desplegará el WDIO CLI Wizard, epodes poner las siguientes opciones:

| Pregunta                                                 | Respuesta                                   |
| -------------------------------------------------------- | ------------------------------------------- |
| Where is your automation backend located?                | On my local machine                         |
| Which framework do you want to use?                      | jasmine                                     |
| Do you want to use a compiler?                           | No!                                         |
| Where are your test specs located?                       | ./specs/\*\*/\*.js                          |
| Do you want WebdriverIO to autogenerate some test files? | No                                          |
| Which reporter do you want to use?                       | spec                                        |
| Do you want to add a plugin to your test setup?          | No                                          |
| Do you want to add a service to your test setup?         | chromedriver                                |
| What is the base url?                                    |                                             |
| Do you want me to run `npm install`                      | Yes                                         |

5.  Se va a crear un archivo wdio.conf.js* ahi es donde estan todas las configuraciones de como corres los test
6. Para correr todos los test
```
npx wdio run ./wdio.conf.js
```

7.Si queres correr uno o mas tests de forma individual, ejecutar:

```
npx wdio run ./wdio.conf.js --spec specs/test1.spec.js specs/test2.spec.js
```
