import React, {ChangeEvent, FC, useCallback, useState} from 'react';

const CONTAINER_STYLES = {display: 'flex', flexDirection: 'column', gap: 10};

type PropsType = { value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void };

// Task 1
// If change value on input Title component not re-render // 1 task
// If change value on input Example_1 component not re-render // 2 task

export const Example_1 = () => {
  console.log('Example_1 Component rendered')

  return (
    <div style={{...CONTAINER_STYLES} as any}>
      <Input />
      <Title title="I am a title" />
    </div>
  );
};

const Title = React.memo((props: { title: string }) => { // this line is a solution
  console.log('Title Component rendered')
  return <h3>{props.title}</h3>
}); // React.memo - solution for the 1 task

const Input = () => {
// solution for the task 2 below
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
    }
// local state should be replaced to the Input component and this is a solution for the task 2

  return (
    <input type="text" placeholder="Placeholder" value={value} onChange={onChange} />
  );
};
