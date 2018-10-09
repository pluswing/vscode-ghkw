import { CommandExecuter } from "./CommandExecuter";

type GhkwRow = {
    rank: string,
    keyword: string,
    total: string,
};

export class GhkwExecuter extends CommandExecuter<GhkwRow[]> {
    constructor() {
        super("ghkw");
    }

    format(response: string): GhkwRow[] {
        const lines = response.split("\n");
        return lines.slice(2, -1).map(line => {
            const columns = line.split("|").map(c => c.trim());
            return {
                rank: columns[1],
                keyword: columns[2],
                total: columns[3],
            };
        });
    }

}