import { openDB } from 'idb';

const initdb = async () =>
    openDB('jate', 1, {
        upgrade(db) {
            if (db.objectStoreNames.contains('jate')) {
                return;
            }
            db.createObjectStore('content', { keyPath: 'id', autoIncrement: true });
        },
    });

// Method that accepts some content and adds it to the database
export const putDb = async (content) => {
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('content', 'readwrite');
    const store = tx.objectStore('content');
    await store.put({id: 1, content: content});
};

// Method that gets all the content from the database
export const getDb = async () => {
    const jateDb = await openDB('jate', 1);
    const tx = jateDb.transaction('content', 'readonly');
    const store = tx.objectStore('content');
    const result = await store.get(1);
    return result;
};

initdb();
