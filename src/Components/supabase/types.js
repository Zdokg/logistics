export const Constants = {
  public: {
    Enums: {},
  },
};

export const Database = {
  public: {
    Tables: {
      messages: {
        Row: {
          chat_id: 0,
          content: "",
          created_at: null,
          id: 0,
        },
        Insert: {
          chat_id: 0,
          content: "",
          created_at: null,
          id: undefined,
        },
        Update: {
          chat_id: undefined,
          content: undefined,
          created_at: undefined,
          id: undefined,
        },
        Relationships: [],
      },
      user1: {
        Row: {
          created_at: "",
          id: 0,
          test: 0,
        },
        Insert: {
          created_at: "",
          id: undefined,
          test: 0,
        },
        Update: {
          created_at: undefined,
          id: undefined,
          test: undefined,
        },
        Relationships: [],
      },
      users: {
        Row: {
          created_at: "",
          id: 0,
          test: null,
        },
        Insert: {
          created_at: "",
          id: undefined,
          test: null,
        },
        Update: {
          created_at: undefined,
          id: undefined,
          test: undefined,
        },
        Relationships: [],
      },
    },
    Views: {},
    Functions: {},
    Enums: {},
    CompositeTypes: {},
  },
};

// Helpers (placeholders — adjust if you're doing runtime validation, etc.)
export function getTableRow(schema, table) {
  return Database[schema]?.Tables?.[table]?.Row || null;
}

export function getTableInsert(schema, table) {
  return Database[schema]?.Tables?.[table]?.Insert || null;
}

export function getTableUpdate(schema, table) {
  return Database[schema]?.Tables?.[table]?.Update || null;
}
