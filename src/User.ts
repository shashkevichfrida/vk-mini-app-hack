import { VkUser } from './VkUser.ts';

export class User {
    private vkUser: VkUser;
    private backendUrl: '';
    private userData: null;
    constructor(vkUser, backendUrl) {
        this.vkUser = vkUser; // объект VkUser для получения данных через VK
        this.backendUrl = backendUrl; // URL вашего бэкенда
        this.userData = null; // итоговый объект с объединёнными данными
    }

    getVkUser() {
        return this.vkUser;
    }
    // Инициализация и получение данных с VK и бэкенда
    async init() {
        try {
            // Шаг 1: Инициализация VK Mini App
            await this.vkUser.init();

            // Шаг 2: Получение информации о пользователе через VK
            const vkUserInfo = await this.vkUser.getUserInfo();
            if (!vkUserInfo || !vkUserInfo.id) {
                throw new Error('Не удалось получить информацию о пользователе через VK.');
            }

            // Шаг 3: Получение дополнительных данных пользователя с бэкенда по ID
            const backendData = await this.getUserDataFromBackend();
            if (!backendData) {
                throw new Error('Не удалось получить данные с бэкенда.');
            }

            // Шаг 4: Объединение данных VK и бэкенда в один объект
            this.userData = {
                ...vkUserInfo, // данные VK (id, имя, аватар и т.д.)
                ...backendData // дополнительные параметры с бэкенда
            };

            // console.log('User data successfully loaded:', this.userData);
            return this.userData;
        } catch (error) {
            console.error('Error initializing user data:', error);
            return null;
        }
    }

    async initFriend(user: User) {
        try {
            // Шаг 1: Инициализация VK Mini App
            // await this.vkUser.init();

            // Шаг 2: Получение информации о пользователе через VK
            const vkUserInfo = user;
            // if (!vkUserInfo || !vkUserInfo.id) {
            //     throw new Error('Не удалось получить информацию о пользователе через VK.');
            // }

            // Шаг 3: Получение дополнительных данных пользователя с бэкенда по ID
            const backendData = await this.getUserDataFromBackend();
            if (!backendData) {
                throw new Error('Не удалось получить данные с бэкенда.');
            }

            // Шаг 4: Объединение данных VK и бэкенда в один объект
            this.userData = {
                ...vkUserInfo, // данные VK (id, имя, аватар и т.д.)
                ...backendData // дополнительные параметры с бэкенда
            };

            // console.log('User data successfully loaded:', this.userData);
            return this.userData;
        } catch (error) {
            console.error('Error initializing user data:', error);
            return null;
        }
    }

    // Запрос на получение данных с бэкенда
    async getUserDataFromBackend() {
        try {
            const response = await fetch(`${this.backendUrl}/student/getOne`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (!response.ok) {
                throw new Error(`Ошибка запроса: ${response.status}`);
            }

            const data = await response.json();
            // console.log('Data from backend:', data);
            return data;
        } catch (error) {
            console.error('Error fetching user data from backend:', error);
            return null;
        }
    }
}
