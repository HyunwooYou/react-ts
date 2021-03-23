import React, {ChangeEvent, KeyboardEvent, useCallback, useState} from 'react';
import './ExTodoList.scoped.scss';
import ItemList from './ItemList/ItemList';

type ItemObj = { key: number, text: string };

const ExTodoList = () => {
  const [inputText, setInputText] = useState<string>('');
  const [itemObjList, setItemObjList] = useState<ItemObj[]>([]);

  const updateInputText = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  }, []);

  const addItem = () => {
    if (inputText.length === 0) {
      return ;
    }
    const newItemObj: ItemObj = {
      key: Date.now(),
      text: inputText
    };
    itemObjList.push(newItemObj);
    setItemObjList(itemObjList);
    setInputText('');
  };

  const deleteItem = (_key) => {
    setItemObjList(itemObjList.filter(e => e.key !== _key));
  };

  const handleEnter = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      addItem();
    }
  }, [inputText]);

  return (
      <div className="exTodoList">
        <div className="hwTitle">TodoList</div>

        <div className="header">
          <input
              type="text"
              placeholder="Enter task"
              onChange={updateInputText}
              onKeyDown={handleEnter}
              value={inputText}
          />
          <button onClick={addItem}>add</button>
          <button onClick={() => setItemObjList([])}>reset</button>
        </div>

        <ItemList
            entries={itemObjList}
            propsFunction={deleteItem}
        />
      </div>
  );
};

export default ExTodoList;
