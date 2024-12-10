## TaskApp

TaskApp é um aplicativo de gerenciamento de tarefas desenvolvido com React Native. Este README fornece uma visão geral das funcionalidades do aplicativo, bem como as bibliotecas utilizadas.

## Funcionalidades

- **Gerenciamento de Tarefas**: Adicione e edite  tarefas.
- **Navegação**: Navegação entre diferentes telas do aplicativo.
- **Persistência de Dados**: Armazene tarefas localmente usando Realm.
- **Interface de Usuário**: Componentes personalizados para uma interface de usuário intuitiva.

## Bibliotecas Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **React Native**: Framework para desenvolvimento de aplicativos móveis nativos usando React.
- **React Navigation**: Biblioteca para navegação e roteamento em aplicativos React Native.
- **Realm**: Banco de dados móvel para persistência de dados local.
- **UUID**: Biblioteca para geração de identificadores únicos universais (UUIDs).

## Estrutura do Projeto

```
TaskApp/
├── __tests__/
│   └── App.test.tsx
├── .bundle/
│   └── config
├── .gitignore
├── .prettierrc.js
├── .watchmanconfig
├── android/
│   ├── .gradle/
│   │   ├── 8.10.2/
│   │   └── buildOutputCleanup/
│   ├── app/
│   │   └── .cxx/
│   ├── build/
│   ├── app/build.gradle
│   ├── gradle/
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   └── settings.gradle
├── app.json
├── App.tsx
├── babel.config.js
├── Gemfile
├── index.js
├── ios/
│   ├── .xcode.env
│   ├── Podfile
│   └── taskApp/
│       ├── taskApp.xcodeproj/
│       └── taskAppTests/
├── jest.config.js
├── metro.config.js
├── package.json
├── README.md
├── src/
│   ├── @types/
│   ├── components/
│   ├── database/
│   ├── routes/
│   └── screens/
└── tsconfig.json
```


## Configuração e Execução

### Pré-requisitos

- Node.js
- npm ou Yarn
- Android Studio (para emulação Android)
- Xcode (para emulação iOS)

### Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/taskapp.git
    cd taskapp
    ```

2. Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    ```

### Executando o Aplicativo

#### Android

```bash
npm run android
# ou
yarn android
```

#### iOS

```bash
npm run ios
# ou
yarn ios
```

