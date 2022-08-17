import { describe, expect, it, vi } from "vitest";
import { generateReportData } from "./data";

describe('generateReportData()',()=>{
    it('verify the log function gets called using spies', ()=>{
        const logger = vi.fn()
        generateReportData(logger)
        expect(logger).toBeCalled()
    })
})