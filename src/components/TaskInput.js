import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const TaskInput = ({ onAddTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        if (taskText.trim()) {
            onAddTask(taskText);
            setTaskText('');
        }
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="输入任务..."
                value={taskText}
                onChangeText={setTaskText}
            />
            <Button title="添加" onPress={handleAddTask} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
    },
});

export default TaskInput;
