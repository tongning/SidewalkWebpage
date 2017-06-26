
# --- !Ups
ALTER TABLE mission_user ADD completed boolean;

ALTER TABLE audit_task ADD mission_user_id INTEGER;

ALTER TABLE audit_task
  ADD CONSTRAINT audit_task_mission_user_id_fkey
    FOREIGN KEY (mission_user_id) REFERENCES mission_user(mission_user_id);

# --- !Downs

ALTER TABLE mission_user DROP completed;

ALTER TABLE audit_task DROP mission_user_id;

ALTER TABLE audit_task DROP CONSTRAINT IF EXISTS audit_task_mission_user_id_fkey;
