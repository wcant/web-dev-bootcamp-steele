import {franc} from 'franc';
import langs from 'langs';

const testString = process.argv[2];

const langCode = franc(testString);

console.log(langs.where("3", langCode).name);


