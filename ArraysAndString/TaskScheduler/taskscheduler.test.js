import taskScheduler from "./taskscheduler";

describe('TaskScheduler', () => {
    test("Example One", () => {
        const input = ["A","A","A","B","B","B"];
        const n = 2
        const output = 8;
        expect(taskScheduler(input, n)).toBe(output);
    });


    test("Example Two", () => {
        const input = ["A","A","A","B","B","B"]
        const n = 0;
        const output = 6;

        expect(taskScheduler(input, n)).toBe(output);
    })
    test("Example 3", () => {
        const input = ["A","A","A","A","A","A","B","C","D","E","F","G"]
        const n = 2;
        const output = 16;

        expect(taskScheduler(input, n)).toBe(output);

    })

    test("Example four", ()=>{
        const input =["A","A","A","A","A","A","B","C","D","E","F","G"];
        const n = 1;
        const output = 12;
        expect(taskScheduler(input, n)).toBe(output);
    })
})
