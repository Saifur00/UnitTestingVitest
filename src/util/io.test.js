import { promises as fs } from 'fs';
import { expect, it, vi } from 'vitest';
import writeData from './io';
vi.mock('fs')
vi.mock('path', ()=>{
    return{
        default:{
            join: (...args) => {
                return args[args.length-1]
            }
        }
            
    }
})

it('test if writefileFn was called and executed', ()=>{
    const testData = 'test'
    const testFileName = 'test.txt'
    writeData(testData, testFileName)
    
    // return expect(writeData(testData, testFileName)).resolves.toBeUndefined()
    // expect(fs.writeFile).toBeCalled()
    // console.log(testFileName)
    expect(fs.writeFile).toBeCalledWith(testFileName,testData)
})

it('test if return resolves a promise', ()=>{
    const testData = 'test'
    const testFileName = 'test.txt'
    writeData(testData, testFileName)
    
    return expect(writeData(testData, testFileName)).resolves.toBeUndefined()
    // expect(fs.writeFile).toBeCalled()
    // console.log(testFileName)
    // expect(fs.writeFile).toBeCalledWith(testFileName,testData)
})