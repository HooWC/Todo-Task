import AsyncStorage from '@react-native-async-storage/async-storage';

const TASKS_KEY = 'tasks';

// 获取任务列表
export const getTasks = async () => {
    const tasks = await AsyncStorage.getItem(TASKS_KEY);
    return tasks ? JSON.parse(tasks) : [];
};

// 保存任务列表
export const saveTasks = async (tasks) => {
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};
