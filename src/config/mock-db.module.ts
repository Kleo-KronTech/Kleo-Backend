import { Module } from '@nestjs/common';

// Mock in-memory database for temporary local storage
class MockDatabase {
  private data: Map<string, any[]> = new Map();

  insert(table: string) {
    return {
      values: async (values: any) => {
        if (!this.data.has(table)) {
          this.data.set(table, []);
        }
        this.data.get(table)!.push(values);
      }
    };
  }

  select() {
    return {
      from: (table: string) => {
        return {
          where: (condition: any) => {
            return {
              limit: (n: number) => {
                // Mock implementation - returns empty for now
                return Promise.resolve([]);
              }
            };
          }
        };
      }
    };
  }
}

@Module({
  providers: [
    {
      provide: 'DB',
      useValue: new MockDatabase()
    }
  ],
  exports: ['DB']
})
export class MockDatabaseModule {}
