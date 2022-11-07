import { faker } from '@faker-js/faker';
import { factory, primaryKey } from '@mswjs/data';

const db = factory({
    post: {
        id: primaryKey(faker.datatype.uuid),
        title: faker.lorem.words,
        content: faker.lorem.paragraphs,
        image: faker.image.imageUrl,
    },
});

db.post.create();
db.post.create();
db.post.create();

export default db;
