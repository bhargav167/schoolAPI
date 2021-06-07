IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200701085722_sEctions')
BEGIN
    CREATE TABLE [Section] (
        [Id] int NOT NULL IDENTITY,
        [section] nvarchar(max) NOT NULL,
        CONSTRAINT [PK_Section] PRIMARY KEY ([Id])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200701085722_sEctions')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20200701085722_sEctions', N'3.1.0');
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200702122530_Ischecked')
BEGIN
    ALTER TABLE [Section] ADD [isChecked] bit NOT NULL DEFAULT CAST(0 AS bit);
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200702122530_Ischecked')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20200702122530_Ischecked', N'3.1.0');
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200703034948_SecBNav')
BEGIN
    ALTER TABLE [classes] ADD [sections] nvarchar(max) NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200703034948_SecBNav')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20200703034948_SecBNav', N'3.1.0');
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200706122826_SunjectsMaster')
BEGIN
    CREATE TABLE [Subject] (
        [Id] int NOT NULL IDENTITY,
        [Subject] nvarchar(max) NOT NULL,
        [Types] nvarchar(max) NOT NULL,
        [codeId] int NOT NULL,
        CONSTRAINT [PK_Subject] PRIMARY KEY ([Id])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200706122826_SunjectsMaster')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20200706122826_SunjectsMaster', N'3.1.0');
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200715040005_TimeTable')
BEGIN
    CREATE TABLE [TimeTable] (
        [Id] int NOT NULL IDENTITY,
        [Classes] nvarchar(max) NULL,
        [Sec] nvarchar(max) NULL,
        [WeekDay] nvarchar(max) NULL,
        [Subject] int NOT NULL,
        [teacher] int NOT NULL,
        [timefrom] nvarchar(max) NULL,
        [timeTo] nvarchar(max) NULL,
        [RoomNo] int NOT NULL,
        CONSTRAINT [PK_TimeTable] PRIMARY KEY ([Id])
    );
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200715040005_TimeTable')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20200715040005_TimeTable', N'3.1.0');
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200715064258_EmpDatatypeChange')
BEGIN
    DECLARE @var0 sysname;
    SELECT @var0 = [d].[name]
    FROM [sys].[default_constraints] [d]
    INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
    WHERE ([d].[parent_object_id] = OBJECT_ID(N'[employees]') AND [c].[name] = N'EmpId');
    IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [employees] DROP CONSTRAINT [' + @var0 + '];');
    ALTER TABLE [employees] ALTER COLUMN [EmpId] int NOT NULL;
END;

GO

IF NOT EXISTS(SELECT * FROM [__EFMigrationsHistory] WHERE [MigrationId] = N'20200715064258_EmpDatatypeChange')
BEGIN
    INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
    VALUES (N'20200715064258_EmpDatatypeChange', N'3.1.0');
END;

GO

