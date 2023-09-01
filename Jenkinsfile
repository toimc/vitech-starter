pipeline {
    agent any

    tools {
      nodejs 'node18'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                sh 'echo checked'
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'pnpm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        // stage('Test') {
        //     steps {
        //         sh 'npm run test'
        //     }
        // }

        stage('Deploy') {
            steps {
                // 在这里添加你的部署步骤，比如将构建产物上传至服务器等
                sh 'ls -la'
            }
        }
    }
}
