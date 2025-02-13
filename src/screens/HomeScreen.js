import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TaskItem from '../components/TaskItem';
import TaskInput from '../components/TaskInput';
import { getTasks, saveTasks } from '../storage/storageHelper';

const HomeScreen = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        const storedTasks = await getTasks();
        setTasks(storedTasks);
    };

    const addTask = async (text) => {
        const newTask = { id: Date.now().toString(), text, completed: false };
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        await saveTasks(updatedTasks);
    };

    const toggleComplete = async (taskId) => {
        const updatedTasks = tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        await saveTasks(updatedTasks);
    };

    const deleteTask = async (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        await saveTasks(updatedTasks);
    };

    return (
        <View style={styles.container}>
            <TaskInput onAddTask={addTask} />
            <FlatList
                data={tasks}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TaskItem
                        task={item}
                        onToggleComplete={toggleComplete}
                        onDelete={deleteTask}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
});

export default HomeScreen;
