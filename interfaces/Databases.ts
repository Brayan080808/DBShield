export default interface Databases{
    name:string;
    type:'mongodb'|'mysql'|'postgresql';
    lastBackup:string;
    isCheck: boolean;
}