import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onToggleComplete, onDelete }) => {
    return (
        <View style={styles.taskContainer}>
            <TouchableOpacity onPress={() => onToggleComplete(task.id)}>
                <Text style={[styles.taskText, task.completed && styles.completed]}>
                    {task.text}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete(task.id)}>
                <Text style={styles.deleteButton}>❌</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#f9f9f9',
        borderRadius: 5,
    },
    taskText: {
        fontSize: 16,
    },
    completed: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    deleteButton: {
        color: 'red',
        fontSize: 16,
    },
});

export default TaskItem;
