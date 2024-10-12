import bridge from '@vkontakte/vk-bridge';

export class VkUser {

    private appId;
    private accessToken;
    constructor(appId) {
        this.appId = appId;
        this.accessToken = null;
    }

    // Инициализация приложения VK Mini App
    async init() {
        try {
            await bridge.send('VKWebAppInit');
            console.log('VK Mini App initialized');
        } catch (error) {
            console.error('Error during VKWebAppInit:', error);
        }
    }

    // Получение информации о пользователе
    async getUserInfo() {
        try {
            const userInfo = await bridge.send('VKWebAppGetUserInfo');
            console.log('User info:', userInfo);
            return userInfo;
        } catch (error) {
            console.error('Error getting user info:', error);
            return null;
        }
    }

    // Получение информации о любом пользователе по ID
    async getUserInfoById(userId) {
        try {
            const userInfo = await bridge.send('VKWebAppCallAPIMethod', {
                method: 'users.get',
                params: {
                    user_ids: userId,
                    fields: 'photo_50,city,verified',
                    v: '5.131',
                    access_token: this.accessToken
                }
            });
            console.log(`User info for user ${userId}:`, userInfo.response[0]);
            return userInfo.response[0];
        } catch (error) {
            console.error(`Error getting user info for user ${userId}:`, error);
            return null;
        }
    }
    // Получение access_token с правами доступа к друзьям
    async getAuthToken() {
        try {
            const authData = await bridge.send('VKWebAppGetAuthToken', {
                app_id: this.appId,
                scope: 'friends'
            });
            this.accessToken = authData.access_token;
            console.log('Access token received:', this.accessToken);
        } catch (error) {
            console.error('Error getting access token:', error);
        }
    }

    // Получение списка друзей пользователя
    async getFriends() {
        if (!this.accessToken) {
            console.error('Access token is not available. Please getAuthToken first.');
            return null;
        }

        try {
            const friendsData = await bridge.send('VKWebAppCallAPIMethod', {
                method: 'friends.get',
                params: {
                    v: '5.131',
                    fields: 'photo_50,city,verified',
                    access_token: this.accessToken
                }
            });
            console.log('Friends list:', friendsData.response.items);
            return friendsData.response.items;
        } catch (error) {
            console.error('Error getting friends:', error);
            return null;
        }
    }
}
