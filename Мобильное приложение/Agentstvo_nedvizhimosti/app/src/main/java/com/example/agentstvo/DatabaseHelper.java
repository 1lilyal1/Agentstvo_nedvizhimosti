package com.example.agentstvo;

import android.database.sqlite.SQLiteOpenHelper;
import android.database.sqlite.SQLiteDatabase;
import android.content.Context;

public class DatabaseHelper extends SQLiteOpenHelper {
    private static final String DATABASE_NAME = "Events.db";
    private static final int SCHEMA = 5;
    static final String TABLE = "users";
    // названия столбцов
    public static final String COLUMN_ID        = "_id";
    public static final String COLUMN_YEAR      = "Data";
    public static final String COLUMN_COUNT     = "Count";
    public static final String COLUMN_TYPE      = "Type";
    public static final String COLUMN_COMMENT   = "Comment";

    public DatabaseHelper(Context context) {
        super(context, DATABASE_NAME, null, SCHEMA);
    }

    @Override
    public void onCreate(SQLiteDatabase db) {
        //Сама таблица
        db.execSQL("create table "+ TABLE +"("
                + COLUMN_ID + " integer primary key autoincrement,"
                + COLUMN_YEAR + " text not null,"
                + COLUMN_COUNT + " integer ,"
                + COLUMN_TYPE + " TEXT not null,"
                + COLUMN_COMMENT + " TEXT" + ");");
    }
    @Override
    public void onUpgrade(SQLiteDatabase db, int oldVersion,  int newVersion) {
        db.execSQL("DROP TABLE IF EXISTS "+TABLE);
        onCreate(db);
    }
}
